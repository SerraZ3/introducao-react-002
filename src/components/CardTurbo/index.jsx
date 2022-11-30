import React from "react";
import { Container } from "./styles";

export default function CardTurbo({ icon, title, number }) {
  return (
    <Container>
      <img src={icon} alt={title} />
      <p>{title}</p>
      <p>{number}</p>
    </Container>
  );
}
