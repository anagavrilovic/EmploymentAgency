package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.repository.CandidateRepository;
import com.example.employmentagencybackend.service.CandidateService;
import org.springframework.stereotype.Service;

@Service
public class CandidateServiceImpl implements CandidateService {

    public final CandidateRepository candidateRepository;

    public CandidateServiceImpl(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    
}
