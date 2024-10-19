package com.springmongo.JobBoard.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Jobs")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Job {
    @Id
    private String jobId;
    private String role;
    private String company;
    private int experience;
    private String jobDescription;
    private String[] skills;
}
