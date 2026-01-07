package com.inventory.app.model;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    private String brand;
    private String description;
    private Double price;
    private Integer stock;
    private String sku;
    
    
	public Product(Long id, String name, String category, String brand, String description, Double price, Integer stock,
			String sku) {
		
		this.id = id;
		this.name = name;
		this.category = category;
		this.brand = brand;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.sku = sku;
	}


	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Long getId() {
		return id;
	}


	public String getName() {
		return name;
	}


	public String getCategory() {
		return category;
	}


	public String getBrand() {
		return brand;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public void setName(String name) {
		this.name = name;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public void setStock(Integer stock) {
		this.stock = stock;
	}


	public void setSku(String sku) {
		this.sku = sku;
	}


	public String getDescription() {
		return description;
	}


	public Double getPrice() {
		return price;
	}


	public Integer getStock() {
		return stock;
	}


	public String getSku() {
		return sku;
	}
    
    
    
    
   
}
