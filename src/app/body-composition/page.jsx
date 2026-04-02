import React, { useState } from "react";
import {
  Weight,
  TrendingDown,
  TrendingUp,
  Scale,
  Activity,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for body composition tracking
const MOCK_COMPOSITION_DATA = [
  {
    date: "Feb 20",
    weight: 172.4,
    bodyFat: 28.2,
    muscleMass: 71.8,
    height: 66,
    bmi: 27.8,
    time: "6:30 AM",
  },
  {
    date: "Feb 13",
    weight: 174.1,
    bodyFat: 28.8,
    muscleMass: 71.2,
    height: 66,
    bmi: 28.1,
    time: "6:45 AM",
  },
  {
    date: "Feb 6",
    weight: 175.3,
    bodyFat: 29.1,
    muscleMass: 70.9,
    height: 66,
    bmi: 28.3,
    time: "7:00 AM",
  },
  {
    date: "Jan 30",
    weight: 176.8,
    bodyFat: 29.5,
    muscleMass: 70.5,
    height: 66,
    bmi: 28.5,
    time: "6:30 AM",
  },
  {
    date: "Jan 23",
    weight: 178.2,
    bodyFat: 30.1,
    muscleMass: 69.9,
    height: 66,
    bmi: 28.8,
    time: "6:15 AM",
  },
  {
    date: "Jan 16",
    weight: 179.5,
    bodyFat: 30.4,
    muscleMass: 69.6,
    height: 66,
    bmi: 29.0,
    time: "6:30 AM",
  },
];

export default function BodyCompositionPage() {
  const [selectedEntry, setSelectedEntry] = useState(MOCK_COMPOSITION_DATA[0]);
  const { isDark } = useTheme();

  // Calculate trends
  const latestEntry = MOCK_COMPOSITION_DATA[0];
  const oldestEntry = MOCK_COMPOSITION_DATA[MOCK_COMPOSITION_DATA.length - 1];
  const weightChange = latestEntry.weight - oldestEntry.weight;
  const bodyFatChange = latestEntry.bodyFat - oldestEntry.bodyFat;
  const muscleChange = latestEntry.muscleMass - oldestEntry.muscleMass;

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <h2
          className={twMerge(
            "text-3xl font-bricolage font-extrabold",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Body Composition
        </h2>
        <p
          className={twMerge(
            "font-medium",
            isDark ? "text-gray-400" : "text-gray-500",
          )}
        >
          Weight tracking and body composition data from smart scales
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={twMerge(
                "w-12 h-12 rounded-2xl flex items-center justify-center",
                isDark
                  ? "bg-[#265F6B]/20 text-white"
                  : "bg-[#265F6B]/10 text-[#265F6B]",
              )}
            >
              <Weight size={24} />
            </div>
            {weightChange < 0 ? (
              <TrendingDown className="text-green-500" size={20} />
            ) : (
              <TrendingUp className="text-red-500" size={20} />
            )}
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Current Weight
          </p>
          <h3
            className={twMerge(
              "text-3xl font-geist font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {latestEntry.weight} <span className="text-lg">lbs</span>
          </h3>
          <p className="text-xs text-green-600 font-medium mt-2">
            {weightChange > 0 ? "+" : ""}
            {weightChange.toFixed(1)} lbs from start
          </p>
        </div>

        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
              <Activity size={24} />
            </div>
            {bodyFatChange < 0 ? (
              <TrendingDown className="text-green-500" size={20} />
            ) : (
              <TrendingUp className="text-red-500" size={20} />
            )}
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Body Fat %
          </p>
          <h3
            className={twMerge(
              "text-3xl font-geist font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {latestEntry.bodyFat}%
          </h3>
          <p className="text-xs text-green-600 font-medium mt-2">
            {bodyFatChange > 0 ? "+" : ""}
            {bodyFatChange.toFixed(1)}% from start
          </p>
        </div>

        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
              <Activity size={24} />
            </div>
            {muscleChange > 0 ? (
              <TrendingUp className="text-green-500" size={20} />
            ) : (
              <TrendingDown className="text-red-500" size={20} />
            )}
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Muscle Mass %
          </p>
          <h3
            className={twMerge(
              "text-3xl font-geist font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {latestEntry.muscleMass}%
          </h3>
          <p className="text-xs text-green-600 font-medium mt-2">
            {muscleChange > 0 ? "+" : ""}
            {muscleChange.toFixed(1)}% from start
          </p>
        </div>

        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500">
              <Scale size={24} />
            </div>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            BMI
          </p>
          <h3
            className={twMerge(
              "text-3xl font-geist font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {latestEntry.bmi}
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-2">
            Height: {latestEntry.height}" (5'6")
          </p>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weight Trend Chart */}
        <div className="lg:col-span-2 space-y-4">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Weight Trend
          </h3>

          <div
            className={twMerge(
              "p-6 rounded-3xl border shadow-sm",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[...MOCK_COMPOSITION_DATA].reverse()}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke={isDark ? "#1f2937" : "#f0f0f0"}
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    tick={{ fill: "#94a3b8" }}
                  />
                  <YAxis
                    domain={[170, 180]}
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    tick={{ fill: "#94a3b8" }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      backgroundColor: isDark ? "#1A1F2E" : "#fff",
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#265F6B"
                    strokeWidth={4}
                    dot={{
                      r: 6,
                      fill: "#265F6B",
                      strokeWidth: 2,
                      stroke: isDark ? "#1A1F2E" : "#fff",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* History Table */}
          <div
            className={twMerge(
              "rounded-3xl border shadow-sm overflow-hidden",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className={twMerge(
                    "border-b",
                    isDark
                      ? "bg-[#0A0E1A] border-gray-800"
                      : "bg-gray-50 border-gray-100",
                  )}
                >
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Date
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Weight
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Body Fat %
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Muscle %
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                    BMI
                  </th>
                </tr>
              </thead>
              <tbody
                className={twMerge(
                  "divide-y",
                  isDark ? "divide-gray-800" : "divide-gray-50",
                )}
              >
                {MOCK_COMPOSITION_DATA.map((entry) => (
                  <tr
                    key={entry.date}
                    onClick={() => setSelectedEntry(entry)}
                    className={twMerge(
                      "group cursor-pointer transition-colors",
                      selectedEntry.date === entry.date
                        ? isDark
                          ? "bg-[#265F6B]/20"
                          : "bg-[#265F6B]/5"
                        : isDark
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-50/50",
                    )}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <span
                          className={twMerge(
                            "text-sm font-bold block",
                            isDark ? "text-white" : "text-gray-900",
                          )}
                        >
                          {entry.date}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {entry.time}
                        </span>
                      </div>
                    </td>
                    <td
                      className={twMerge(
                        "px-6 py-4 text-sm font-geist font-bold",
                        isDark ? "text-white" : "text-gray-900",
                      )}
                    >
                      {entry.weight} lbs
                    </td>
                    <td
                      className={twMerge(
                        "px-6 py-4 text-sm font-geist font-medium",
                        isDark ? "text-gray-400" : "text-gray-600",
                      )}
                    >
                      {entry.bodyFat}%
                    </td>
                    <td
                      className={twMerge(
                        "px-6 py-4 text-sm font-geist font-medium",
                        isDark ? "text-gray-400" : "text-gray-600",
                      )}
                    >
                      {entry.muscleMass}%
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={twMerge(
                          "text-sm font-bold",
                          isDark ? "text-white" : "text-gray-900",
                        )}
                      >
                        {entry.bmi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Entry Details */}
        <div className="space-y-4">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Scan Details
          </h3>
          <div
            className={twMerge(
              "p-6 rounded-3xl border shadow-sm space-y-6",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Scan Date
                </p>
                <h4
                  className={twMerge(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  {selectedEntry.date}
                </h4>
                <p className="text-xs text-gray-400 font-medium mt-1">
                  {selectedEntry.time}
                </p>
              </div>
              <div
                className={twMerge(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  isDark
                    ? "bg-[#265F6B]/20 text-white"
                    : "bg-[#265F6B]/10 text-[#265F6B]",
                )}
              >
                <Scale size={24} />
              </div>
            </div>

            <div className="space-y-4">
              <h5
                className={twMerge(
                  "text-[10px] font-bold uppercase tracking-widest pb-2 border-b",
                  isDark
                    ? "text-gray-400 border-gray-800"
                    : "text-gray-400 border-gray-50",
                )}
              >
                Composition Breakdown
              </h5>

              <div
                className={twMerge(
                  "p-4 rounded-2xl border",
                  isDark
                    ? "bg-[#0A0E1A] border-gray-800"
                    : "bg-gray-50 border-gray-100",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={twMerge(
                      "text-xs font-medium",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Body Fat
                  </span>
                  <span
                    className={twMerge(
                      "text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {selectedEntry.bodyFat}%
                  </span>
                </div>
                <div
                  className={twMerge(
                    "w-full h-2 rounded-full",
                    isDark ? "bg-gray-800" : "bg-gray-100",
                  )}
                >
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${selectedEntry.bodyFat}%` }}
                  />
                </div>
              </div>

              <div
                className={twMerge(
                  "p-4 rounded-2xl border",
                  isDark
                    ? "bg-[#0A0E1A] border-gray-800"
                    : "bg-gray-50 border-gray-100",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={twMerge(
                      "text-xs font-medium",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Muscle Mass
                  </span>
                  <span
                    className={twMerge(
                      "text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {selectedEntry.muscleMass}%
                  </span>
                </div>
                <div
                  className={twMerge(
                    "w-full h-2 rounded-full",
                    isDark ? "bg-gray-800" : "bg-gray-100",
                  )}
                >
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${selectedEntry.muscleMass}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={twMerge(
                    "p-4 rounded-2xl border",
                    isDark
                      ? "bg-[#0A0E1A] border-gray-800"
                      : "bg-gray-50 border-gray-100",
                  )}
                >
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                    Height
                  </p>
                  <p
                    className={twMerge(
                      "text-xl font-geist font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {selectedEntry.height}"
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-1">5'6"</p>
                </div>
                <div
                  className={twMerge(
                    "p-4 rounded-2xl border",
                    isDark
                      ? "bg-[#0A0E1A] border-gray-800"
                      : "bg-gray-50 border-gray-100",
                  )}
                >
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                    BMI
                  </p>
                  <p
                    className={twMerge(
                      "text-xl font-geist font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {selectedEntry.bmi}
                  </p>
                  <p className="text-xs text-purple-500 font-medium mt-1">
                    Overweight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
