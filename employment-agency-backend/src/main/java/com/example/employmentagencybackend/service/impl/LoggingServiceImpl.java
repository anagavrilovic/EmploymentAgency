package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.service.LoggingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class LoggingServiceImpl implements LoggingService {

    Logger logger = LoggerFactory.getLogger(LoggingServiceImpl.class);

    public LoggingServiceImpl() {
    }

    @Override
    public void logPremiumHiringRequest(String city) {
        logger.info("New premium employment request made from city: {}", city);
    }

    @Override
    public void logNewSuccessfulEmployment(String employeeUsername) {
        logger.info("Premium employment process finished successfully by employee: {}", employeeUsername);
    }

    @Override
    public void logNewEmployeeForCompany(String companyName) {
        logger.info("Premium employment finished with company: {}", companyName);
    }

}
