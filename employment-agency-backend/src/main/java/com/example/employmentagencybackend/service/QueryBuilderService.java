package com.example.employmentagencybackend.service;

import com.example.employmentagencybackend.dto.SearchQuery;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;

import java.util.List;

public interface QueryBuilderService {

    public QueryBuilder getBoolQueryBuilder(List<SearchQuery> searchQuery);

    public QueryBuilder getQueryBuilder(SearchQuery searchQuery);

}
