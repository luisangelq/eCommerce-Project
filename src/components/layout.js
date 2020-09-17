import React, { Component } from 'react';

import Header from "./header-nav-bar/header"
import NavBar from "./header-nav-bar/navbar"
class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>

      
    );
  }
}

export default Layout;
