package com.example.employmentagencybackend.service;

import com.example.employmentagencybackend.model.Candidate;

public interface CandidateIndexingService {

    String addCandidate(Candidate candidate, String cvContent, String motivationalLetterContent);

}
