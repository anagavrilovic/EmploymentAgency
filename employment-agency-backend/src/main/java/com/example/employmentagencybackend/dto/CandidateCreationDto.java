package com.example.employmentagencybackend.dto;

import com.example.employmentagencybackend.model.Address;
import com.example.employmentagencybackend.model.enums.EducationDegree;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CandidateCreationDto {
    private String firstName;
    private String lastName;
    private String email;
    private AddressDto address;
    private String phoneNumber;
    private EducationDegree educationDegree;
    private String cv;
    private String motivationalLetter;
}
