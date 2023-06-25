package com.example.employmentagencybackend.controller;

import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.mapper.CandidateMapper;
import com.example.employmentagencybackend.model.Candidate;
import com.example.employmentagencybackend.service.CandidateService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("candidate")
public class CandidateController {

    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = { "multipart/form-data" })
    public void save(@ModelAttribute CandidateCreationDto candidateCreationDto) throws IOException {

        Candidate candidate = candidateService.save(candidateCreationDto);

    }
}
