import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skew from "./components/Skew";
import Footer from "./components/Footer";
import Form from "./components/Form";
import More from "./components/More";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(() => !isLoading);
  }, []);

  return isLoading ? (
    <h6 className="loading">Loading...</h6>
  ) : (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/" exact component={Projects} />
          <Route path="/" exact component={Skew} />
          <Route path="/" exact component={Form} />
          <Route path="/more" exact component={More} />
          <Route path="/" exact component={Footer} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
