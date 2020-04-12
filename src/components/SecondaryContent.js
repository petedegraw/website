import React from 'react';
import './SecondaryContent.css';
// import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default (props) => {
  return (
    <AnimatePresence>
      <motion.div
        className='SecondaryContent'
        transition={{ delay: 0, duration: .75, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}