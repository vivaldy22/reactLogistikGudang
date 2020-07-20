import React, { Component } from "react";
import GoodsList from "../../pages/goods/GoodsList";
import CreateGoods from "../../pages/goods/CreateGoods";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: true,
    };
  }

  handleMenuClick = () => {
    this.setState({
      goodsList: !this.state.goodsList,
    });
  };

  render() {
    const show = this.state.goodsList ? <GoodsList /> : <CreateGoods />;

    return (
      <div>
        <button onClick={this.handleMenuClick}>Goods List</button>
        <button onClick={this.handleMenuClick}>Create Goods</button>
        {show}
        {/*<GoodsList />*/}
        {/*<CreateGoods />*/}
      </div>
    );
  }
}

export default MainScreen;
