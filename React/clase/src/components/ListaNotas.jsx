import React, { Component } from "react";
import DetalleNota from "./DetalleNota";

class ListaNotas extends Component {
  state = {};
  render() {
    return (
      <ul>
        {Array.of("Raect", "Oracle", "Java","Angular").map((curso,i) => {
          return (
            <li key={i}>
              <div>{curso}</div>
              <DetalleNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
