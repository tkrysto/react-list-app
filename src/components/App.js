import React from "react";
import logo from "../logo.svg";
import "../styles/App.css";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
