import "./App.css";
import BarGraph from "./components/Bar";
import LineGraph from "./components/Line";
import PieGraph from "./components/Pie";

function App() {
  return (
    <div className="allGraphs">
      <div className="lineGraph">
        <h2>Line Graph</h2>
        <LineGraph />
      </div>
      <div className="barGraph">
        <h2>Bar Graph</h2>
        <BarGraph />
      </div>
      <div className="pieGraph">
        <h2>Pie Graph</h2>
        <PieGraph />
      </div>
    </div>
  );
}

export default App;
