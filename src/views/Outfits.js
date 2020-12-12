import React, { Component } from 'react';
import getOutfits from '../Helpers/Data/outfitData';
import getUid from '../Helpers/Data/authData';
import OutfitCard from '../Components/OutfitCard';

class Outfits extends Component {
  state = {
    outfits: [],
  }

  componentDidMount() {
    this.getOutfit();
  }

  getOutfit = () => {
    const currentUserId = getUid();
    getOutfits(currentUserId).then((resp) => {
      this.setState({
        outfits: resp,
      });
    });
  }

  render() {
    const { outfits } = this.state;
    const renderOutfits = () => (
      outfits.map((outfit) => <OutfitCard key={outfit.firebaseKey} outfit={outfit}/>));
    return (
      <div className='d-flex flex-wrap justify-content-center container'>{renderOutfits()}</div>
    );
  }
}

export default Outfits;
