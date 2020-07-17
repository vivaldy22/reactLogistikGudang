import React, { Component } from "react";

class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  getData = async () => {
    try {
      const res = await fetch("/goods");
      const result = await res.json();
      this.setState({
        isLoaded: true,
        items: result.result,
      });
    } catch (err) {
      this.setState({
        isLoaded: true,
        err,
      });
    }
  };

  componentDidMount() {
    this.getData().then();
  }

  render() {
    const { err, isLoaded, items } = this.state;

    if (err) {
      return <div>Error: {err.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} {item.type}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default FetchApi;