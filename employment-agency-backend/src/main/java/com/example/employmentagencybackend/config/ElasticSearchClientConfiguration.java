package com.example.employmentagencybackend.config;

import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration
@EnableElasticsearchRepositories(basePackages = "com.example.employmentagencybackend.repository")
@ComponentScan(basePackages = { "com.example.employmentagencybackend.service" })
public class ElasticSearchClientConfiguration  extends AbstractElasticsearchConfiguration {

    @Value("${spring.elasticsearch.url}")
    private String elasticsearchUrl;

    @Bean
    @Override
    public RestHighLevelClient elasticsearchClient() {
        ClientConfiguration clientConfiguration = ClientConfiguration.builder()
                .connectedTo(elasticsearchUrl)
                .build();

        return RestClients.create(clientConfiguration)
                .rest();
    }

}
