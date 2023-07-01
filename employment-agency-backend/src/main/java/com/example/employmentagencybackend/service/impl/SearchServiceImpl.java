package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.dto.SearchQuery;
import com.example.employmentagencybackend.dto.SearchResult;
import com.example.employmentagencybackend.model.CandidateIndexUnit;
import com.example.employmentagencybackend.repository.CandidateIndexRepository;
import com.example.employmentagencybackend.service.SearchService;
import lombok.AllArgsConstructor;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.MatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final ElasticsearchOperations elasticsearchOperations;

    private final CandidateIndexRepository candidateIndexRepository;


    @Override
    public List<SearchResult> search(SearchQuery query) {
        MatchQueryBuilder queryBuilder = QueryBuilders.matchQuery(query.getField(), query.getValue());

        Query searchQuery = new NativeSearchQueryBuilder().withQuery(queryBuilder).build();

        SearchHits<CandidateIndexUnit> candidateHits = elasticsearchOperations
                .search(searchQuery, CandidateIndexUnit.class, IndexCoordinates.of(CandidateIndexUnit.INDEX_NAME));

        System.out.println(candidateHits);

        return null;
    }

    @Override
    public List<SearchResult> booleanSearch(List<SearchQuery> query) {
        return null;
    }

}
