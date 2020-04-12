import React from 'react';
import CTA from './CTA';
import CONTENT from '../data/Content';

export default (props) => (
  <div>
    {CONTENT.contact_ctas.map(cta => {
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
          back={cta.link === '/' ? true : false}
        >
          {cta.text}
        </CTA>
      )
    })}
  </div>
)