import React, { Component } from 'react';
import './Roles.css';
import { defaults, Radar } from 'react-chartjs-2';
import sizeMe from 'react-sizeme';
import CONTENT from '../data/Content';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';

class Roles extends Component {
  constructor(props) {
    super();
    this.chartRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  history = () => {
    return useHistory();
  };

  handleClick = () => {
    // controls.set({ opacity: 0 })
    // useHistory().push('/web/portfolio');
    this.chartRef.current.classList = 'Roles animate';
    setTimeout(() => {
      this.history.push('/web/portfolio');
    }, 2000);
    // if (event[0] !== undefined) {
    //   const val = CONTENT.roles_machine[event[0]._index];
    //   console.log(val);
    //   return val;
    // }
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount', this.chartRef)
    // this.chartRef.current.classList = 'Roles animate';
    // setTimeout(() => {
    //   useHistory().push('/web/portfolio');
    // }, 2000);
  }

  render() {
    const { width } = this.props.size;
    
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
  
    return (
      <AnimatePresence>
        <motion.div
          className='Roles'
          // whileHover={{ scale: 10, rotate: 360 }}
          // whileTap={{ scale: 0.6, rotate: -360, borderRadius: "100%" }}
          transition={{ delay: .3, duration: 3, mass: .75, type: 'spring' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          ref={this.chartRef}
        >
          <Radar
            data={chartData}
            options={chartOptions}
            onElementsClick={(event) => this.handleClick(event)}
            className='chart'
          />
        </motion.div>
      </AnimatePresence>
    );
  }
}
export default sizeMe({ monitorHeight: true })(Roles);