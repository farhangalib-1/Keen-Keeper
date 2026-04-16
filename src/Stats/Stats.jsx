import { useContext } from "react";
import { TimelineContext } from "../Custom/TimelineContext";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { Legend } from "recharts";

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  const { timeline } = useContext(TimelineContext);

  const calls = timeline.filter(item => item.type === "Call").length;
  const messages = timeline.filter(item => item.type === "Text").length;
  const videos = timeline.filter(item => item.type === "Video").length;

  const chartData = [
    { name: "Calls", value: calls },
    { name: "Texts", value: messages },
    { name: "Videos", value: videos }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl mt-3 font-bold">Friendship Analytics</h1>

      <div className="shadow py-6 my-4 rounded-2xl">
        <h1 className="ml-5 text-xl">By Interaction Type</h1>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={80}
              outerRadius={120}
              cornerRadius= {50}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
             
              isAnimationActive={isAnimationActive}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
              <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}