import React from 'react';
import './Roles.css';
import { defaults, Radar } from 'react-chartjs-2';
import sizeMe from 'react-sizeme';
import CONTENT from '../data/Content';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';

function Roles(props) {
  const { width } = props.size;
  const history = useHistory();
  const chartRef = React.createRef();
  
  defaults.global.animation.easing = 'easeInOutExpo';
  defaults.global.tooltips = false;
  defaults.global.legend = false;
  defaults.global.elements.point.hoverRadius = 20;
  defaults.global.elements.point.hitRadius = 20;
  
  const chartData = {
    labels: CONTENT.roles_human,
    datasets: [{
      data: [8,6,7,5,7],
      backgroundColor: 'rgba(255, 255, 255, 0.33)',
      borderColor: '#ec3fa4',
      borderWidth: 3,
      radius: 10,
      pointStyle: 'star',
      pointHoverBorderWidth: 3,
      pointHoverRadius: 20
    }]
  };
  const chartOptions = {
    scale: {
      angleLines: {
        display: true,
        color: 'aqua',
        lineWidth: 1
      },
      gridLines: {
        color: 'white',
        circular: false
      },
      pointLabels: {
        display: true,
        fontColor: 'white',
        fontFamily: "'Colfax Black', sans-serif",
        fontSize: width > 400 ? 26 : 18,
      },
      ticks: {
        backdropColor: 'white',
        showLabelBackdrop: false,
        fontFamily: "'Colfax Black', sans-serif",
        backdropPaddingX: 2,
        backdropPaddingY: 2,
        fontColor: 'white',
        fontSize: width > 400 ? 18 : 14,
        max: 10,
        min: 0,
        stepSize: 2
      }
    }
  }

  const handleClick = () => {
    chartRef.current.classList = 'Roles animate';
    setTimeout(() => {
      history.push('/web/portfolio');
    }, 1250);
  }

  return (
    <AnimatePresence>
      <motion.div
        className='Roles'
        transition={{ delay: 0, duration: .75, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        ref={chartRef}
      >
        <Radar
          data={chartData}
          options={chartOptions}
          onElementsClick={(event) => handleClick(event)}
          className='chart'
        />
      </motion.div>
    </AnimatePresence>
  );
}
export default sizeMe({ monitorHeight: true })(Roles);