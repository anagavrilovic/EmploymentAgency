package com.example.employmentagencybackend;

import com.example.employmentagencybackend.service.impl.LoggingServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@SpringBootApplication
public class EmploymentAgencyBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(EmploymentAgencyBackendApplication.class, args);

		List<String> cities = List.of("Beograd", "Novi Sad", "Niš", "Kragujevac", "Šabac");
		List<String> employees = List.of("mikamikic", "jocajocic", "zikazikic");
		List<String> companies = List.of("Google", "Microsoft", "Apple", "Amazon", "Facebook");

		LoggingServiceImpl loggingService = new LoggingServiceImpl();

		for(int i = 0; i < 100; i++) {
			int randomNumber = new Random().nextInt(5);
			loggingService.logPremiumHiringRequest(cities.get(randomNumber));
		}

		for(int i = 0; i < 120; i++) {
			int randomNumber = new Random().nextInt(3);
			loggingService.logNewSuccessfulEmployment(employees.get(randomNumber));
		}

		for(int i = 0; i < 80; i++) {
			int randomNumber = new Random().nextInt(5);
			loggingService.logNewEmployeeForCompany(companies.get(randomNumber));
		}
	}

}
