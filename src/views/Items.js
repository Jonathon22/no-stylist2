import React, { Component } from 'react';
import ItemCard from '../Components/ItemCard';
import { getAllItems } from '../Helpers/Data/itemData';

class Items extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getSingleItem();
  }

getSingleItem = () => {
  getAllItems().then((resp) => {
    this.setState({
      items: resp,
    });
  });
}

render() {
  const { items } = this.state;
  const renderEachItem = () => (
    items.length && items.map((item) => <ItemCard key={item.firebaseKey} item={item} onUpdate={this.getSingleItem}/>));
  return (
    <>
      <div className='d-flex flex-wrap '>{renderEachItem()}</div>
      </>
  );
}
}

export default Items;
