package com.example.employmentagencybackend.service;

import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.model.Candidate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CandidateService {
    Candidate save(CandidateCreationDto candidateCreationDto) throws IOException;
}
