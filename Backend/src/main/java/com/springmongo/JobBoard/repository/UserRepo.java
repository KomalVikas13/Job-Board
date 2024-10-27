package com.springmongo.JobBoard.repository;

import com.springmongo.JobBoard.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepo extends MongoRepository<User, String> {
    Optional<Object> findByUserName(String uniqueUsername);
}
