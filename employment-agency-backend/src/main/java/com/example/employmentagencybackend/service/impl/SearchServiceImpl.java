package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.dto.SearchQuery;
import com.example.employmentagencybackend.dto.SearchResult;
import com.example.employmentagencybackend.dto.enums.LogicalOperation;
import com.example.employmentagencybackend.model.CandidateIndexUnit;
import com.example.employmentagencybackend.repository.CandidateIndexRepository;
import com.example.employmentagencybackend.service.QueryBuilderService;
import com.example.employmentagencybackend.service.SearchService;
import lombok.AllArgsConstructor;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final ElasticsearchOperations elasticsearchOperations;

    private final QueryBuilderService queryBuilderService;

    @Override
    public List<SearchResult> search(List<SearchQuery> query) {
        QueryBuilder boolQueryBuilder = queryBuilderService.getBoolQueryBuilder(query);

        NativeSearchQuery searchQuery = new NativeSearchQueryBuilder()
                .withQuery(boolQueryBuilder)
                .withHighlightFields(getHiglightFields(query))
                .build();

        SearchHits<CandidateIndexUnit> hits = elasticsearchOperations.search(searchQuery, CandidateIndexUnit.class);

        return getSearchResults(hits);
    }

    private HighlightBuilder.Field[] getHiglightFields(List<SearchQuery> query) {
        return query.stream()
                .map(q -> new HighlightBuilder.Field(q.getField()))
                .toArray(HighlightBuilder.Field[]::new);
    }

    private List<SearchResult> getSearchResults(SearchHits<CandidateIndexUnit> hits) {
        List<SearchResult> searchResults = new ArrayList<>();

        for (SearchHit<CandidateIndexUnit> hit : hits) {
            CandidateIndexUnit candidateIndexUnit = hit.getContent();
            String highlight = getHighlight(hit);

            SearchResult searchResult = new SearchResult(candidateIndexUnit, highlight);
            searchResults.add(searchResult);
        }

        return searchResults;
    }

    private String getHighlight(SearchHit<CandidateIndexUnit> hit) {
        return hit.getHighlightFields().values()
                .stream()
                .reduce((strings1, strings2) -> Stream.concat(strings1.stream(), strings2.stream()).collect(Collectors.toList()))
                .map(strings -> String.join(" ... ", strings))
                .orElseGet(() -> {
                            String cvContent = hit.getContent().getCvContent().substring(0, 150);
                            String motivationalLetterContent = hit.getContent().getMotivationalLetterContent().substring(0, 150);
                            return cvContent.concat(" ... ").concat(motivationalLetterContent).concat(" ... ");
                        }
                );
    }

}
