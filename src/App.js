import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPages from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPages} />
      </switch>
    </div>
  );
}

export default App;
