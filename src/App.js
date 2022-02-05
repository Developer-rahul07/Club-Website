import React from "react";
import "./App.css";
import Home from "./comp/Home";
import About from "./comp/About";
import Projects from "./comp/Projects";
import Member from "./comp/Members";
import Login from "./comp/Login";
import Register from "./comp/Register";
import Errorpage from "./comp/Errorpage";
import Navbars from "./comp/Navbars";
import { Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/members" component={Member} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route element={Errorpage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
