import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
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

  const renderBackDrop = () => {
    return (
      <div className="backdropContainer" style={{ color: "black" }}>
        hello
      </div>
    );
  };
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
        <ResponsiveContainer key={size.width} width={2000} height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 0,
              left: 0,
              bottom: 0,
            }}
          >
            {renderBackDrop({})}
            <XAxis dataKey="hour" />
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
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        "No data chart"
      )}
    </div>
  );
};
export default WeatherChart;
