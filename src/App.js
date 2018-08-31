import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "helpers/routes";
import { store } from "store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>
    );
  }
}

export default App;
