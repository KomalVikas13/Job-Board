package com.springmongo.JobBoard.service;

import com.springmongo.JobBoard.model.User;
import com.springmongo.JobBoard.model.UserPrincipal;
import com.springmongo.JobBoard.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repo.findByUserName(username);
        if(user.isEmpty()){
            throw new UsernameNotFoundException("User not Found");
        }

        return new UserPrincipal(user.get());
    }
}
