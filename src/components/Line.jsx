import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
} from "chart.js";
import { LineChartData } from "../FAKE_DATA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
);
export default function LineGraph() {
  return (
    <>
      <Line data={LineChartData} />
    </>
  );
}
