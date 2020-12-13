import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUser from '../../Helpers/Data/authData';
import { createItem } from '../../Helpers/Data/itemData';

class AdditemForm extends Component {
  state = {
    firebaseKey: this.props.item?.firebaseKey || '',
    imageUrl: this.props.item?.imageUrl || '',
    name: this.props.item?.name || '',
    userid: this.props.item?.userid || '',
  }

  componentDidMount() {
    const userid = getUser();
    this.setState({
      userid,
    });
  }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ imageUrl: '' });
      console.warn(e.target.files);
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`noStylist/${this.state.userid}/${Date.now()}/${e.target.files[0].name}`);

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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      createItem(this.state)
        .then(() => {
          this.props.onUpdate?.();
          this.setState({
            success: true,
          });
        });
    }
  }

  render() {
    const { success } = this.state;
    return (
      <>
       { success && (<div className="alert alert-danger" role="alert">Item Was created, head to the Gallery to make an outfit !</div>)
      }
      <form onSubmit={this.handleSubmit}>
        <h1 className='m-3'>Add Item</h1>
        <input
        type='text'
        name='name'
        value={this.state.name}
        onChange={this.handleChange}
        placeholder='Item Name'
        className='form-control form-control-lg m-1'
        required
        />
         <input
        type='url'
        name='imageUrl'
        value={this.state.imageUrl}
        onChange={this.handleChange}
        placeholder='Enter an Image Url or upload a file'
        className='form-control form-control-lg m-1'
        required
        />
         <input
        className='m-2'
        type='file'
        id='myFile'
        name='filename'
        accept='image/*'
        onChange={this.handleChange}
        />
        <button ref={(btn) => { this.btn = btn; }} className="btn btn-primary m-2">Submit</button>
      </form>
      </>
    );
  }
}

export default AdditemForm;
