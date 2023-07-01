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
@Document(indexName = CandidateIndexUnit.INDEX_NAME, shards = 1, replicas = 0)
public class CandidateIndexUnit {

    public static final String INDEX_NAME = "candidates";

    public static final String SERBIAN_ANALYZER = "serbian";

    @Id
    @Field(type = FieldType.Long, store = true, analyzer = SERBIAN_ANALYZER)
    private Long id;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String firstName;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String lastName;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String email;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String phoneNumber;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private EducationDegree educationDegree;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String cvContent;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String motivationalLetterContent;

    @Field(type = FieldType.Nested, includeInParent = true, analyzer = SERBIAN_ANALYZER)
    private Address address;

}
