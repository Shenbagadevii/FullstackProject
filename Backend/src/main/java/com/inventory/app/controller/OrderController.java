package com.inventory.app.controller;

import com.inventory.app.model.Order;
import com.inventory.app.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*") 
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // CREATE ORDER
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
    	 order.setId(null);
        return orderService.create(order);
    }

    // ALL ORDERS
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.findAll();
    }

    // GET SINGLE ORDER
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.findById(id);
    }

    // DELETE ORDER
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.delete(id);
    }
}
