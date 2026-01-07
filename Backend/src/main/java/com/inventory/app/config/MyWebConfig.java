package com.inventory.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyWebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Apply to paths starting with /api/
                        .allowedOrigins("*") // Specific origins
                        .allowedMethods("*") // Allowed HTTP methods
                        .allowedHeaders("*") // Allowed headers
                        .allowCredentials(false) // Allow cookies and authentication headers
                        .maxAge(3600); // Max age for pre-flight requests
            }
        };
    }
}