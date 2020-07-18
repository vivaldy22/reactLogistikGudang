import React, { Component } from "react";
import { createGoods } from "../../api/Goods";
import { getTypes } from "../../api/Type";

class CreateGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      goodsName: "",
      goodsType: "",
      types: [],
    };
  }

  componentDidMount() {
    getTypes()
      .then((types) => {
        this.setState({
          isLoaded: true,
          types,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  handleSubmitBtnClick = (e) => {
    e.preventDefault();

    const good = {
      name: this.state.goodsName,
      type: this.state.goodsType,
    };

    createGoods(good)
      .then(() => alert("Berhasil memasukkan data"))
      .catch((e) => console.log(e));
  };

  render() {
    const { types } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form>
          <div>
            <label>
              Nama Produk:
              <input
                type="text"
                name="goodsName"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Tipe Produk:
              <select
                name="goodsType"
                id="goods-type"
                onChange={this.handleChange}
              >
                {types.map((type) => (
                  <option value={type.id}>{type.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button onClick={this.handleSubmitBtnClick}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateGoods;
