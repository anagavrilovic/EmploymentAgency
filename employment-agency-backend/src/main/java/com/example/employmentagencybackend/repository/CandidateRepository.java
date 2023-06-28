package com.example.employmentagencybackend.repository;

import com.example.employmentagencybackend.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    Optional<Object> findByEmail(String email);
}
