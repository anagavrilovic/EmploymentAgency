package com.example.employmentagencybackend.controller;

import com.example.employmentagencybackend.dto.GeoQuery;
import com.example.employmentagencybackend.dto.SearchQuery;
import com.example.employmentagencybackend.dto.SearchResult;
import com.example.employmentagencybackend.service.SearchService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "search", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class SearchController {

    private final SearchService searchService;

    @PostMapping
    public List<SearchResult> search(@RequestBody List<SearchQuery> query) {
        return searchService.search(query);
    }

    @PostMapping("/geo")
    public List<SearchResult> geoSearch(@RequestBody GeoQuery geoQuery) {
        return searchService.geospatialSearch(geoQuery);
    }
}
