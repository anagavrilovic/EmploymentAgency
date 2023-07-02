package com.example.employmentagencybackend.controller;

import com.example.employmentagencybackend.service.LoggingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("logging")
public class LoggingController {

    Logger logger = LoggerFactory.getLogger(LoggingController.class);

    LoggingService loggingService;

    public LoggingController(LoggingService loggingService) {
        this.loggingService = loggingService;
    }

    @GetMapping(value = "/premiumHiring/{city}")
    public ResponseEntity<?> logPremiumHiringRequest(@PathVariable String city) {
        loggingService.logPremiumHiringRequest(city);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/successfulEmployment/{employeeUsername}")
    public ResponseEntity<String> logNewSuccessfulEmployment(@PathVariable String employeeUsername) {
        loggingService.logNewSuccessfulEmployment(employeeUsername);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/newEmployee/{companyName}")
    public ResponseEntity<String> logNewEmployeeForCompany(@PathVariable  String companyName) {
        loggingService.logNewEmployeeForCompany(companyName);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
