import React, { Component } from 'react';
import Items from './Items';

class Gallery extends Component {
  state = {
    items: [],
  }

  render() {
    const { items } = this.state;
    return (
      <div className='Gallery'>
        <Items items={items}/>
      </div>
    );
  }
}

export default Gallery;
