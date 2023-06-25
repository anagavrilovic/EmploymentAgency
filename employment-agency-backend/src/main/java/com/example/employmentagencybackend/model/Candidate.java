package com.example.employmentagencybackend.model;

import com.example.employmentagencybackend.model.enums.EducationDegree;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Candidate extends BaseEntity {

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Column(nullable = false)
    private String phoneNumber;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private EducationDegree educationDegree;

    private String cv;

    private String motivationalLetter;

}
