package com.example.employmentagencybackend.model;

import jakarta.persistence.Id;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

public class BaseIndexUnit {

    @Id
    @Field(type = FieldType.Long, store = true)
    protected String id;

}
