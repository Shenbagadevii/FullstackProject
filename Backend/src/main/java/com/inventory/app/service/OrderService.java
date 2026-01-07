package com.inventory.app.service;

import com.inventory.app.model.Order;
import com.inventory.app.model.OrderItem;
import com.inventory.app.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductService productService;

    public OrderService(OrderRepository orderRepository, ProductService productService) {
        this.orderRepository = orderRepository;
        this.productService = productService;
    }

    // CREATE ORDER
    @Transactional
    public Order create(Order order) {
        // Set order metadata
        order.setCreatedAt(LocalDateTime.now());
        order.setStatus("COMPLETED");  // or "PENDING" based on your business logic

        double totalAmount = 0.0;

        // Iterate items, compute total & reduce stock
        for (OrderItem item : order.getItems()) {
            int qty = (item.getQuantity() == null ? 0 : item.getQuantity());
            double price = (item.getPrice() == null ? 0.0 : item.getPrice());

            // Reduce product stock
            productService.reduceStock(item.getProductId(), qty);

            totalAmount += price * qty;
        }

        order.setTotalAmount(totalAmount);

        // Set profitAmount to 0.0 (or compute if you have cost price)
        order.setProfitAmount(0.0);

        return orderRepository.save(order);
    }

    // GET ALL ORDERS
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    // GET ORDER BY ID
    public Order findById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    // DELETE ORDER
    public void delete(Long id) {
        if (!orderRepository.existsById(id)) {
            throw new RuntimeException("Order not found for ID: " + id);
        }
        orderRepository.deleteById(id);
    }
}
