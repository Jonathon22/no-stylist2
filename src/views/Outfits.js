import React, { Component } from 'react';
import { getAllOutfits } from '../Helpers/Data/outfitData';
import OutfitCard from '../Components/OutfitCard';

class Outfits extends Component {
  state = {
    outfits: [],
  }

  componentDidMount() {
    this.getOutfit();
  }

  getOutfit = () => {
    getAllOutfits().then((resp) => {
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
      <>
      <h1>Outfits</h1>
      <div className='d-flex flex-wrap justify-content-center container'>{renderOutfits()}</div>
      </>
    );
  }
}

export default Outfits;
