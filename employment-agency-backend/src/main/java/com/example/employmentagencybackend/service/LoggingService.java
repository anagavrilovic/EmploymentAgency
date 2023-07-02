package com.example.employmentagencybackend.service;

import org.springframework.http.ResponseEntity;

public interface LoggingService {

    void logPremiumHiringRequest(String city);

    void logNewSuccessfulEmployment(String employeeUsername);

    void logNewEmployeeForCompany(String companyName);

}
