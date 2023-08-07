import { useEffect, useState } from "react";
import "./App.css";
import { CategoryProvider } from "./context/CategoryContext";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Watches from "./pages/Watches";
import { Routes, Route } from "react-router-dom";
import Jewelries from "./pages/Jewelries";
import Glasses from "./pages/Glasses";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/jewelries" element={<Jewelries />} />
          <Route path="/glasses" element={<Glasses />} />
        </Routes>
      </CategoryProvider>
    </div>
  );
}

export default App;
