import { Box } from '@mui/material';
import BarChart from '../shared/Chart/index';

const Chart = () => {
  // Chart data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        data: [700, 900, 800, 400, 1000, 600, 800, 300, 900, 400, 1000, 600],
        backgroundColor: '#7b61ff', // Custom color
        // borderRadius: 8,            // Rounded bars
        barThickness: 30,           // Bar thickness
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
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
        grid: {
          borderDash: [5, 5],
          color: 'rgba(0, 0, 0, 0.1)', // Light y-axis grid lines
        },
      },
      y: {
        ticks: {
          stepSize: 200,
        },
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
          color: 'rgba(0, 0, 0, 0.1)', // Light y-axis grid lines
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <BarChart data={data} options={options} />
    </Box>
  );
};

export default Chart;
