package com.example.employmentagencybackend.service;


import org.springframework.data.elasticsearch.core.geo.GeoPoint;

public interface GeocodingService {

    public GeoPoint getGeoPointOfCity(String city);

}
