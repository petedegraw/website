import React from 'react';
import './Intro.css';
import './Web.css';
import CTA from './CTA';
import WEB from '../data/Web';

export default () => (
  <div className='Intro Web'>
    <h1>{WEB.heading}</h1>
    <p className='lead'>{WEB.subhead}</p>
    <p>
      {WEB.ctas.map(cta => {
        let currentTitle = '';
        const randomTitle = (titles) => {
          currentTitle = titles[Math.floor(Math.random() * titles.length)];
          return currentTitle;
        }
        return (
          <CTA
            key={cta.id}
            href={cta.link}
            hover={() => randomTitle(cta.titles)}
            title={currentTitle === '' ? randomTitle(cta.titles) : currentTitle}
          >
            {cta.text}
          </CTA>
        )
      })}
    </p>
  </div>
)