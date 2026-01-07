package com.inventory.app.repository;

import com.inventory.app.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByStockLessThanEqual(int threshold);

    @Query("SELECT SUM(p.stock) FROM Product p")
    Long sumStock();

    @Query("SELECT COUNT(p) FROM Product p WHERE p.stock < 5")
    Long countLowStock();

    @Query("SELECT COUNT(DISTINCT p.category) FROM Product p")
    Long countCategories();
}
