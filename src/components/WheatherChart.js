import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
// utils
import {CustomizeSunDot, CustomizedTooltip} from '../utils/customizeChart';
import { chartData } from '../utils/fakeData';
//hooks
import useWindowSize from '../hooks/useWindowSize';

const WheatherChart = () => {
  const size = useWindowSize();
  
  return (
    <div className="wheatherChartContainer">
      <div className="chartContainer">
        <div className="chartContainer__text">
          <span className="tide-text">
            Tide
          </span>
          <span className="dot">•</span>
          <span>Sunrise and Sunset</span>
          <div className="date">
            28th May, 2021
          </div>
        </div>
      </div>
      <ResponsiveContainer key={size.width} width={2000} height="100%" >
          <AreaChart
            data={chartData}
            // width={2500} height={250}
            margin={{
              top: 0, left: 0, bottom: 0
            }}
          >
          <XAxis dataKey="hour" />
            <Tooltip content={<CustomizedTooltip/>}/>
            {/* <Legend /> */}
            <Area type="monotone" dataKey="tide" fill="#1ab7ea" />
            <Area
              type="monotone"
              dataKey="sun" 
              stroke="#ffc658" 
              fillOpacity={0}
              dot={<CustomizeSunDot/>}
              // activeDot={<CustomizeSunDot />}
            />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
export default WheatherChart;