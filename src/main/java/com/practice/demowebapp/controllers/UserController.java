package com.practice.demowebapp.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/welcome")
    public String welcome(Authentication authentication) {
        return "Welcome, " + authentication.getName() + "!";
    }
}