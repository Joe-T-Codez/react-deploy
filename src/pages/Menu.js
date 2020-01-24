import React, { Component } from 'react';
import Burger from './Burger';
import Steak from './Steak';
import Dessert from './Dessert';

class Menu extends Component{
  render (){
  return <div><Burger/> <Steak/> <Dessert/> </div>
}
}

export default Menu;
