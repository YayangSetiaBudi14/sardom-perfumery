package com.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mahasiswa.model.Account;

public interface AccountRepository extends JpaRepository<Account, String> {
    @Query("SELECT a FROM Account a WHERE a.username= :username AND a.password= :password")
    Account login(@Param("username") String username, @Param("password") String password);
}
