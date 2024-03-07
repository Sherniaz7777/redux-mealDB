import React from "react";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import "./App.css"

const App = () => {
  const navigate = useNavigate()

  const back = () =>{
      navigate(-1)
  }
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:ProducId" element={<Detail  back={back}/>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
