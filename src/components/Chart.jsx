import { Box } from '@mui/material';
import BarChart from '../shared/Chart/index';
import { ThemeContext } from '../context/ThemeContext';
import { useContext, useEffect, useRef } from 'react';

const Chart = () => {
  const { darkMode } = useContext(ThemeContext);
  const chartRef = useRef(null);

  // Utility function to get bar thickness based on screen size
  const getBarThickness = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      return 18;
    } else {
      return 30; // Thicker bars for large screens
    }
  };


  // Update chart on window resize to adjust bar thickness
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current;
        chartInstance.options.datasets[0].barThickness = getBarThickness();
        chartInstance.options.datasets[0].maxBarThickness = getBarThickness();
        chartInstance.update();
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial resize call to ensure proper rendering on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Chart data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        data: [700, 900, 800, 400, 1000, 600, 800, 300, 900, 400, 1000, 600],
        backgroundColor: '#7b61ff', // Custom color
        // borderRadius: 8,            // Rounded bars
        barThickness: getBarThickness(),    // Bar thickness
        maxBarThickness: getBarThickness(),
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? '#fff' : '#000',
        },
        grid: {
          borderDash: [5, 5],
          color: darkMode ? 'rgba(255, 255, 255, 0.1)'  : 'rgba(0, 0, 0, 0.1)', // Light y-axis grid lines
        },
      },
      y: {
        ticks: {
          stepSize: 200,
          color: darkMode ? '#fff' : '#000',
        },
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
          color: darkMode ? 'rgba(255, 255, 255, 0.1)'  : 'rgba(0, 0, 0, 0.1)', // Light y-axis grid lines
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <BarChart ref={chartRef} data={data} options={options} />
    </Box>
  );
};

export default Chart;
