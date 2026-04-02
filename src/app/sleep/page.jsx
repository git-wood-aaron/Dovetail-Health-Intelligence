import React from "react";
import { Moon, TrendingUp, Clock } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample sleep data
const sleepData = [
  {
    date: "Feb 20",
    deepSleep: 1.5,
    lightSleep: 4.2,
    remSleep: 1.8,
    total: 7.5,
  },
  {
    date: "Feb 21",
    deepSleep: 1.8,
    lightSleep: 4.5,
    remSleep: 2.0,
    total: 8.3,
  },
  {
    date: "Feb 22",
    deepSleep: 1.3,
    lightSleep: 3.8,
    remSleep: 1.5,
    total: 6.6,
  },
  {
    date: "Feb 23",
    deepSleep: 2.0,
    lightSleep: 4.8,
    remSleep: 2.2,
    total: 9.0,
  },
  {
    date: "Feb 24",
    deepSleep: 1.6,
    lightSleep: 4.3,
    remSleep: 1.9,
    total: 7.8,
  },
  {
    date: "Feb 25",
    deepSleep: 1.7,
    lightSleep: 4.6,
    remSleep: 2.1,
    total: 8.4,
  },
  {
    date: "Feb 26",
    deepSleep: 1.4,
    lightSleep: 4.0,
    remSleep: 1.7,
    total: 7.1,
  },
  {
    date: "Feb 27",
    deepSleep: 1.9,
    lightSleep: 4.7,
    remSleep: 2.0,
    total: 8.6,
  },
];

// Detailed table data
const tableData = [
  {
    date: "Feb 27, 2026",
    bedtime: "10:45 PM",
    wakeup: "7:15 AM",
    total: "8.6 hrs",
    deep: "1.9 hrs",
    light: "4.7 hrs",
    rem: "2.0 hrs",
    quality: "Excellent",
  },
  {
    date: "Feb 26, 2026",
    bedtime: "11:15 PM",
    wakeup: "6:30 AM",
    total: "7.1 hrs",
    deep: "1.4 hrs",
    light: "4.0 hrs",
    rem: "1.7 hrs",
    quality: "Good",
  },
  {
    date: "Feb 25, 2026",
    bedtime: "10:30 PM",
    wakeup: "7:00 AM",
    total: "8.4 hrs",
    deep: "1.7 hrs",
    light: "4.6 hrs",
    rem: "2.1 hrs",
    quality: "Excellent",
  },
  {
    date: "Feb 24, 2026",
    bedtime: "11:00 PM",
    wakeup: "6:45 AM",
    total: "7.8 hrs",
    deep: "1.6 hrs",
    light: "4.3 hrs",
    rem: "1.9 hrs",
    quality: "Good",
  },
  {
    date: "Feb 23, 2026",
    bedtime: "10:00 PM",
    wakeup: "7:00 AM",
    total: "9.0 hrs",
    deep: "2.0 hrs",
    light: "4.8 hrs",
    rem: "2.2 hrs",
    quality: "Excellent",
  },
  {
    date: "Feb 22, 2026",
    bedtime: "11:30 PM",
    wakeup: "6:00 AM",
    total: "6.6 hrs",
    deep: "1.3 hrs",
    light: "3.8 hrs",
    rem: "1.5 hrs",
    quality: "Fair",
  },
  {
    date: "Feb 21, 2026",
    bedtime: "10:15 PM",
    wakeup: "6:45 AM",
    total: "8.3 hrs",
    deep: "1.8 hrs",
    light: "4.5 hrs",
    rem: "2.0 hrs",
    quality: "Excellent",
  },
  {
    date: "Feb 20, 2026",
    bedtime: "11:00 PM",
    wakeup: "6:30 AM",
    total: "7.5 hrs",
    deep: "1.5 hrs",
    light: "4.2 hrs",
    rem: "1.8 hrs",
    quality: "Good",
  },
];

