import React, { Component } from 'react';
import ItemCard from '../Components/ItemCard';
import getEachItem from '../Helpers/Data/itemData';

class Items extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getSingleItem();
  }

getSingleItem = () => {
  getEachItem().then((resp) => {
    this.setState({
      items: resp,
    });
  });
}

render() {
  const { items } = this.state;
  const renderEachItem = () => (
    items.map((item) => <ItemCard key={item.firebaseKey} item={item}/>));
  return (
      <div className='d-flex flex-wrap justify-content-center container'>{renderEachItem()}</div>
  );
}
}

export default Items;
