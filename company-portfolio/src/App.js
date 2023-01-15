import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error404 from "./pages/404error/404Error";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeProvider";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
