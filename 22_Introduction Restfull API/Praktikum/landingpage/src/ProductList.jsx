import React from 'react';

import axios from 'axios';

export default class List extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`https://642db251bf8cbecdb40cd2d5.mockapi.io/api/products/`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        { this.state.products.map(product => <li>{product.name}</li>)}
      </ul>
    )
  }
}