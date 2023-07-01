package com.example.employmentagencybackend.service;

import com.example.employmentagencybackend.dto.SearchQuery;
import com.example.employmentagencybackend.dto.SearchResult;

import java.util.List;

public interface SearchService {

    List<SearchResult> search(List<SearchQuery> query);

}
