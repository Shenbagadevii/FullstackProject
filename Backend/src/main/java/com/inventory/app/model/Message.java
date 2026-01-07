package com.inventory.app.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="messages")
public class Message {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String sender;
	@Column(length=2000)
	private String message;
	private LocalDateTime date;
	
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Message(Long id, String sender, String message, LocalDateTime date) {
		super();
		this.id = id;
		this.sender = sender;
		this.message = message;
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public String getSender() {
		return sender;
	}

	public String getMessage() {
		return message;
	}

	public LocalDateTime getDate() {
		return date;
	}
	

}
