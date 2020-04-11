import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

export default (props) => {
  const classes = `CTA ${props.primary ? 'primary' : 'default'}`;
  return (
    <Link
      className={classes}
      to={props.href}
      onMouseOver={props.hover}
      >
      {props.children}
      {props.title ? <span className='title'> {props.title}</span> : ''}
    </Link>
  )
}