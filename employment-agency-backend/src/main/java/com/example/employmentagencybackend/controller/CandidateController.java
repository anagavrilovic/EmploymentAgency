package com.example.employmentagencybackend.controller;

import com.amazonaws.services.s3.model.S3Object;
import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.model.Candidate;
import com.example.employmentagencybackend.service.CandidateService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("candidate")
public class CandidateController {

    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = { "multipart/form-data" })
    public Candidate save(@ModelAttribute CandidateCreationDto candidateCreationDto) throws IOException {
        return candidateService.save(candidateCreationDto);
    }

    @GetMapping
    public List<Candidate> findAll() {
        return candidateService.findAll();
    }

    @GetMapping("/{id}")
    public Candidate findById(@PathVariable("id") Long id) {
        return candidateService.findById(id);
    }

    @GetMapping("download/{id}/cv")
    @ResponseBody
    public HttpEntity<byte[]> downloadCv(@PathVariable("id") Long id, HttpServletResponse response) throws IOException {
        S3Object s3Object = candidateService.downloadCv(id);
        return createHttpEntity(s3Object);
    }

    @GetMapping("download/{id}/motivationalLetter")
    @ResponseBody
    public HttpEntity<byte[]> downloadMotivationalLetter(@PathVariable("id") Long id, HttpServletResponse response) throws IOException {
        S3Object s3Object = candidateService.downloadMotivationalLetter(id);
        return createHttpEntity(s3Object);
    }

    private static HttpEntity<byte[]> createHttpEntity(S3Object s3Object) throws IOException {
        String contentType = s3Object.getObjectMetadata().getContentType();
        var bytes = s3Object.getObjectContent().readAllBytes();

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.valueOf(contentType));
        header.setContentLength(bytes.length);

        return new HttpEntity<byte[]>(bytes, header);
    }

}
