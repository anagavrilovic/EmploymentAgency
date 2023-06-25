package com.example.employmentagencybackend.mapper;

import com.example.employmentagencybackend.dto.AddressDto;
import com.example.employmentagencybackend.model.Address;

public class AddressMapper {

    public static Address mapAddressDtoToAddress(AddressDto addressDto) {
        return Address.builder()
                .streetName(addressDto.getStreetName())
                .streetNumber(addressDto.getStreetNumber())
                .city(addressDto.getCity())
                .postalCode(addressDto.getPostalCode())
                .country(addressDto.getCountry())
                .build();
    }
}
