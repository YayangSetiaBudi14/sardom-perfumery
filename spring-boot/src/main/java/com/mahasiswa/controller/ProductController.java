package com.mahasiswa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mahasiswa.model.Product;
import com.mahasiswa.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {
	@Autowired
    ProductService productService;

    @GetMapping("/product")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping("/product/{id_product}")
    public Product getProductById(@PathVariable String id_product) {
        return productService.getProductById(id_product);
    }
}
