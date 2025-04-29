import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Used", "Free"],
  datasets: [
    {
      label: "Storage",
      data: [70, 30],
      backgroundColor: ["#FF6384", "#DDDDDD"],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "70%",
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
