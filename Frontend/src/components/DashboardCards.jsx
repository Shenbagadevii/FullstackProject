const DashboardCards = () => {
  const cards = [
    { title: "Total Users", value: 277, color: "#22c55e" },
    { title: "Total Users", value: 277, color: "#d946ef" },
    { title: "Total Users", value: 277, color: "#3b82f6" },
    { title: "Total Users", value: 277, color: "#eab308" },
    {
      title: "Total Sales",
      value: "$3,787,681.00",
      color: "#1d4ed8",
      subtitle: "$3,578.90 last month",
    },
  ];

  return (
    <div className="cards">
      {cards.map((c, i) => (
        <div className="card" key={i} style={{ background: c.color }}>
          <h4>{c.title}</h4>
          <h2>{c.value}</h2>
          <p>{c.subtitle || "Last Month"}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
