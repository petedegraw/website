import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

export default (props) => {
  const back = () => props.back || props.children.includes('back');
  const classes = `CTA ${back() ? 'back' : 'default'}`;
  return (
    <>
      {back() ? <br/> : ''}
      <Link
        className={classes}
        to={props.href}
        onMouseOver={props.hover}
        style={{'display': back() ? 'block' : '' }}
      >
        {props.children}
        {props.title ? <span className='title'> {props.title}</span> : ''}
      </Link>
    </>
  )
}