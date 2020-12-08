import React from 'react';
import OutfitContainer from '../Components/OutfitContainer';
import Auth from '../Components/Auth';

export default function home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user) {
      component = <OutfitContainer />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
    <h1>Home</h1>
    {loadComponent()}
    </div>
  );
}
