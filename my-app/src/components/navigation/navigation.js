import React from 'react'
import './navigation.css';
import NavItem from '../navItem/navItem';
function Navi() {
  return (
     <ul>
        <NavItem name="home" href="#" alt="Home Page"/>
        <NavItem name ="photoapp" href="https://play.google.com/" alt="Get Photo App" />
        <NavItem name ="design" href="#" alt="Some designs"/>
        <NavItem name ="download" href="#" alt="Download our Pictures"/>
     </ul>
  );
}
export default Navi;
