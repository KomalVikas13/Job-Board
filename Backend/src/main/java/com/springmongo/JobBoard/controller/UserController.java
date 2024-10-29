package com.springmongo.JobBoard.controller;

import com.springmongo.JobBoard.dto.UserDto;
import com.springmongo.JobBoard.service.UserDtoService;
import com.springmongo.JobBoard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto dto){
        try {
            String response = service.registerUser(dto);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Something went wrong please try again");
        }


    }
}
