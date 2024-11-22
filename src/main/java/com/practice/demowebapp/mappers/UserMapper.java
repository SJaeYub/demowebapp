package com.practice.demowebapp.mappers;

import com.practice.demowebapp.models.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    void insertUser(User user);
    User findByUsername(String username);
    boolean existsByUsername(String username);
}