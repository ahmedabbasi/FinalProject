import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Saved from "./containers/Saved";
import Sports from "./containers/Sports";
import Business from "./containers/Business";



const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saved" component={Saved}/>
        <Route exact path="/sports" component={Sports}/>
        <Route exact path="/business" component={Business}/>
        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
    </div>
  </Router>
)


export default App;
