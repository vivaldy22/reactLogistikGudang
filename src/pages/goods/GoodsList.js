import React, { Component } from "react";
import { getGoods } from "../../api/Goods";

class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      goods: [],
    };
  }

  componentDidMount = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          isLoaded: true,
          goods,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleEditClick = (id) => {
    alert("EDIT" + id);
  };

  handleRemoveClick = (id) => {
    alert("REMOVE" + id);
  };

  render() {
    const { err, isLoaded, goods } = this.state;
    const showGoods = (
      <table>
        <tbody>
          <tr>
            <th>No.</th>
            <th>Nama Produk</th>
            <th>Tipe Produk</th>
          </tr>
          {goods.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>
                <button onClick={() => this.handleEditClick(item.name)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => this.handleRemoveClick(item.name)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    if (err) {
      return <div>Error: {err.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading Goods...</div>;
    } else {
      return <div>{showGoods}</div>;
    }
  }
}

export default GoodsList;
