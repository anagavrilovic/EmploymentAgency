package com.example.employmentagencybackend.model;

import com.example.employmentagencybackend.model.enums.EducationDegree;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(indexName = CandidateIndexUnit.INDEX_NAME)
public class CandidateIndexUnit {

    public static final String INDEX_NAME = "candidates";

    @Id
    @Field(type = FieldType.Long, store = true)
    protected Long id;

    @Field(type = FieldType.Text, store = true)
    private String firstName;

    @Field(type = FieldType.Text, store = true)
    private String lastName;

    @Field(type = FieldType.Text, store = true)
    private String email;

    @Field(type = FieldType.Text, store = true)
    private String phoneNumber;

    @Field(type = FieldType.Text, store = true)
    private EducationDegree educationDegree;

    @Field(type = FieldType.Text, store = true)
    private String cvContent;

    @Field(type = FieldType.Text, store = true)
    private String motivationalLetterContent;

    @Field(type = FieldType.Nested, includeInParent = true)
    private Address address;

}
