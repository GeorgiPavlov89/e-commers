import { useEffect, useState } from "react";
import "./App.css";
import { CategoryProvider } from "./context/CategoryContext";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Watches from "./pages/Watches";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryProvider>
        <Routes>
          <Route path="/watches" element={<Watches />} />
        </Routes>
      </CategoryProvider>
    </div>
  );
}

export default App;
