package com.inventory.app.controller;

import com.inventory.app.model.Message;
import com.inventory.app.service.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
  private final MessageService service;
  public MessageController(MessageService service) { this.service = service; }

  @GetMapping
  public List<Message> all() { return service.findAll(); }

  @PostMapping
  public ResponseEntity<Message> create(@RequestBody Message m) {
    return ResponseEntity.ok(service.create(m));
  }
}
