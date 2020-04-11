import React from 'react';
import './Roles.css';
import { defaults, Radar } from 'react-chartjs-2';
import sizeMe from 'react-sizeme';
import CONTENT from '../data/Content';

function Roles(props) {
  const { width } = props.size;
  
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

  const handleClick = event => {
    const val = CONTENT.roles_machine[event[0]._index];
    console.log(val);
    return val;
  }

  return (
    <div className='Roles'>
      <Radar
        data={chartData}
        options={chartOptions}
        onElementsClick={(event) => handleClick(event)}
      />
    </div>
  );
}
export default sizeMe({ monitorHeight: true })(Roles);