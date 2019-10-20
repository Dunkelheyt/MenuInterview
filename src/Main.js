import React, { Component } from "react";
import Box from "./Box";
import Cart from "./Cart";

import { Route, NavLink, HashRouter } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="container">
            <h1 className="text-center">Menu Interview Challenge</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Box} />
              <Route path="/cart" component={Cart} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
