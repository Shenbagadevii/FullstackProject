package com.inventory.app.controller;

import com.inventory.app.model.Order;
import com.inventory.app.model.Product;
import com.inventory.app.service.NotificationService;
import com.inventory.app.service.OrderService;
import com.inventory.app.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
  private final ProductService productService;
  private final OrderService orderService;
  private final NotificationService notificationService;

  public DashboardController(ProductService ps, OrderService os, NotificationService ns) {
    this.productService = ps;
    this.orderService = os;
    this.notificationService = ns;
  }

  @GetMapping("/summary")
  public Map<String, Object> summary() {
    Map<String,Object> m = new HashMap<>();
    List<Product> products = productService.findAll();
    List<Order> orders = orderService.findAll();

    double totalSales = orders.stream().mapToDouble(o -> o.getTotalAmount() == null ? 0 : o.getTotalAmount()).sum();
    long lowStock = products.stream().filter(p -> p.getStock() != null && p.getStock() <= 5).count();

    m.put("totalProducts", products.size());
    m.put("totalOrders", orders.size());
    m.put("totalSales", totalSales);
    m.put("lowStockCount", lowStock);
    return m;
  }

  @GetMapping("/today")
  public Map<String,Object> today() {
    // sample endpoint used earlier by your UI — can return simple product list or summary per day
    Map<String,Object> m = new HashMap<>();
    m.put("products", productService.findAll());
    return m;
  }
}
