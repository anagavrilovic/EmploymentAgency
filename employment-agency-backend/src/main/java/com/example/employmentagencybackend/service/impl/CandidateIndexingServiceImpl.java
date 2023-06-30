package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.model.Candidate;
import com.example.employmentagencybackend.model.CandidateIndexUnit;
import com.example.employmentagencybackend.repository.CandidateIndexRepository;
import com.example.employmentagencybackend.service.CandidateIndexingService;
import lombok.AllArgsConstructor;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.IndexQuery;
import org.springframework.data.elasticsearch.core.query.IndexQueryBuilder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CandidateIndexingServiceImpl implements CandidateIndexingService {

    private final CandidateIndexRepository candidateIndexRepository;

    @Override
    public String addCandidate(Candidate candidate, String cvContent, String motivationalLetterContent) {
        CandidateIndexUnit candidateIndexUnit = CandidateIndexUnit.builder()
                .id(candidate.getId())
                .firstName(candidate.getFirstName())
                .lastName(candidate.getLastName())
                .email(candidate.getEmail())
                .address(candidate.getAddress())
                .educationDegree(candidate.getEducationDegree())
                .phoneNumber(candidate.getPhoneNumber())
                .cvContent(cvContent)
                .motivationalLetterContent(motivationalLetterContent)
                .build();

        return candidateIndexRepository.save(candidateIndexUnit).getId().toString();
    }

}
