package com.inventory.app.dto;


import java.util.List;


public class OrderRequest {
  private String username;
  private List<OrderItemRequest> items;
  
  public OrderRequest() {
	super();
	// TODO Auto-generated constructor stub
  }

  public OrderRequest(String username, List<OrderItemRequest> items) {
	super();
	this.username = username;
	this.items = items;
  }

  public String getUsername() {
	return username;
  }

  public void setUsername(String username) {
	this.username = username;
  }

  public List<OrderItemRequest> getItems() {
	return items;
  }

  public void setItems(List<OrderItemRequest> items) {
	this.items = items;
  }
  
}

