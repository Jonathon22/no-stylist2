import React, { Component } from 'react';
import Items from './Items';

class Gallery extends Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div className='Gallery'>
        <Items />
      </div>
    );
  }
}

export default Gallery;
