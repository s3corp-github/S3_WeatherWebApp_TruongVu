import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer, ReferenceArea } from "recharts";
// utils
import {
  CustomizeActiveDot,
  CustomizedTooltip,
} from "../../utils/ChartCustomized/CustomizeChart";
import { chartData } from "../../utils/fakeData";
//hooks
import useWindowSize from "../../hooks/useWindowSize";

const WeatherChart = () => {
  const size = useWindowSize();
  
  return (
    <div className="weatherChartContainer">
      <div className="chartContainer">
        <div className="chartContainer__text">
          <span className="tide-text">Tide</span>
          <span className="dot">•</span>
          <span>Sunrise and Sunset</span>
          <div className="date">28th May, 2021</div>
        </div>
      </div>
      {chartData ? (
        <ResponsiveContainer width={size.width} height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip content={<CustomizedTooltip />} />
            <Area
              type="monotone"
              dataKey="tide"
              fill="var(--color-blue-tide)"
              activeDot={false}
            />
            <Area
              type="monotone"
              dataKey="sun"
              stroke="var(--color-orange)"
              fillOpacity={0}
              activeDot={<CustomizeActiveDot />}
            />
            <XAxis dataKey="hour"/>
            <ReferenceArea
              x1={'12 a.m'}
              x2={'6 a.m'}
              stroke={'var(--color-black)'} 
              strokeOpacity={0}
            />
            <ReferenceArea
              x1={'6 p.m'}
              x2={'10 p.m'}
              stroke={'var(--color-black)'} 
              strokeOpacity={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        "No data chart"
      )}
    </div>
  );
};
export default WeatherChart;
