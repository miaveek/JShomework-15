import React from 'react'
import './navItem.css';
function NavItem(props) {// многоразовый модуль 
    return <li><a href={props.href} alt={props.alt}>{props.name}</a></li>
}
export default NavItem;
