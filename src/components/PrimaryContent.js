import React from 'react';
import './PrimaryContent.css';
import CTA from './CTA';

export default (props) => {
  const { data } = props;
  return (
    <div className={'PrimaryContent ' + data.class_name}>
      <h1 className={data.class_name}>{data.copy.heading}</h1>
      <p className='lead'>{data.copy.subhead}</p>
      <p>
        {data.copy.ctas.map(cta => {
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
}