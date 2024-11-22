package com.practice.demowebapp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.practice.demowebapp.mappers")
public class DemowebappApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemowebappApplication.class, args);
    }

}
