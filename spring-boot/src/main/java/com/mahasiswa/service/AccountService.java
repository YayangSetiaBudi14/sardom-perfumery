package com.mahasiswa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahasiswa.model.Account;
import com.mahasiswa.repository.AccountRepository;

@Service
public class AccountService {
    @Autowired
    AccountRepository accountRepository;

    // Get akun
    public Account login(String username, String password) {
        return accountRepository.login(username, password);
    }
}
