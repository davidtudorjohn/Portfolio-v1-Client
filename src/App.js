import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skew from "./components/Skew";
import Footer from "./components/Footer";
import Form from "./components/Form";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(() => !isLoading);
  }, []);

  if (isLoading) {
    return <h6 className="loading">Loading...</h6>;
  }

  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects />
      <Skew />
      <Form />
      <Footer />
    </div>
  );
}
export default App;
