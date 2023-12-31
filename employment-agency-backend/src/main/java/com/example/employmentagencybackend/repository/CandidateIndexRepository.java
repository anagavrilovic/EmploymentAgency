package com.example.employmentagencybackend.repository;

import com.example.employmentagencybackend.model.CandidateIndexUnit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface CandidateIndexRepository extends ElasticsearchRepository<CandidateIndexUnit, Long> {

}
