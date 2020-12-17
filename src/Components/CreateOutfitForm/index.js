import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUser from '../../Helpers/Data/authData';
import { createOutfit } from '../../Helpers/Data/outfitData';
import { createOutfitItem, getAllItems } from '../../Helpers/Data/itemData';

class CreateOutfitForm extends Component {
  state = {
    firebaseKey: this.props.outfit?.firebaseKey || '',
    userid: this.props.outfit?.userid || '',
    imageUrl1: this.props.outfit?.imageUrl1 || '',
    imageUrl2: this.props.outfit?.imageUrl2 || '',
    imageUrl3: this.props.outfit?.imageUrl3 || '',
    imageUrl4: this.props.outfit?.imageUrl4 || '',
    items: [],
  }

  itemRef = React.createRef();

  componentDidMount() {
    const userid = getUser();
    this.setState({ userid });
    this.itemsResponse().then((response) => {
      this.setState({
        userid,
        items: response,
      });
    });
  }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ imageUrl: '' });
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(
        `pinterest/${this.state.userId}/${Date.now()}${e.target.files[0].name}`,
      );

      imageRef.put(e.target.files[0]).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((imageUrl) => {
          this.setState({ imageUrl });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      const newOutfit = {
        firebaseKey: this.state.firebaseKey,
        userid: this.state.userid,
        imageUrl1: this.state.imageUrl1,
        imageUrl2: this.state.imageUrl2,
        imageUrl3: this.state.imageUrl3,
        imageUrl4: this.state.imageUrl4,
      };
      createOutfit(newOutfit).then((response) => {
        const outfitItem = {
          outfitid: this.itemRef.current.value,
          itemid1: response.data.firebaseKey,
          itemid2: response.data.firebaseKey,
          itemid3: response.data.firebaseKey,
          itemid4: response.data.firebaseKey,
          userid: this.state.userid,
        };
        createOutfitItem(outfitItem);
      }).then(() => {
        this.setState({
          success: true,
        });
      });
    }
  }

      itemsResponse = () => (
        getAllItems().then((response) => response)
      );

      render() {
        const {
          success, items, imageUrl1, imageUrl2, imageUrl3, imageUrl4,
        } = this.state;
        const itemReturner = () => items.map((item) => item.name);
        return (
      <>
        {success && (
          <div className='alert alert-success' role='alert'>
            Your Outfit was Created
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
         Lets Create An Outfit</label>
         <br>
         </br>
         <label>Accessories</label>
         <br></br>
        <select value={imageUrl1} onChange={this.handleSubmit}>
        <option placeholder='article of clothing' value={imageUrl1}><li>{itemReturner()}</li></option>
        required
          </select>
<br></br>
          <label> T-Shirt </label>
        <select value={imageUrl2} onChange={this.handleSubmit}>
        <option placeholder='article of clothing' value={imageUrl2}>{itemReturner()}</option>
        required
          </select>
<br></br>
          <label>Pants</label>
        <select value={imageUrl3} onChange={this.handleSubmit}>
        <option placeholder='article of clothing' value={imageUrl3}>{itemReturner()}</option>
        required
          </select>
<br></br>
          <label>Shoes</label>
        <select value={imageUrl4} onChange={this.handleSubmit}>
        <option placeholder='article of clothing' value={imageUrl4}>{itemReturner()}</option>
        required
          </select>
        <button onClick={this.handleSubmit} className="btn btn-primary m-2">Submit</button>
        </div>
      </form>
      </>
        );
      }
}

export default CreateOutfitForm;
