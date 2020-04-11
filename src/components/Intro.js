import React from 'react';
import './Intro.css';
import CTA from './CTA';
import INTRO from '../data/Intro';

export default () => (
  <div className='Intro'>
    <h1>{INTRO.heading}</h1>
    <p className='lead'>{INTRO.subhead}</p>
    <p>
      {INTRO.ctas.map(cta => {
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