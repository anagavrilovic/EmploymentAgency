package com.example.employmentagencybackend.service.impl;

import com.byteowls.jopencage.JOpenCageGeocoder;
import com.byteowls.jopencage.model.JOpenCageForwardRequest;
import com.byteowls.jopencage.model.JOpenCageResponse;
import com.example.employmentagencybackend.service.GeocodingService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeocodingServiceImpl implements GeocodingService {
    @Value("${geocoding.apikey}")
    private String geocodingApiKey;
    @Override
    public GeoPoint getGeoPointOfCity(String city) {
        JOpenCageGeocoder jOpenCageGeocoder = new JOpenCageGeocoder(geocodingApiKey);
        JOpenCageForwardRequest request = new JOpenCageForwardRequest(city);
        JOpenCageResponse response = jOpenCageGeocoder.forward(request);
        Double latitude = response.getResults().get(0).getGeometry().getLat();
        Double longitude = response.getResults().get(0).getGeometry().getLng();
        return new GeoPoint(latitude, longitude);
    }
}
