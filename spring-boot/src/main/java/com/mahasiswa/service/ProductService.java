package com.mahasiswa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahasiswa.model.Product;
import com.mahasiswa.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
    ProductRepository productRepository;
	
	//Get all products
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	//Get product by id
	public Product getProductById(String id_product) {
		return productRepository.getProductById(id_product);
	}
	
}
