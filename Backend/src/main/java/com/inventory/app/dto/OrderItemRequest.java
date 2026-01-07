package com.inventory.app.dto;



public class OrderItemRequest {
  private Long productId;
  private String productName;
  private Integer qty;
  private Double price;
  
  public OrderItemRequest() {
	super();
	// TODO Auto-generated constructor stub
  }
  
  
  public OrderItemRequest(Long productId, String productName, Integer qty, Double price) {
	super();
	this.productId = productId;
	this.productName = productName;
	this.qty = qty;
	this.price = price;
  }
  
  
  public Long getProductId() {
	return productId;
  }
  public void setProductId(Long productId) {
	this.productId = productId;
  }
  public String getProductName() {
	return productName;
  }
  public void setProductName(String productName) {
	this.productName = productName;
  }
  public Integer getQty() {
	return qty;
  }
  public void setQty(Integer qty) {
	this.qty = qty;
  }
  public Double getPrice() {
	return price;
  }
  public void setPrice(Double price) {
	this.price = price;
  }
  
}
