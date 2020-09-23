<<<<<<< HEAD
import React from 'react';
import PlanetPage from './pages/planet';

function App() {
  return <PlanetPage />;
=======
import React, { Component } from "react";
import "./App.css";
// import AdminPanel from "./templates/AdminPanel";
// import SWApi from "./templates/SWApi";
import Todo from "./templates/LocalCRUD/index";
// function App() {
//   // return <AdminPanel />;
//   // return <SWApi />;
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
>>>>>>> 276913d61dbbbbec57f61daffdb4f9716abbe2a1
}

export default App;
