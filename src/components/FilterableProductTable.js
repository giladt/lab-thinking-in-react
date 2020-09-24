import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class App extends Component {
  state = {
    query: '',
    inStock: false
  }

  handleSearchChange = (query, inStock) => {
    this.setState({query, inStock})
  }

  render() {

    let filtered = this.props.products.filter(
      q => q.name.toLowerCase()
            .includes(this.state.query.toLowerCase())
    )
    
    if(this.state.inStock) filtered = filtered.filter(q=> q.stocked === true);

    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar 
          query={this.state.query}
          inStock={this.state.inStock}
          handleSearchChange={this.handleSearchChange}
        />
        <ProductTable products={filtered} />
      </div>
    );
  }
}

export default App;