package com.example.employmentagencybackend.dto;

import com.example.employmentagencybackend.model.CandidateIndexUnit;
import com.example.employmentagencybackend.model.enums.EducationDegree;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchResult {

    private String id;
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
    private String highlighter;

    public SearchResult(CandidateIndexUnit candidateIndexUnit, String highlighter) {
        this.id = candidateIndexUnit.getId().toString();
        this.firstName = candidateIndexUnit.getFirstName();
        this.lastName = candidateIndexUnit.getLastName();
        this.email = candidateIndexUnit.getEmail();
        this.phoneNumber = candidateIndexUnit.getPhoneNumber();
        this.educationDegree = candidateIndexUnit.getEducationDegree();
        this.streetName = candidateIndexUnit.getAddress().getStreetName();
        this.streetNumber = candidateIndexUnit.getAddress().getStreetNumber();
        this.postalCode = candidateIndexUnit.getAddress().getPostalCode();
        this.city = candidateIndexUnit.getAddress().getCity();
        this.country = candidateIndexUnit.getAddress().getCountry();
        this.highlighter = highlighter;
    }

}
