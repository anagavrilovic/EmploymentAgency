package com.example.employmentagencybackend.model;

import com.example.employmentagencybackend.model.enums.EducationDegree;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@SuppressWarnings("deprecation")
@Document(indexName = CandidateIndexUnit.INDEX_NAME, shards = 1, replicas = 0)
public class CandidateIndexUnit {

    public static final String INDEX_NAME = "candidates";

    @Field(type = FieldType.Text, store = true)
    private String firstName;

    @Field(type = FieldType.Text, store = true)
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
