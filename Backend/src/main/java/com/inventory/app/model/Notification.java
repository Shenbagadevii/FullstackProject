package com.inventory.app.model;

import jakarta.persistence.*;


import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")

public class Notification {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(length = 1000)
  private String text;
  private LocalDateTime time;
  
  
  public Notification(Long id, String text, LocalDateTime time) {
	super();
	this.id = id;
	this.text = text;
	this.time = time;
  }


  public Notification() {
	super();
	// TODO Auto-generated constructor stub
  }


  public Long getId() {
	return id;
  }


  public void setId(Long id) {
	this.id = id;
  }


  public String getText() {
	return text;
  }


  public void setText(String text) {
	this.text = text;
  }


  public LocalDateTime getTime() {
	return time;
  }


  public void setTime(LocalDateTime time) {
	this.time = time;
  }
  
  
  
}
