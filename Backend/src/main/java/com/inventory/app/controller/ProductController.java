package com.inventory.app.controller;

import com.inventory.app.model.Product;
import com.inventory.app.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Product getOne(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
    	 product.setId(null);
    	return service.create(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        return service.update(id, product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/low-stock/{threshold}")
    public List<Product> lowStock(@PathVariable int threshold) {
        return service.lowStock(threshold);
    }
}
