import React from "react";

export default function Card({ icon, title, number }) {
  return (
    <div
      style={{
        backgroundColor: "#EEF1F6",
        width: 100,
        height: 100,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 10,
        margin: 2,
      }}
    >
      <img src={icon} alt={title} />
      <p>{title}</p>
      <p>{number}</p>
    </div>
  );
}
