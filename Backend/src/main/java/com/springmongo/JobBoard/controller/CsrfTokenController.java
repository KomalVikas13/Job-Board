package com.springmongo.JobBoard.controller;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CsrfTokenController {

    @GetMapping("/csrf-token")
    public CsrfToken csrfToken(CsrfToken token) {
        return token;
    }
}
