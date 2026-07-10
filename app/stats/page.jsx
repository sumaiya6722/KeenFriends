'use client'
import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const FriendshipAnalytics = () => {
  // 1️⃣ Grab your real-time entry data from your shared state box
  const { currentTimelineEntry } = useContext(FriendsContext);

  // 2️⃣ Initialize count variables
  let textCount = 0;
  let callCount = 0;
  let videoCount = 0;

  // 3️⃣ Loop through entries to calculate the true totals dynamically
  currentTimelineEntry.forEach((entry) => {
    const type = entry.type?.toLowerCase();
    if (type === "text") textCount++;
    else if (type === "call") callCount++;
    else if (type === "video" || type === "video call") videoCount++;
  });

  // 4️⃣ Format data into the object array structure Recharts requires
  const chartData = [
    { name: "Text", value: textCount, color: "#8B5CF6" },   // Elegant Purple
    { name: "Call", value: callCount, color: "#1E3E34" },   // Your custom dark green
    { name: "Video", value: videoCount, color: "#10B981" }, // Active Mint Green
  ];

  // Fallback state if the user hasn't logged anything yet
  const totalEntries = textCount + callCount + videoCount;

  return (
    <div className="container mx-auto p-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-slate-800 tracking-tight">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-[#244D3F] mb-6">By Interaction Type</h3>

        {totalEntries === 0 ? (
          <div className="h-64 flex items-center justify-center text-slate-400 italic">
            Add some check-ins to see your relationship analytics charts!
          </div>
        ) : (
          <div className="w-full h-80 flex justify-center items-center">
            {/* 5️⃣ Responsive Container guarantees chart sizing scales perfectly */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="45%"
                  innerRadius={70}  // 🍩 This empty inside gap creates the "Donut" hole look instead of a standard solid pie!
                  outerRadius={100}
                  paddingAngle={5}  // Adds the spacing gaps between the colored wedges
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {/* 🏷️ Recharts automatically sets up the toggles and dots underneath */}
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendshipAnalytics;