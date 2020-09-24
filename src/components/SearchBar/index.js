import React, {Fragment} from 'react';

function SearchBar(props) {

  const handleChange = (e)=>{
    let query = props.query;
    let inStock = props.inStock;
    
    switch(e.target.type){
      case 'search':
        query = e.target.value;
        break;
        case 'checkbox':
        inStock = e.target.checked;
        break;
    }
    props.handleSearchChange(query,inStock);
  }

  return (
    <Fragment>
      <h2>Search</h2>
      <input 
        type="search" 
        name="search-bar"
        value={props.query}
        onChange= {handleChange}
        id="search-bar" />
      <div>
        <input 
          type="checkbox" 
          name="search-on-stock"
          checked={props.inStock}
          onChange= {handleChange}
          id="search-on-stock"/>
        <label htmlFor="search-on-stock">Only show products on stock</label>
      </div>
    </Fragment>
  );
}

export default SearchBar;