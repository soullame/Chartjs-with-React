import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  Tooltip,
  Title
} from "chart.js";
import { BarChartData } from "../FAKE_DATA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  Tooltip,
  Title
);
export default function BarGraph() {
  return (
    <>
      <Bar data={BarChartData} />
    </>
  );
}
