import React, { Component } from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import axios from "axios";
import Character from "./Components/Character/Character";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const NoMatch = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
// const Character = () => {
//   return (
//     <div>
//       <h1>Search for single character</h1>
//     </div>
//   );
// };
const Join = () => {
  return (
    <div>
      <h1>Join</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Characters /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/join" component={Join} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
