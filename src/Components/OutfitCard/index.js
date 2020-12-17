import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { deleteOutfit } from '../../Helpers/Data/outfitData';

class OutfitCard extends Component {
  render() {
    const { outfit } = this.props;
    return (
      <div>
        <Card className='d-flex flex-wrap space-between mt-3 col-md-3 mb-3'>
        <CardImg top width="100%" src={outfit.imageUrl1} alt="Card image cap" />
        <CardImg top width="100%" src={outfit.imageUrl2} alt="Card image cap" />
        <CardImg top width="100%" src={outfit.imageUrl3} alt="Card image cap" />
        <CardImg top width="100%" src={outfit.imageUrl4} alt="Card image cap" />
        <button className='btn btn-danger m-1' id={outfit.firebaseKey} onClick={(e) => deleteOutfit(e)}>Delete Outfit</button>
        </Card>
      </div>
    );
  }
}

export default OutfitCard;
