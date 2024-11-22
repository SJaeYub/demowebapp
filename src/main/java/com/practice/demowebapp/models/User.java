package com.practice.demowebapp.models;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String username;
    private String password;
    private String email;

    // Getters and setters
}