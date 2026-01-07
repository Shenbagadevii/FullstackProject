const BestSellingTable = () => {
  const data = [
    {
      id: 1,
      product: "Tops and skirt set for women",
      category: "womans",
      brand: "richman",
      price_old: "$21.00",
      price_new: "$19.00",
      stock: 30,
      rating: "4.9 (16)",
      order: 380,
      sales: "$38k",
    }
  ];

  return (
    <div className="best-selling-section">
      <h3>Best Selling Products</h3>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Orders</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.product}</td>
              <td>{p.category}</td>
              <td>{p.brand}</td>
              <td>
                <span className="strike">{p.price_old}</span> {p.price_new}
              </td>
              <td>{p.stock}</td>
              <td>{p.rating}</td>
              <td>{p.order}</td>
              <td>{p.sales}</td>
              <td>
                <button className="edit">✎</button>
                <button className="delete">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BestSellingTable;