export default function SleepPage() {
  const { isDark } = useTheme();

  // Calculate averages
  const avgTotal =
    sleepData.reduce((sum, night) => sum + night.total, 0) / sleepData.length;
  const avgRem =
    sleepData.reduce((sum, night) => sum + night.remSleep, 0) /
    sleepData.length;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={twMerge(
            "rounded-xl p-3 shadow-lg border",
            isDark
              ? "bg-[#1A1F2E] border-gray-700"
              : "bg-white border-gray-200",
          )}
        >
          <p
            className={twMerge(
              "font-bold text-xs mb-2",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {payload[0].payload.date}
          </p>
          <p className="text-xs text-blue-500 font-medium">
            Deep: {payload[0].value.toFixed(1)} hrs
          </p>
          <p className="text-xs text-purple-500 font-medium">
            Light: {payload[1].value.toFixed(1)} hrs
          </p>
          <p className="text-xs text-teal-500 font-medium">
            REM: {payload[2].value.toFixed(1)} hrs
          </p>
          <p
            className={twMerge(
              "text-xs font-bold mt-1 pt-1 border-t",
              isDark
                ? "text-white border-gray-700"
                : "text-gray-900 border-gray-200",
            )}
          >
            Total: {payload[0].payload.total.toFixed(1)} hrs
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2
          className={twMerge(
            "text-3xl font-bricolage font-extrabold mb-2",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Sleep Tracking
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          Monitor your sleep patterns and quality over time
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={twMerge(
            "p-6 rounded-2xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Avg Sleep Duration
              </p>
              <p
                className={twMerge(
                  "text-4xl font-bricolage font-extrabold",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                {avgTotal.toFixed(1)}
                <span className="text-xl ml-1 text-gray-400">hrs</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Clock size={24} className="text-blue-500" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-green-500" />
            <span className="text-xs font-bold text-green-500">
              +12% from last week
            </span>
          </div>
        </div>

        <div
          className={twMerge(
            "p-6 rounded-2xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Avg REM Sleep
              </p>
              <p
                className={twMerge(
                  "text-4xl font-bricolage font-extrabold",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                {avgRem.toFixed(1)}
                <span className="text-xl ml-1 text-gray-400">hrs</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
              <Moon size={24} className="text-teal-600" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-green-500" />
            <span className="text-xs font-bold text-green-500">
              +8% from last week
            </span>
          </div>
        </div>
      </div>

      {/* Sleep Chart */}
      <div
        className={twMerge(
          "p-6 rounded-2xl border shadow-sm",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
        )}
      >
        <h3
          className={twMerge(
            "text-lg font-bricolage font-extrabold mb-1",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Sleep Breakdown by Night
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-6">
          Last 8 nights of tracked sleep
        </p>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={sleepData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? "#374151" : "#E5E7EB"}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 600 }}
              label={{
                value: "Hours",
                angle: -90,
                position: "insideLeft",
                style: {
                  fill: "#9CA3AF",
                  fontSize: 12,
                  fontWeight: 600,
                },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            />
            <Bar
              dataKey="deepSleep"
              stackId="a"
              fill="#3B82F6"
              name="Deep Sleep"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="lightSleep"
              stackId="a"
              fill="#A855F7"
              name="Light Sleep"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="remSleep"
              stackId="a"
              fill="#14B8A6"
              name="REM Sleep"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep Table */}
      <div
        className={twMerge(
          "rounded-2xl border shadow-sm overflow-hidden",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
        )}
      >
        <div className="p-6 border-b border-gray-100">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-extrabold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Sleep Log Details
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-1">
            Complete breakdown of all tracked nights
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className={twMerge(
                "border-b",
                isDark ? "border-gray-800" : "border-gray-100",
              )}
            >
              <tr>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Date
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Bedtime
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Wake Up
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Total
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Deep
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Light
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  REM
                </th>
                <th
                  className={twMerge(
                    "text-left px-6 py-3 text-xs font-bold uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-gray-500",
                  )}
                >
                  Quality
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className={twMerge(
                    "border-b",
                    isDark
                      ? "border-gray-800 hover:bg-gray-800/50"
                      : "border-gray-50 hover:bg-gray-50",
                  )}
                >
                  <td
                    className={twMerge(
                      "px-6 py-4 text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {row.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-400">
                    {row.bedtime}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-400">
                    {row.wakeup}
                  </td>
                  <td
                    className={twMerge(
                      "px-6 py-4 text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {row.total}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-blue-500">
                    {row.deep}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-purple-500">
                    {row.light}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-teal-600">
                    {row.rem}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={twMerge(
                        "px-3 py-1 rounded-lg text-xs font-bold",
                        row.quality === "Excellent"
                          ? "bg-green-100 text-green-700"
                          : row.quality === "Good"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700",
                      )}
                    >
                      {row.quality}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
