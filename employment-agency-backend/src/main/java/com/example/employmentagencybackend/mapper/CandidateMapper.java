package com.example.employmentagencybackend.mapper;

import com.example.employmentagencybackend.dto.CandidateCreationDto;
import com.example.employmentagencybackend.model.Address;
import com.example.employmentagencybackend.model.Candidate;

public class CandidateMapper {

    public static Candidate mapCandidateCreationDtoToCandidate(CandidateCreationDto candidateCreationDto) {
        return Candidate.builder()
                .firstName(candidateCreationDto.getFirstName())
                .lastName(candidateCreationDto.getLastName())
                .email(candidateCreationDto.getEmail())
                .address(new Address(candidateCreationDto.getStreetName(),
                        candidateCreationDto.getStreetNumber(),
                        candidateCreationDto.getPostalCode(),
                        candidateCreationDto.getCity(),
                        candidateCreationDto.getCountry()))
                .phoneNumber(candidateCreationDto.getPhoneNumber())
                .educationDegree(candidateCreationDto.getEducationDegree())
                .build();
    }

}
