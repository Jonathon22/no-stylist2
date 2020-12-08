import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Gallery from '../views/Gallery';
import Items from '../views/Items';
import ItemsForm from '../views/ItemsForm';
import Outfits from '../views/Outfits';
import OutfitsForm from '../views/OutfitsForm';
import Profile from '../views/Profile';
import NotFound from '../views/NotFound';

export default function Routes({ user }) {
  return (
  <Switch>
  <Route exact path='/' component={() => <Home user={user} />} />
  <Route exact path='/Gallery' component={() => <Gallery user={user} />} />
  <Route exact path='/Profile' component={() => <Profile user={user} />} />
  <Route exact path='/Items' component={() => <Items user={user} />} />
  <Route exact path='/Items-Form' component={() => <ItemsForm user={user} />} />
  <Route exact path='/Outfits' component={() => <Outfits user={user} />} />
  <Route exact path='/Outfits-form' component={() => <OutfitsForm user={user} />} />
  <Route component={NotFound} />
  </Switch>
  );
}
