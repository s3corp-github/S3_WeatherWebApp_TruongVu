import {useState} from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer
} from "recharts";

const chartData = [
  { hour: '12 a.m', tide: 2.9, sun: 0 },
  { hour: '2 a.m', tide: 2.8, sun: 0 },
  { hour: '4 a.m', tide: 2.5, sun: 0 },
  { hour: '6 a.m', tide: 2, sun: 0.001 },
  { hour: '8 a.m', tide: 1.5, sun: 1.6 },
  { hour: '10 a.m', tide: 1, sun: 3.4 },
  { hour: '12 p.m', tide: 0.7, sun: 4.1 },
  { hour: '2 p.m', tide: 1, sun: 3.4 },
  { hour: '4 p.m', tide: 1.5, sun: 1.6 },
  { hour: '6 p.m', tide: 2, sun: 0.001 },
  { hour: '8 p.m', tide: 2.5, sun: 0 },
  { hour: '10 p.m', tide: 2.8, sun: 0 },
  { hour: '12 a.m', tide: 2.9, sun: 0 },
  { hour: '2 a.m', tide: 2.8, sun: 0 },
  { hour: '4 a.m', tide: 2.5, sun: 0 },
  { hour: '6 a.m', tide: 2, sun: 0.001 },
  { hour: '8 a.m', tide: 1.5, sun: 1.6 },
  { hour: '10 a.m', tide: 1, sun: 3.4 },
  { hour: '12 p.m', tide: 0.7, sun: 4.1 },
  { hour: '2 p.m', tide: 1, sun: 3.4 },
  { hour: '4 p.m', tide: 1.5, sun: 1.6 },
  { hour: '6 p.m', tide: 2, sun: 0.001 },
  { hour: '8 p.m', tide: 2.5, sun: 0 },
  { hour: '10 p.m', tide: 2.8, sun: 0 },
  { hour: '12 a.m', tide: 2.9, sun: 0 },
  { hour: '2 a.m', tide: 2.8, sun: 0 },
  { hour: '4 a.m', tide: 2.5, sun: 0 },
  { hour: '6 a.m', tide: 2, sun: 0.001 },
  { hour: '8 a.m', tide: 1.5, sun: 1.6 },
  { hour: '10 a.m', tide: 1, sun: 3.4 },
  { hour: '12 p.m', tide: 0.7, sun: 4.1 },
  { hour: '2 p.m', tide: 1, sun: 3.4 },
  { hour: '4 p.m', tide: 1.5, sun: 1.6 },
  { hour: '6 p.m', tide: 2, sun: 0.001 },
  { hour: '8 p.m', tide: 2.5, sun: 0 },
  { hour: '10 p.m', tide: 2.8, sun: 0 },
  { hour: '12 a.m', tide: 2.9, sun: 0 }
]

const WheatherChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div className="wheatherChartContainer">
      <div className="chartContainer">
        <div className="chartContainer__text">
          <span className="tide-text">
            {`Tide ${" "}`}
          </span>
          Sunrise and Sunset
          <div className="date">
            28th May, 2021
          </div>
        </div>
        
        {/* <ResponsiveContainer key={windowWidth} width={2500} height="100%"> */}
          <AreaChart
            data={chartData}
            width={2500} height={250}
            margin={{
              top: 0, left: 0, bottom: 30
            }}
          >
          <XAxis dataKey="hour" />
          {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="tide" fill="#1ab7ea" />
            <Area type="monotone" dataKey="sun" stroke="#ffc658" fill="#FFF" />
          </AreaChart>
        {/* </ResponsiveContainer> */}
        
      </div>
    </div>
  )
}
export default WheatherChart;