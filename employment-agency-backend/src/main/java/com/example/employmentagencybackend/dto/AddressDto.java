package com.example.employmentagencybackend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddressDto {

    private String streetName;
    private String streetNumber;
    private String postalCode;
    private String city;
    private String country;

}
