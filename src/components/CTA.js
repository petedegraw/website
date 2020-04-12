import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

export default (props) => {
  const classes = `CTA ${props.back ? 'back' : 'default'}`;
  return (
    <>
      {props.back ? <br/> : ''}
      <Link
        className={classes}
        to={props.href}
        onMouseOver={props.hover}
        style={{'display': props.back ? 'block' : '' }}
      >
        {props.children}
        {props.title ? <span className='title'> {props.title}</span> : ''}
      </Link>
    </>
  )
}