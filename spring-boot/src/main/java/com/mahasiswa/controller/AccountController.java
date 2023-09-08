package com.mahasiswa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mahasiswa.model.Account;
import com.mahasiswa.service.AccountService;

@RestController
@CrossOrigin
public class AccountController{
    @Autowired
    AccountService accountService;

    @PostMapping("/login")
    public Account login(@RequestParam String username, @RequestParam String password) {
        return accountService.login(username, password);
    }
}
