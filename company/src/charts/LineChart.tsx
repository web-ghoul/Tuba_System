import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart data and config
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Revenue",
      data: [500, 800, 400, 900, 1200],
      fill: false,
      borderColor: "rgba(206, 200, 248, 1)",
      pointBackgroundColor: "rgba(154, 137, 255, 1)",
      pointBorderColor: "rgba(154, 137, 255, 1)",
      pointRadius: 6,
      pointHoverRadius: 8,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    label: false,
    title: {
      text: "Monthly Revenue",
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
