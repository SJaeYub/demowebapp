package com.practice.demowebapp.controllers;

import com.practice.demowebapp.models.User;
import com.practice.demowebapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
public class UserController {

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

    @GetMapping("/welcome")
    public String welcome(Principal principal) {
        return "Welcome, " + principal.getName() + "!";
    }
}