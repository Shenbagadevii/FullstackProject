package com.inventory.app.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(name = "total_amount", nullable = false)
    private Double totalAmount = 0.0;

    @Column(name = "profit_amount", nullable = false)
    private Double profitAmount = 0.0;

    private String status;

    private LocalDateTime createdAt;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items = new ArrayList<>();

    public Order() {}

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public Double getProfitAmount() {
        return profitAmount;
    }

    public String getStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setProfitAmount(Double profitAmount) {
        this.profitAmount = profitAmount;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}
