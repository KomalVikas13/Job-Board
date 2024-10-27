package com.springmongo.JobBoard.controller;

import com.springmongo.JobBoard.dto.UserDto;
import com.springmongo.JobBoard.service.UserDtoService;
import com.springmongo.JobBoard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto dto){
        String response = service.registerUser(dto);

    }
}
