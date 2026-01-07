package com.inventory.app.service;

import org.springframework.stereotype.Service;
import com.inventory.app.dto.DashboardResponse;
import com.inventory.app.repository.ProductRepository;

@Service
public class DashboardService {

    private final ProductRepository productRepository;

    public DashboardService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public DashboardResponse getDashboardData() {

        long totalProducts = productRepository.count();
        long totalStock = productRepository.sumStock();       // custom query
        long lowStockCount = productRepository.countLowStock();  
        long totalCategories = productRepository.countCategories();

        return new DashboardResponse(
            totalProducts,
            totalStock,
            lowStockCount,
            totalCategories
        );
    }
}
