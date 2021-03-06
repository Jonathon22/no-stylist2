import React, { Component } from 'react';
import { getUserOutfits } from '../Helpers/Data/outfitData';
import getUid from '../Helpers/Data/authData';
import OutfitCard from '../Components/OutfitCard';
import AppModal from '../Components/AppModal';
import AdditemForm from '../Components/AddItemForm';

class Outfits extends Component {
  state = {
    outfits: [],
  }

  componentDidMount() {
    this.getOutfit();
  }

  getOutfit = () => {
    const currentUserId = getUid();
    getUserOutfits(currentUserId).then((resp) => {
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
      <h1> My Outfits</h1>
      <AppModal className='app-modal' title={'Create Item'} buttonLabel={'Create Item'}>
        <AdditemForm />
      </AppModal>
      <div className='d-flex flex-wrap justify-content-center container'>{renderOutfits()}</div>
      </>
    );
  }
}

export default Outfits;
