package com.practice.demowebapp.controllers;

import com.practice.demowebapp.models.User;
import com.practice.demowebapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.isUsernameAvailable(user.getUsername())) {
            userService.registerUser(user);
            return ResponseEntity.ok().body("{\"success\": true, \"message\": \"User registered successfully\"}");
        } else {
            return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Username is already taken\"}");
        }
    }

    @PostMapping("/check-username")
    public ResponseEntity<?> checkUsername(@RequestBody String username) {
        boolean isAvailable = userService.isUsernameAvailable(username);
        return ResponseEntity.ok().body("{\"available\": " + isAvailable + "}");
    }
}