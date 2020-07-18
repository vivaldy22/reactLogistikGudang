import React, { Component } from "react";
import GoodsList from "../../pages/goods/GoodsList";
import CreateGoods from "../../pages/goods/CreateGoods";

class MainScreen extends Component {
  render() {
    return (
      <div>
        <GoodsList />
        <CreateGoods />
      </div>
    );
  }
}

export default MainScreen;
