package com.springmongo.JobBoard.model;

import jakarta.annotation.Generated;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    private String userId;
    private String fullName;
    private String userName;
    private String password;
    private String company;
    private String companyEmail;
    private String linkedinProfile;
    private String role;
    private String[] accessRoles;
    private String status;
}
