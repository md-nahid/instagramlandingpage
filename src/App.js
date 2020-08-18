import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'

import Homeform from "./containers/homeform/Homeform"
import Signup from "./pages/Signup"




const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Homeform} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}








export default App;
