package com.springmongo.JobBoard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private String fullName;
    private String company;
    private String companyEmail;
    private String linkedinProfile;
    private String role;
}
