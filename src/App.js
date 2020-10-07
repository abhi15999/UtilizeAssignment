import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import OrderPage from "./components/OrderPage";
import "./App.css";

function App() {
  return (
    <Router>
     <Switch>
       <Route exact path="/">
         <FrontPage/>
       </Route>
       <Route exact path="/orders">
         <OrderPage/>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
