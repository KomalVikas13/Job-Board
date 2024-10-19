package com.springmongo.JobBoard.controller;

import com.springmongo.JobBoard.model.Job;
import com.springmongo.JobBoard.service.JobPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class JobPostController {

    private JobPostService jobPostService;

    JobPostController(JobPostService jobPostService){
        this.jobPostService = jobPostService;
    }

    @PostMapping("/postJob")
    public ResponseEntity<Object> postJob(@RequestBody Job job){
        try{
            String message = jobPostService.postJob(job);
            if(message.equals("EXISTS")){
                return ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body(message);
            }
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(message);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("An error occurred while posting job.");
        }

    }

    @PutMapping("/updateJob")
    public ResponseEntity<Object> updateJob(@RequestBody Job job){
        try {
            String message = jobPostService.updateJob(job);
            if(message.equals("NOT_FOUND")){
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(message);
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(message);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("An error occurred while updating job.");
        }
    }

}
