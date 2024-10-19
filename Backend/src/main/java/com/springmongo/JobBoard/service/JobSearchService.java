package com.springmongo.JobBoard.service;

import com.springmongo.JobBoard.model.Job;
import com.springmongo.JobBoard.repository.JobsPostRepo;
import com.springmongo.JobBoard.repository.JobsSearchRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobSearchService {
    private JobsSearchRepo jobsSearchRepo;
    private JobsPostRepo jobsPostRepo;

    JobSearchService(JobsSearchRepo jobsSearchRepo, JobsPostRepo jobsPostRepo){
        this.jobsSearchRepo = jobsSearchRepo;
        this.jobsPostRepo = jobsPostRepo;
    }


    public List<Job> getJobs() {
        return jobsPostRepo.findAll();
    }

    public List<Job> searchJob(String text) {
        return jobsSearchRepo.searchByText(text);
    }
}
