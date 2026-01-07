package com.inventory.app.service;

import com.inventory.app.model.Product;
import com.inventory.app.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // CREATE PRODUCT
    public Product create(Product product) {
        // Optionally, you may initialize default values here if needed
        return productRepository.save(product);
    }

    // GET ALL PRODUCTS
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    // GET PRODUCT BY ID
    public Product findById(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found for ID: " + id));
    }

    // UPDATE PRODUCT
    public Product update(Long id, Product updatedProduct) {
        Product existing = productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found for ID: " + id));

        existing.setName(updatedProduct.getName());
        existing.setCategory(updatedProduct.getCategory());
        existing.setBrand(updatedProduct.getBrand());
        existing.setDescription(updatedProduct.getDescription());
        existing.setPrice(updatedProduct.getPrice());
        existing.setStock(updatedProduct.getStock());
        existing.setSku(updatedProduct.getSku());

        return productRepository.save(existing);
    }

    // DELETE PRODUCT
    public void delete(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found for ID: " + id);
        }
        productRepository.deleteById(id);
    }

    // REDUCE STOCK AFTER ORDER
    public void reduceStock(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not found for ID: " + productId));

        Integer currentStock = product.getStock();
        if (currentStock == null) {
            throw new RuntimeException("Product stock is undefined for product: " + product.getName());
        }
        if (currentStock < quantity) {
            throw new RuntimeException("Insufficient stock for product: " + product.getName());
        }

        product.setStock(currentStock - quantity);
        productRepository.save(product);
    }

    // OPTIONAL: Get products with low stock threshold
    public List<Product> lowStock(int threshold) {
        return productRepository.findAll().stream()
            .filter(p -> p.getStock() != null && p.getStock() <= threshold)
            .collect(Collectors.toList());
    }
}
