import React from 'react';
import './Portfolio.css';
import CTA from './CTA';
import { motion, AnimatePresence } from 'framer-motion';

export default (props) => {
  const { data } = props;
  let frames = [0,1,2];
  return (
    <>
      {frames.map((frame) => (
        <AnimatePresence key={frame}>
          <motion.div
            className='space-box'
            transition={{
              delay: (frame+1) / 10000,
              duration: 3,
              ease: 'easeInOut'
            }}
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1 * (frame+1)],
              opacity: [1, 0]
            }}
          />
        </AnimatePresence>
      ))}
      <AnimatePresence>
        <motion.div
          className={'Portfolio ' + data.class_name}
          transition={{ delay: 2.5, duration: 10, mass: .75, type: 'spring' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className={data.class_name}>{data.copy.heading}</h1>
          <p className='lead'>{data.copy.subhead}</p>
          <p>
            {data.copy.ctas.map(cta => {
              return (
                <CTA
                  key={cta.id}
                  href={cta.link}
                >
                  {cta.text}
                </CTA>
              )
            })}
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}