// import React from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PropTypes from "prop-types";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Reusable BarChart component
const BarChart = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        backgroundColor: PropTypes.string, // Or an array of strings
      })
    ).isRequired,
  }).isRequired,

  options: PropTypes.shape({
    responsive: PropTypes.bool,
    title: PropTypes.shape({
      display: PropTypes.bool,
      text: PropTypes.string,
    }),
    legend: PropTypes.shape({
      display: PropTypes.bool,
      position: PropTypes.string,
    }),
    scales: PropTypes.shape({
      x: PropTypes.shape({
        beginAtZero: PropTypes.bool,
      }),
      y: PropTypes.shape({
        beginAtZero: PropTypes.bool,
      }),
    }),
  }),
};
