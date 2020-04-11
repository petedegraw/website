import React from 'react';
import './Intro.css';
import './About.css';
import CTA from './CTA';
import ABOUT from '../data/About';

export default () => (
  <div className='Intro About'>
    <h1>{ABOUT.heading}</h1>
    <p className='lead'>{ABOUT.subhead}</p>
    <p>
      {ABOUT.ctas.map(cta => {
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