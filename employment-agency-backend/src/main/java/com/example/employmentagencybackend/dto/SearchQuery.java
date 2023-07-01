package com.example.employmentagencybackend.dto;

import com.example.employmentagencybackend.dto.enums.LogicalOperation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchQuery {

    private LogicalOperation logicalOperation;
    private String field;
    private String value;
    private Boolean isPhrase;

}
