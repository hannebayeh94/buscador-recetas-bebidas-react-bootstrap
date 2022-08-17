import React from "react";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriaProvider } from "./context/CategoriasProvider";

const App = () => {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de bedidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  );
};

export default App;
