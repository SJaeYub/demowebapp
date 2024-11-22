package com.practice.demowebapp.services;


import com.practice.demowebapp.mappers.UserMapper;
import com.practice.demowebapp.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userMapper.insertUser(user);
    }

    public boolean isUsernameAvailable(String username) {
        return !userMapper.existsByUsername(username);
    }

    public User findByUsername(String username) {
        return userMapper.findByUsername(username);
    }
}