import React from 'react';
import './CTA.css';

export default (props) => {
  const classes = `CTA ${props.primary ? 'primary' : 'default'}`;
  return (
    <a
      className={classes}
      href={props.href}
      onMouseOver={props.hover}
      >
      {props.children}
      {props.title ? <span className='title'> {props.title}</span> : ''}
    </a>
  )
}