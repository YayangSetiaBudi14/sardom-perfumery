package com.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

import com.mahasiswa.model.Carts;

public interface CartsRepository extends JpaRepository<Carts, String> {

}
