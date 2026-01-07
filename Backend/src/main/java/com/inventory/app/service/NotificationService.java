package com.inventory.app.service;

import com.inventory.app.model.Notification;
import com.inventory.app.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationService {
  private final NotificationRepository repo;
  public NotificationService(NotificationRepository repo) { this.repo = repo; }

  public List<Notification> findAll() { return repo.findAll(); }

  public Notification create(Notification n) {
    if (n.getTime() == null) n.setTime(LocalDateTime.now());
    return repo.save(n);
  }
}
