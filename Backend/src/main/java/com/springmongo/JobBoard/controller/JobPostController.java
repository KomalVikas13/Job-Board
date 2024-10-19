package com.springmongo.JobBoard.controller;

import com.springmongo.JobBoard.service.JobPostService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobPostController {

    private JobPostService jobPostService;

    JobPostController(JobPostService jobPostService){
        this.jobPostService = jobPostService;
    }


}
