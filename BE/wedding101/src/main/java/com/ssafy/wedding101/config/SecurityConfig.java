package com.ssafy.wedding101.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // AUTH_WHITELIST에 속해 있는 url은 모두 security 권한 없이 들어갈 수 있음
    private static final String[] AUTH_WHITELIST = {
            "/","/user/**","/review/**","/question/**","/swagger-ui/index.html"
    };

    @Bean
    protected SecurityFilterChain config(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(authorize -> authorize
                        .shouldFilterAllDispatcherTypes(false)
                        .requestMatchers(AUTH_WHITELIST)
                        .permitAll()
                        .anyRequest()
                        .authenticated())
                .build();
    }
}
