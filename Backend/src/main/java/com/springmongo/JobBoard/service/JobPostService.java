package com.springmongo.JobBoard.service;

import com.springmongo.JobBoard.model.Job;
import com.springmongo.JobBoard.repository.JobsPostRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JobPostService {

    private JobsPostRepo jobsPostRepo;
    JobPostService(JobsPostRepo jobsPostRepo){
        this.jobsPostRepo = jobsPostRepo;
    }
    public String postJob(Job job) {
        boolean response = jobsPostRepo.existsById(job.getJobId());
        if(response){
            return "EXISTS";
        }
        jobsPostRepo.save(job);
        return "CREATED";
    }

    public String updateJob(Job job) {
        boolean response = jobsPostRepo.existsById(job.getJobId());
        if(response){
            jobsPostRepo.save(job);
            return "UPDATED";
        }
        return "NOT_FOUND";
    }
}
