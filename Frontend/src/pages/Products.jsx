import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      <table className="table">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Stock</th><th>Price</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const deleteProduct = async (id) => {
  await fetch(`http://localhost:8080/api/products/${id}`, {
    method: "DELETE"
  });

  alert("Product Deleted");
  window.location.reload();
};

export default Products;
