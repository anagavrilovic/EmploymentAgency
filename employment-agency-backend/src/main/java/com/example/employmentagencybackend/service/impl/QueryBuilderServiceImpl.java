package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.dto.SearchQuery;
import com.example.employmentagencybackend.dto.enums.LogicalOperation;
import com.example.employmentagencybackend.service.QueryBuilderService;
import lombok.AllArgsConstructor;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@AllArgsConstructor
public class QueryBuilderServiceImpl implements QueryBuilderService {

    public QueryBuilder getBoolQueryBuilder(List<SearchQuery> searchQuery) {
        QueryBuilder queryBuilder = getQueryBuilder(searchQuery.get(0));

        for(int i = 1; i < searchQuery.size(); i++) {
            SearchQuery currentSearchQuery = searchQuery.get(i);
            QueryBuilder currentQueryBuilder = getQueryBuilder(currentSearchQuery);

            BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
            if(currentSearchQuery.getLogicalOperation().equals(LogicalOperation.AND)) {
                boolQueryBuilder.must(queryBuilder);
                boolQueryBuilder.must(currentQueryBuilder);
            } else if (currentSearchQuery.getLogicalOperation().equals(LogicalOperation.OR)) {
                boolQueryBuilder.should(queryBuilder);
                boolQueryBuilder.should(currentQueryBuilder);
            }

            queryBuilder = boolQueryBuilder;
        }

        return queryBuilder;
    }

    public QueryBuilder getQueryBuilder(SearchQuery searchQuery) {
        validateSearchQuery(searchQuery);

        if(searchQuery.getIsPhrase()) {
            return QueryBuilders.matchPhraseQuery(searchQuery.getField(), searchQuery.getValue());
        } else {
            return QueryBuilders.matchQuery(searchQuery.getField(), searchQuery.getValue());
        }
    }

    private static void validateSearchQuery(SearchQuery searchQuery) {
        if(searchQuery.getField().isBlank() || searchQuery.getField() == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Field empty.");
        if(searchQuery.getValue().isBlank() || searchQuery.getValue() == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No value.");
    }
}
