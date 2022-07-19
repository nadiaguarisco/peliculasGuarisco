//import { useState } from 'react'
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer"
<link href="/dist/output.css" rel="stylesheet" />;

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
      <Home />
    </>
  );
}

export default App;
