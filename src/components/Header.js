import React,  {Component} from 'react';

const Header = (props) => {
    console.log(props)
    return(
        <h3>{props.title}</h3>
    )
}
export default Header;