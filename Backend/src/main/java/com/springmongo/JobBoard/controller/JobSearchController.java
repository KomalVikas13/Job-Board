package com.springmongo.JobBoard.controller;

import com.springmongo.JobBoard.model.Job;
import com.springmongo.JobBoard.service.JobSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/public")
public class JobSearchController {

    @Autowired
    private JobSearchService jobSearchService;

    public JobSearchController(JobSearchService jobSearchService) {
        this.jobSearchService = jobSearchService;
    }


    @GetMapping("/jobs")
    public ResponseEntity<?> jobList(){
        try {
            List<Job> jobs = jobSearchService.getJobs();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(jobs);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("An error occurred while fetching jobs.");
        }
    }

    @GetMapping("/jobs/{text}")
    public ResponseEntity<?> searchJob(@PathVariable String text){
        try{
            List<Job> jobs = jobSearchService.searchJob(text);
            if(jobs.isEmpty()){
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body("NOT_FOUND");
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(jobs);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("An error occurred while searching jobs.");
        }

    }
}
