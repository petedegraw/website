import React from 'react';
import './Button.css';

export default (props) => {
  const classes = `Button ${props.primary ? 'primary' : 'default'}`;
  return (
    <button className={classes}>
      {props.children}
    </button>
  )
}