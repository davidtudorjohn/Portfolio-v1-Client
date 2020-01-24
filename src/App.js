import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skew from "./components/Skew/Skew";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
function App() {
  const [isLoading, setIsLoading] = useState("true");

  useEffect(() => {
    setIsLoading(() => !isLoading);
  }, []);
  return (
    <div className="App">
      <Header />
      <h6 className={isLoading ? "loading" : "loaded"}>Loading...</h6>
      <Landing />
      <Projects />
      <Skew />
      <Form />
      <Footer />
    </div>
  );
}
export default App;
