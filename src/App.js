import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path={["/games/:id", "/"]}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
