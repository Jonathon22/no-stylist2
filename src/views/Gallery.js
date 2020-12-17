import React, { Component } from 'react';
import AppModal from '../Components/AppModal';
import CreateOutfitForm from '../Components/CreateOutfitForm';
import Items from './Items';

class Gallery extends Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div className='Gallery'>
        <AppModal className={'app-modal'} title={'Create Outfit'} buttonLabel={'Create Outfit'}>
          <CreateOutfitForm />
        </AppModal>
        <Items />
      </div>
    );
  }
}

export default Gallery;
