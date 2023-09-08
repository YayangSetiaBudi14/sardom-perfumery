package com.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

import com.mahasiswa.model.Cart;

public interface CartRepository extends JpaRepository<Cart, String> {

}
