import logo from './logo.svg';
import './App.css';
import React from "react";
//Import Components...
import Nav from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SignForm from "./components/SignForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Nav> </Nav>
     <Jumbotron>
       GMA
       <SignForm></SignForm>
     </Jumbotron>
      O
    </div>
  );
}

export default App;