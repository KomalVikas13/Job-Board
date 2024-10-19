package com.springmongo.JobBoard.repository;

import com.springmongo.JobBoard.model.Job;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsSearchRepo {
    List<Job> searchByText(String text);
}
