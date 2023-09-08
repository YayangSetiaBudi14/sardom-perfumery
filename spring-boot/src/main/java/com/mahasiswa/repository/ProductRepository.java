package com.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mahasiswa.model.Account;
import com.mahasiswa.model.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
	@Query("SELECT p FROM Product p WHERE p.id_product = :id_product")
    Product getProductById(@Param("id_product") String id_product);
}
