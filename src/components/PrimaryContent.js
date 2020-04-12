import React from 'react';
import './PrimaryContent.css';
import CTA from './CTA';
import { motion, AnimatePresence } from 'framer-motion';

export default (props) => {
  const { data } = props;
  return (
    <AnimatePresence>
        <motion.div
          className={'PrimaryContent ' + data.class_name}
          transition={{ delay: 0, duration: .75, ease: 'easeInOut' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
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
                  back={cta.link === '/' ? true : false}
                >
                  {cta.text}
                </CTA>
              )
            })}
          </p>
        </motion.div>
    </AnimatePresence>
  )
}