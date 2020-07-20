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
          goodsType: types[0].id,
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
    // console.log(e.target.value);
  };

  handleSubmitBtnClick = (e) => {
    e.preventDefault();
    console.log(this.state.goodsName);
    console.log(this.state.goodsType);
    if (!this.state.goodsName) {
      alert("Nama produk tidak boleh kosong");
    } else {
      const good = {
        name: this.state.goodsName,
        type: this.state.goodsType,
      };

      createGoods(good)
        .then((res) => {
          // alert("Berhasil memasukkan data");
          // console.log(`Res : ${res}`);
          if (res.status.code === "201") {
            alert("Berhasil memasukkan data");
            this.setState({
              ...this.state,
              goodsName: "",
              goodsType: this.state.types[0].id,
            });
          }
        })
        .catch((e) => console.log(e));

      this.setState({
        goodsName: "",
        goodsType: this.state.types[0].id,
      });
    }
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
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
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
