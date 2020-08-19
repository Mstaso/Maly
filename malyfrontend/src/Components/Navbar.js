import React from 'react'
import { NavLink } from 'react-router-dom';
import Search from './Search'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

const logo = require('../logo.png')

class Navbar extends React.Component {
  render() {
    return (
      <div class="header">
        <h1 class="logo"><a href="#"><img id="logo" src={logo} /></a></h1>
        <Search searchValue={this.props.searchValue} changeHandler={this.props.changeHandler} />
        <ul class="main-nav" >
        {/* <li><a href="#"><NavLink to="/welcome" exact>Welcome</NavLink></a></li> */}
        <li><a href="#"><NavLink to="/posts" exact>Home</NavLink></a></li>
        <li><a href="#"><NavLink to="/newform" exact>New Post</NavLink></a></li>
        <li><a href="#"><NavLink to="/profile" exact><span style={{fontSize:"30px"}}>🖤</span></NavLink></a></li>
        </ul>
      </div>
    )
  }
}
export default Navbar;