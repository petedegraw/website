import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

export default (props) => {
  const back = () => props.back || props.children.includes('back');
  const external = () => props.href.includes('http') || props.href.includes('mailto');
  const classes = `CTA ${back() ? 'back' : 'default'}`;
  return (
    <>
      {back() ? <br/> : ''}
      {external() ? (
        <a
          className={classes}
          href={props.href}
          onMouseOver={props.hover}
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.children}
          {props.title ? <span className='title'> {props.title}</span> : ''}
        </a>
      ) : (
        <Link
          className={classes}
          to={props.href}
          onMouseOver={props.hover}
          style={{'display': back() ? 'block' : '' }}
        >
          {props.children}
          {props.title ? <span className='title'> {props.title}</span> : ''}
        </Link>
      )}
    </>
  )
}