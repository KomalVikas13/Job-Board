package com.springmongo.JobBoard.repository;

import com.springmongo.JobBoard.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobsRepo extends MongoRepository<Job, String> {
}
