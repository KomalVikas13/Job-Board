package com.springmongo.JobBoard.service;

import com.springmongo.JobBoard.dto.UserDto;
import com.springmongo.JobBoard.model.User;
import com.springmongo.JobBoard.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private UserDtoService dtoService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String registerUser(UserDto dto) {
        User user = dtoService.dtoToUser(dto);
        user.setUserName(usernameGenerator(dto.getFullName()));
        user.setPassword(passwordEncoder.encode(user.getFullName()));
        if(user.getRole().equals("HR") || user.getRole().equals("HiringManager") ){
            user.setAccessRoles(Set.of("ROLE_RECRUITER").toArray(new String[0]));
        }else if (user.getRole().equals("ADMIN")){
            user.setAccessRoles(Set.of("ROLE_ADMIN").toArray(new String[0]));
        }
        repo.save(user);
        return user.getStatus();
    }

    private String usernameGenerator(String fullName) {
        String baseUsername = fullName.length() > 5 ? fullName.substring(0, 5) : fullName;
        String uniqueUsername = baseUsername;
        int counter = 1;

        while (repo.findByUserName(uniqueUsername).isPresent()) {
            uniqueUsername = baseUsername + counter;
            counter++;
        }

        return uniqueUsername;
    }
}
