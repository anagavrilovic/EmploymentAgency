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
                .address(Address.builder()
                        .streetName(candidateCreationDto.getStreetName())
                        .streetNumber(candidateCreationDto.getStreetNumber())
                        .city(candidateCreationDto.getCity())
                        .country(candidateCreationDto.getCountry())
                        .postalCode(candidateCreationDto.getPostalCode())
                        .location(null)
                        .build())
                .phoneNumber(candidateCreationDto.getPhoneNumber())
                .educationDegree(candidateCreationDto.getEducationDegree())
                .build();
    }

}
