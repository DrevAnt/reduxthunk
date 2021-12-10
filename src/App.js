import React from "react";
import Navigation from "./library/common/components/Nav/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./main/rotes";
import { Container } from "../src/AppStyledComponents";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Navigation />
          <Routes />
        </Router>
      </Container>
    </div>
  );
}

export default App;
