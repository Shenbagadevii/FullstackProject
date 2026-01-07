import React from "react";

export default function Table({ columns, data, renderRowActions }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.title}</th>
          ))}
          {renderRowActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length + (renderRowActions ? 1 : 0)} style={{ padding: 16, textAlign: "center" }}>
              No records found
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={row.id || row._id || JSON.stringify(row)}>
              {columns.map((c) => (
                <td key={c.key}>{c.render ? c.render(row) : row[c.key]}</td>
              ))}
              {renderRowActions && <td>{renderRowActions(row)}</td>}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
