import React from "react";
import Card from "../../components/Card";
import CardTurbo from "../../components/CardTurbo";
import "./styles.css";
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div style={{ display: "flex" }}>
        <Card number={123} title="Usuários" icon="user" />
        <Card number={321} title="Acessos" icon="access" />
        <Card {...{ number: 456, title: "Visualização", icon: "view" }} />
        <CardTurbo number={321} title="Acessos" icon="access" />
      </div>
    </div>
  );
}
