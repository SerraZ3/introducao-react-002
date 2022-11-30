import React from "react";
import "./styles.css";

export default function Home() {
  const variavel = "O natal ta chegando";
  // Comentário
  const listaDeCompras = ["Pão", "Queijo", "Ovo", "Batata", "Morango", "Uva"];
  return (
    <div className="class-1">
      {/* Aqui é um comentário */}
      <h1 style={{ color: "red", backgroundColor: "blue" }}>Home</h1>
      <p>{variavel}</p>
      {listaDeCompras.map((element, idx) => {
        return <p key={idx}>{element}</p>;
      })}
    </div>
  );
}
