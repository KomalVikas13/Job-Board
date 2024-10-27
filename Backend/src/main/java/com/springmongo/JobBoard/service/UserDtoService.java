package com.springmongo.JobBoard.service;

import com.springmongo.JobBoard.dto.UserDto;
import com.springmongo.JobBoard.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserDtoService {

    public User dtoToUser(UserDto dto){
        User user = new User();
        user.setFullName(dto.getFullName());
        user.setCompanyEmail(dto.getCompanyEmail());
        user.setLinkedinProfile(dto.getLinkedinProfile());
        user.setCompany(dto.getCompany());
        user.setRole(dto.getRole());
        user.setStatus("pending");

        return user;
    }
}
