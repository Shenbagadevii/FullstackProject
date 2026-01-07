package com.inventory.app.controller;

import com.inventory.app.model.Notification;
import com.inventory.app.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
  private final NotificationService service;
  public NotificationController(NotificationService service) { this.service = service; }

  @GetMapping
  public List<Notification> all() { return service.findAll(); }

  @PostMapping
  public ResponseEntity<Notification> create(@RequestBody Notification n) {
    return ResponseEntity.ok(service.create(n));
  }
}
