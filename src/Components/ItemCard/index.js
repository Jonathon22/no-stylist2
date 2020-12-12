import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class ItemCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <Card className={item.name}>
        <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
        </Card>
      </div>
    );
  }
}

export default ItemCard;
