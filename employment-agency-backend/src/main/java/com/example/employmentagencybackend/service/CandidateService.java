package com.example.employmentagencybackend.service;

import com.amazonaws.services.s3.model.S3Object;
import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.model.Candidate;

import java.io.IOException;
import java.util.List;

public interface CandidateService {

    Candidate save(CandidateCreationDto candidateCreationDto) throws IOException;

    List<Candidate> findAll();

    Candidate findById(Long id);

    S3Object downloadCv(Long id);

    S3Object downloadMotivationalLetter(Long id);

}
