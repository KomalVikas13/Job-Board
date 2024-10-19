package com.springmongo.JobBoard.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "Jobs")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Job {
    private String role;
    private String company;
    private int experience;
    private String jobDescription;
    private String[] skills;
}
