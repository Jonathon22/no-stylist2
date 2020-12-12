import React from 'react';
import Outfits from './Outfits';
import Auth from '../Components/Auth';

export default function home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user) {
      component = <Outfits />;
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
