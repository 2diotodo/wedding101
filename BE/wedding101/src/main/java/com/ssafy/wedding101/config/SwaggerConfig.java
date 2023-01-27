package com.ssafy.wedding101.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@OpenAPIDefinition(
        info = @Info(title = "wedding101 API 명세서", description = "wedding101 API 명세서입니다",version = "V1")
)
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi wedding101Api(){
        String[] paths = {"/**"};

        return GroupedOpenApi.builder()
                .group("wedding101 API v1")
                .pathsToMatch(paths)
                .build();
    }


}
