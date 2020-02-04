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
import { useSelector, useDispatch } from "react-redux";
import { authenticated } from "./actions/index";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line
  useEffect(() => {
    setIsLoading(() => !isLoading);
  }, []);
  if (localStorage.getItem("auth-token") && !isLoggedIn) {
    dispatch(authenticated());
  }
  return isLoading ? (
    <h6 className="loading">Loading...</h6>
  ) : (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <div className={isDarkMode ? "App dark" : "App"}>
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
