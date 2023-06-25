package com.example.employmentagencybackend.dto;

import com.example.employmentagencybackend.model.Address;
import com.example.employmentagencybackend.model.enums.EducationDegree;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CandidateCreationDto {

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private EducationDegree educationDegree;
    private String streetName;
    private String streetNumber;
    private String postalCode;
    private String city;
    private String country;
    private MultipartFile cv;
    private MultipartFile motivationalLetter;

}
