import React from 'react';
import './Roles.css';
import { defaults, Radar } from 'react-chartjs-2';

export default () => {
  // defaults.global.animation = false;
  defaults.global.animation.easing = 'easeInOutExpo';
  defaults.global.tooltips = false;
  defaults.global.legend = false;
  const chartData = {
    labels: ['Front End','Back End','Product Owner','Manager','Full Stack'],
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
          fontSize: 26,
        },
        ticks: {
          backdropColor: 'white',
          showLabelBackdrop: false,
          fontFamily: "'Colfax Black', sans-serif",
          backdropPaddingX: 2,
          backdropPaddingY: 2,
          fontColor: 'white',
          fontSize: 18,
          max: 10,
          min: 0,
          stepSize: 2
        }
    }
}
  return (
    <div className='Roles'>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
}