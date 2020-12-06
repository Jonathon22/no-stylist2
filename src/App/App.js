import React from 'react';
import firebase from 'firebase/app';
import fbConnection from '../Helpers/Data/connection';
import './App.scss';
import Auth from '../Components/Auth';
import OutfitContainer from '../Components/OutfitContainer';
import MyNavbar from '../Components/MyNavbar';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      let component = '';
      if (authed) {
        component = <OutfitContainer />;
      } else {
        component = <Auth />;
      }
      return component;
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
