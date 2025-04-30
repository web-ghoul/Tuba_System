import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DoughnutChartTypes } from "../types/charts.types";

const DoughnutChart = ({ half }: DoughnutChartTypes) => {
  console.log(half);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["الرصيد المتاح للإستخدام الطبي", "الرصيد المستهلك"],
    datasets: [
      {
        label: "Storage",
        data: [100, 120],
        backgroundColor: ["#EFEDFD", "#5643e1"],
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

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
