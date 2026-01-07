package com.inventory.app.dto;

public class DashboardResponse {

    private long totalProducts;
    private long totalStock;
    private long lowStockCount;
    private long totalCategories;

    public DashboardResponse() {}

    public DashboardResponse(long totalProducts, long totalStock, long lowStockCount, long totalCategories) {
        this.totalProducts = totalProducts;
        this.totalStock = totalStock;
        this.lowStockCount = lowStockCount;
        this.totalCategories = totalCategories;
    }

    public long getTotalProducts() {
        return totalProducts;
    }

    public void setTotalProducts(long totalProducts) {
        this.totalProducts = totalProducts;
    }

    public long getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(long totalStock) {
        this.totalStock = totalStock;
    }

    public long getLowStockCount() {
        return lowStockCount;
    }

    public void setLowStockCount(long lowStockCount) {
        this.lowStockCount = lowStockCount;
    }

    public long getTotalCategories() {
        return totalCategories;
    }

    public void setTotalCategories(long totalCategories) {
        this.totalCategories = totalCategories;
    }
}
