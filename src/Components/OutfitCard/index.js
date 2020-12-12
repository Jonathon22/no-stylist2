import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class OutfitCard extends Component {
  render() {
    const { outfit } = this.props;
    return (
      <div>
        <Card>
        <CardImg top width="100%" src={outfit.imageUrl} alt="Card image cap" />
        </Card>
        <Card>
        <CardImg top width="100%" src={outfit.imageUrl} alt="Card image cap" />
        </Card>
        <Card>
        <CardImg top width="100%" src={outfit.imageUrl} alt="Card image cap" />
        </Card>
        <Card>
        <CardImg top width="100%" src={outfit.imageUrl} alt="Card image cap" />
        </Card>
      </div>
    );
  }
}

export default OutfitCard;
