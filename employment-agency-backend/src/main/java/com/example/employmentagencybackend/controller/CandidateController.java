package com.example.employmentagencybackend.controller;

import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.service.CandidateService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("candidate")
public class CandidateController {

    public final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @PostMapping("")
    public void create(@RequestBody CandidateCreationDto candidateCreationDto,
                       @RequestParam("cv") MultipartFile cvFile,
                       @RequestParam("motivationalLetter") MultipartFile motivationalLetterFile) {

    }
}
