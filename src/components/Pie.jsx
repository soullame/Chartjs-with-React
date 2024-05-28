import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip);
import { PieChartData } from "../FAKE_DATA";

export default function PieGraph() {
  return (
    <>
      <Pie data={PieChartData} />
    </>
  );
}
