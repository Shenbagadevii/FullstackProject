package com.inventory.app.service;

import com.inventory.app.model.Message;
import com.inventory.app.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {
  private final MessageRepository repo;
  public MessageService(MessageRepository repo) { this.repo = repo; }

  public List<Message> findAll() { return repo.findAll(); }

  public Message create(Message m) {
    if (m.getDate() == null) m.setDate(LocalDateTime.now());
    return repo.save(m);
  }
}
