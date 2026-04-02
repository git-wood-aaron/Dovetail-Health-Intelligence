import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { Beaker, AlertTriangle, FileText, Download, Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

const LAB_DATA = [
  { date: "Oct 2025", hba1c: 6.2, vitD: 28, ldl: 110 },
  { date: "Nov 2025", hba1c: 6.1, vitD: 25, ldl: 105 },
  { date: "Dec 2025", hba1c: 6.0, vitD: 22, ldl: 102 },
  { date: "Jan 2026", hba1c: 5.9, vitD: 19, ldl: 98 },
  { date: "Feb 2026", hba1c: 5.8, vitD: 18, ldl: 95 },
];

export default function LabsPage() {
  const { isDark } = useTheme();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className={twMerge(
              "text-3xl font-bricolage font-extrabold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Lab Results
          </h2>
          <p
            className={twMerge(
              "font-medium",
              isDark ? "text-gray-400" : "text-gray-500",
            )}
          >
            Biomarker trends and AI-parsed reports
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#265F6B] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#1e4a54] transition-all shadow-md shadow-[#265F6B]/20">
          <Plus size={20} />
          Upload New Labs
        </button>
      </div>

      {/* Alert Banner for Outlier */}
      <div
        className={twMerge(
          "border p-4 rounded-3xl flex items-start gap-4",
          isDark
            ? "bg-red-500/10 border-red-500/30"
            : "bg-red-50 border-red-100",
        )}
      >
        <div
          className={twMerge(
            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
            isDark ? "bg-red-500/20 text-red-400" : "bg-red-100 text-red-600",
          )}
        >
          <AlertTriangle size={20} />
        </div>
        <div className="flex-1">
          <h4
            className={twMerge(
              "text-sm font-bold",
              isDark ? "text-red-400" : "text-red-900",
            )}
          >
            Critical Insight: Low Vitamin D
          </h4>
          <p
            className={twMerge(
              "text-xs mt-1 leading-relaxed",
              isDark ? "text-red-300" : "text-red-700",
            )}
          >
            Your Vitamin D levels have dropped to{" "}
            <span className="font-bold">18 ng/mL</span> (Normal: 30-100). This
            is a common outlier in weight management journeys. Dovetail Scribe
            has flagged this for your provider to discuss a possible
            supplementation strategy.
          </p>
        </div>
        <button
          className={twMerge(
            "px-4 py-2 border rounded-xl text-xs font-bold transition-colors",
            isDark
              ? "bg-[#1A1F2E] border-red-500/30 text-red-400 hover:bg-red-500/10"
              : "bg-white border-red-200 text-red-600 hover:bg-red-50",
          )}
        >
          Discuss with Provider
        </button>
      </div>

      {/* Graphs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* HbA1c Trend */}
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Metabolic Health
              </p>
              <h3
                className={twMerge(
                  "text-lg font-bricolage font-bold",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                HbA1c Trend
              </h3>
            </div>
            <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100">
              IMPROVING
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LAB_DATA}>
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
                  domain={[5.5, 6.5]}
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
                  itemStyle={{ fontWeight: "bold" }}
                />
                <Line
                  type="monotone"
                  dataKey="hba1c"
                  stroke="#265F6B"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#265F6B",
                    strokeWidth: 2,
                    stroke: isDark ? "#1A1F2E" : "#fff",
                  }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vitamin D Trend */}
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Immune & Bone Health
              </p>
              <h3
                className={twMerge(
                  "text-lg font-bricolage font-bold",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                Vitamin D (25-OH)
              </h3>
            </div>
            <div className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full border border-red-100">
              DEFICIENT
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LAB_DATA}>
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
                  domain={[0, 40]}
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
                <ReferenceArea
                  y1={0}
                  y2={30}
                  fill="#fee2e2"
                  fillOpacity={0.3}
                />
                <Line
                  type="monotone"
                  dataKey="vitD"
                  stroke="#ef4444"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#ef4444",
                    strokeWidth: 2,
                    stroke: isDark ? "#1A1F2E" : "#fff",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        <h3
          className={twMerge(
            "text-lg font-bricolage font-bold",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Recent Reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "Comprehensive Metabolic Panel",
              date: "Feb 20, 2026",
              status: "Processed",
            },
            {
              name: "Lipid Profile",
              date: "Jan 15, 2026",
              status: "Processed",
            },
          ].map((report, idx) => (
            <div
              key={idx}
              className={twMerge(
                "p-4 rounded-2xl border shadow-sm flex items-center justify-between group hover:border-[#265F6B]/50 transition-all",
                isDark
                  ? "bg-[#1A1F2E] border-gray-800"
                  : "bg-white border-gray-100",
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={twMerge(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    isDark
                      ? "bg-[#265F6B]/20 text-[#265F6B]"
                      : "bg-[#265F6B]/10 text-[#265F6B]",
                  )}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <h4
                    className={twMerge(
                      "text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    {report.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                    {report.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full uppercase">
                  {report.status}
                </span>
                <button
                  className={twMerge(
                    "p-2 transition-colors",
                    isDark
                      ? "text-gray-600 hover:text-[#265F6B]"
                      : "text-gray-300 hover:text-[#265F6B]",
                  )}
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
