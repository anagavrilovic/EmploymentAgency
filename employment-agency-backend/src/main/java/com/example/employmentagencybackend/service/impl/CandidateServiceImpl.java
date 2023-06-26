package com.example.employmentagencybackend.service.impl;

import com.amazonaws.services.s3.model.S3Object;
import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.mapper.CandidateMapper;
import com.example.employmentagencybackend.model.Candidate;
import com.example.employmentagencybackend.repository.CandidateRepository;
import com.example.employmentagencybackend.service.AmazonS3Service;
import com.example.employmentagencybackend.service.CandidateService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.*;

@Service
public class CandidateServiceImpl implements CandidateService {

    private final String CVS_DIRECTORY = "cvs";
    private final String MOTIVATIONAL_LETTERS_DIRECTORY = "motivational-letters";

    @Value("${amazon.aws.s3.bucket-name}")
    private String bucketName;

    private final AmazonS3Service amazonS3Service;

    private final CandidateRepository candidateRepository;

    public CandidateServiceImpl(AmazonS3Service amazonS3Service, CandidateRepository candidateRepository) {
        this.amazonS3Service = amazonS3Service;
        this.candidateRepository = candidateRepository;
    }

    @Override
    public Candidate save(CandidateCreationDto candidateCreationDto) throws IOException {

        if (candidateCreationDto.getCv().isEmpty() || candidateCreationDto.getMotivationalLetter().isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot upload empty file");

        String cvFullPath = uploadFileToS3(candidateCreationDto.getCv(), CVS_DIRECTORY);
        String motivationalLetterFullPath = uploadFileToS3(candidateCreationDto.getMotivationalLetter(), MOTIVATIONAL_LETTERS_DIRECTORY);

        Candidate candidate = CandidateMapper.mapCandidateCreationDtoToCandidate(candidateCreationDto);
        candidate.setCv(cvFullPath);
        candidate.setMotivationalLetter(motivationalLetterFullPath);
        return candidateRepository.save(candidate);
    }

    @Override
    public List<Candidate> findAll() {
        return candidateRepository.findAll();
    }

    @Override
    public Candidate findById(Long id) {
        return candidateRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Candidate with this id not found"));
    }

    @Override
    public S3Object downloadCv(Long id) {
        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Candidate with this id not found"));

        return amazonS3Service.download(candidate.getCv());
    }

    @Override
    public S3Object downloadMotivationalLetter(Long id) {
        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Candidate with this id not found"));

        return amazonS3Service.download(candidate.getMotivationalLetter());
    }

    private String uploadFileToS3(MultipartFile file, String directory) throws IOException {
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));

        String path = String.format("%s/%s", bucketName, directory);
        String fileName = String.format("%s.pdf", UUID.randomUUID());

        // Uploading file to s3
        amazonS3Service.upload(path, fileName, Optional.of(metadata), file.getInputStream());

        return String.format("%s/%s", path, fileName);
    }


}