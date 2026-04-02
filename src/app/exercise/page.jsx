import React, { useState } from "react";
import {
  Activity,
  Calendar as CalendarIcon,
  Heart,
  Zap,
  Footprints,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

const MOCK_EXERCISE_DATA = [
  {
    date: "2026-02-16",
    steps: 8400,
    calories: 450,
    heartRate: 142,
    activity: "Zone 2 Cardio",
    duration: "45 min",
  },
  {
    date: "2026-02-17",
    steps: 10200,
    calories: 600,
    heartRate: 155,
    activity: "HIIT Session",
    duration: "30 min",
  },
  {
    date: "2026-02-18",
    steps: 7200,
    calories: 300,
    heartRate: 110,
    activity: "Walking",
    duration: "60 min",
  },
  {
    date: "2026-02-19",
    steps: 12500,
    calories: 850,
    heartRate: 165,
    activity: "Strength Training",
    duration: "75 min",
  },
  {
    date: "2026-02-20",
    steps: 5400,
    calories: 200,
    heartRate: 95,
    activity: "Recovery Walk",
    duration: "30 min",
  },
  {
    date: "2026-02-21",
    steps: 9800,
    calories: 500,
    heartRate: 138,
    activity: "Cycling",
    duration: "50 min",
  },
  {
    date: "2026-02-22",
    steps: 11000,
    calories: 700,
    heartRate: 148,
    activity: "Swimming",
    duration: "45 min",
  },
];

export default function ExercisePage() {
  const [selectedDay, setSelectedDay] = useState(MOCK_EXERCISE_DATA[6]);
  const { isDark } = useTheme();

  const trends = {
    avgCalories: Math.round(
      MOCK_EXERCISE_DATA.reduce((acc, d) => acc + d.calories, 0) /
        MOCK_EXERCISE_DATA.length,
    ),
    avgSteps: Math.round(
      MOCK_EXERCISE_DATA.reduce((acc, d) => acc + d.steps, 0) /
        MOCK_EXERCISE_DATA.length,
    ),
    avgHR: Math.round(
      MOCK_EXERCISE_DATA.reduce((acc, d) => acc + d.heartRate, 0) /
        MOCK_EXERCISE_DATA.length,
    ),
  };

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
          Exercise
        </h2>
        <p
          className={twMerge(
            "font-medium",
            isDark ? "text-gray-400" : "text-gray-500",
          )}
        >
          Aggregated activity data from Garmin & Apple Health
        </p>
      </div>

      {/* Trends Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm flex items-center gap-4",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div
            className={twMerge(
              "w-12 h-12 rounded-2xl flex items-center justify-center",
              isDark
                ? "bg-[#265F6B]/20 text-[#265F6B]"
                : "bg-[#265F6B]/10 text-[#265F6B]",
            )}
          >
            <Zap size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Avg Burn
            </p>
            <h3
              className={twMerge(
                "text-2xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {trends.avgCalories} kcal
            </h3>
          </div>
        </div>
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm flex items-center gap-4",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
            <Footprints size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Avg Steps
            </p>
            <h3
              className={twMerge(
                "text-2xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {trends.avgSteps.toLocaleString()}
            </h3>
          </div>
        </div>
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm flex items-center gap-4",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
            <Heart size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Avg Heart Rate
            </p>
            <h3
              className={twMerge(
                "text-2xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {trends.avgHR} bpm
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Calendar */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3
              className={twMerge(
                "text-lg font-bricolage font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              Activity Calendar
            </h3>
            <div className="flex gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-400" /> Garmin
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#265F6B]" /> Apple
              </span>
            </div>
          </div>

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
                    Activity
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                    Burn
                  </th>
                </tr>
              </thead>
              <tbody
                className={twMerge(
                  "divide-y",
                  isDark ? "divide-gray-800" : "divide-gray-50",
                )}
              >
                {MOCK_EXERCISE_DATA.map((day) => (
                  <tr
                    key={day.date}
                    onClick={() => setSelectedDay(day)}
                    className={twMerge(
                      "group cursor-pointer transition-colors",
                      selectedDay.date === day.date
                        ? isDark
                          ? "bg-blue-500/20"
                          : "bg-blue-50/50"
                        : isDark
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-50/50",
                    )}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={twMerge(
                          "text-sm font-bold",
                          isDark ? "text-white" : "text-gray-900",
                        )}
                      >
                        {day.date}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span
                          className={twMerge(
                            "text-sm font-medium",
                            isDark ? "text-gray-400" : "text-gray-600",
                          )}
                        >
                          {day.activity}
                        </span>
                      </div>
                    </td>
                    <td
                      className={twMerge(
                        "px-6 py-4 text-sm font-geist font-medium",
                        isDark ? "text-gray-500" : "text-gray-500",
                      )}
                    >
                      {day.duration}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={twMerge(
                          "text-sm font-bold",
                          isDark ? "text-white" : "text-gray-900",
                        )}
                      >
                        {day.calories} kcal
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Day Stats */}
        <div className="space-y-4">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Workout Details
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
                  Primary Metric
                </p>
                <h4
                  className={twMerge(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  {selectedDay.activity}
                </h4>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                <Activity size={24} />
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
                  Heart Rate
                </p>
                <p className="text-xl font-geist font-bold text-red-500">
                  {selectedDay.heartRate}{" "}
                  <span className="text-xs font-medium">bpm</span>
                </p>
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
                  Steps
                </p>
                <p className="text-xl font-geist font-bold text-blue-500">
                  {selectedDay.steps.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h5
                className={twMerge(
                  "text-[10px] font-bold uppercase tracking-widest pb-2 border-b",
                  isDark
                    ? "text-gray-400 border-gray-800"
                    : "text-gray-400 border-gray-50",
                )}
              >
                Intensity Breakdown
              </h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={twMerge(
                      "font-medium",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Zone 2 (Endurance)
                  </span>
                  <span
                    className={twMerge(
                      "font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    22 min
                  </span>
                </div>
                <div
                  className={twMerge(
                    "w-full h-1 rounded-full",
                    isDark ? "bg-gray-800" : "bg-gray-100",
                  )}
                >
                  <div
                    className="bg-blue-400 h-1 rounded-full"
                    style={{ width: "60%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={twMerge(
                      "font-medium",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Zone 4 (Threshold)
                  </span>
                  <span
                    className={twMerge(
                      "font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    8 min
                  </span>
                </div>
                <div
                  className={twMerge(
                    "w-full h-1 rounded-full",
                    isDark ? "bg-gray-800" : "bg-gray-100",
                  )}
                >
                  <div
                    className="bg-[#265F6B] h-1 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
