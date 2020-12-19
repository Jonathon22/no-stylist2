import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { deleteOutfit } from '../../Helpers/Data/outfitData';

class OutfitCard extends Component {
  render() {
    const { outfit } = this.props;
    return (
      <div>
        <Card className='outfit-card d-flex flex-wrap mt-3 col-md-3 mb-3'>
        <CardImg top width="100px" height="100px" src={outfit.imageUrl1} alt="Card image cap" />
        <CardImg top width="100px" height="100px" src={outfit.imageUrl2} alt="Card image cap" />
        <CardImg top width="100px" height="100px" src={outfit.imageUrl3} alt="Card image cap" />
        <CardImg top width="100px" height="100px" src={outfit.imageUrl4} alt="Card image cap" />
        <button className='btn btn-danger m-1' width='30px' id={outfit.firebaseKey} onClick={(e) => deleteOutfit(e)}>Delete Outfit</button>
        </Card>
      </div>
    );
  }
}

export default OutfitCard;
