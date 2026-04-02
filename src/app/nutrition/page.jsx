import React, { useState } from "react";
import {
  Utensils,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

const MOCK_NUTRITION_DATA = [
  {
    date: "2026-02-16",
    calories: 1850,
    protein: 145,
    carbs: 180,
    fat: 55,
    meals: ["Greek Yogurt", "Grilled Chicken Salad", "Steak & Broccoli"],
  },
  {
    date: "2026-02-17",
    calories: 2100,
    protein: 160,
    carbs: 220,
    fat: 65,
    meals: ["Oatmeal", "Turkey Sandwich", "Salmon & Asparagus"],
  },
  {
    date: "2026-02-18",
    calories: 1950,
    protein: 150,
    carbs: 190,
    fat: 58,
    meals: ["Protein Shake", "Chicken Bowl", "Tofu Stir-fry"],
  },
  {
    date: "2026-02-19",
    calories: 1700,
    protein: 130,
    carbs: 150,
    fat: 50,
    meals: ["Eggs & Avocado", "Lentil Soup", "Baked Cod"],
  },
  {
    date: "2026-02-20",
    calories: 2200,
    protein: 170,
    carbs: 240,
    fat: 70,
    meals: ["Pancakes", "Burger (no bun)", "Shrimp Pasta"],
  },
  {
    date: "2026-02-21",
    calories: 1800,
    protein: 140,
    carbs: 170,
    fat: 52,
    meals: ["Smoothie", "Cobb Salad", "Roasted Chicken"],
  },
  {
    date: "2026-02-22",
    calories: 2000,
    protein: 155,
    carbs: 200,
    fat: 60,
    meals: ["Omelette", "Quinoa Bowl", "Pork Tenderloin"],
  },
];

export default function NutritionPage() {
  const [selectedDay, setSelectedDay] = useState(MOCK_NUTRITION_DATA[6]);
  const { isDark } = useTheme();

  const averages = {
    protein: Math.round(
      MOCK_NUTRITION_DATA.reduce((acc, d) => acc + d.protein, 0) /
        MOCK_NUTRITION_DATA.length,
    ),
    carbs: Math.round(
      MOCK_NUTRITION_DATA.reduce((acc, d) => acc + d.carbs, 0) /
        MOCK_NUTRITION_DATA.length,
    ),
    fat: Math.round(
      MOCK_NUTRITION_DATA.reduce((acc, d) => acc + d.fat, 0) /
        MOCK_NUTRITION_DATA.length,
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
          Nutrition
        </h2>
        <p
          className={twMerge(
            "font-medium",
            isDark ? "text-gray-400" : "text-gray-500",
          )}
        >
          Diet plan and AI-interpreted food logs
        </p>
      </div>

      {/* Averages Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <p
            className={twMerge(
              "text-[10px] font-bold uppercase tracking-widest mb-1",
              isDark ? "text-white" : "text-[#265F6B]",
            )}
          >
            Avg Protein
          </p>
          <div className="flex items-end gap-2">
            <h3
              className={twMerge(
                "text-3xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {averages.protein}g
            </h3>
            <span className="text-xs text-gray-400 font-medium mb-1">
              per day
            </span>
          </div>
          <div
            className={twMerge(
              "w-full h-1.5 rounded-full mt-4",
              isDark ? "bg-[#265F6B]/20" : "bg-[#265F6B]/10",
            )}
          >
            <div
              className="bg-[#265F6B] h-1.5 rounded-full"
              style={{ width: "85%" }}
            />
          </div>
        </div>
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">
            Avg Carbs
          </p>
          <div className="flex items-end gap-2">
            <h3
              className={twMerge(
                "text-3xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {averages.carbs}g
            </h3>
            <span className="text-xs text-gray-400 font-medium mb-1">
              per day
            </span>
          </div>
          <div
            className={twMerge(
              "w-full h-1.5 rounded-full mt-4",
              isDark ? "bg-blue-500/20" : "bg-blue-100",
            )}
          >
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-1">
            Avg Fat
          </p>
          <div className="flex items-end gap-2">
            <h3
              className={twMerge(
                "text-3xl font-geist font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {averages.fat}g
            </h3>
            <span className="text-xs text-gray-400 font-medium mb-1">
              per day
            </span>
          </div>
          <div
            className={twMerge(
              "w-full h-1.5 rounded-full mt-4",
              isDark ? "bg-green-500/20" : "bg-green-100",
            )}
          >
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "45%" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
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
            <div className="flex gap-2">
              <button
                className={twMerge(
                  "p-2 rounded-xl transition-colors",
                  isDark
                    ? "hover:bg-gray-800 text-gray-400"
                    : "hover:bg-gray-100 text-gray-600",
                )}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className={twMerge(
                  "p-2 rounded-xl transition-colors",
                  isDark
                    ? "hover:bg-gray-800 text-gray-400"
                    : "hover:bg-gray-100 text-gray-600",
                )}
              >
                <ChevronRight size={18} />
              </button>
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
                    Calories
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Macros (P/C/F)
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody
                className={twMerge(
                  "divide-y",
                  isDark ? "divide-gray-800" : "divide-gray-50",
                )}
              >
                {MOCK_NUTRITION_DATA.map((day) => (
                  <tr
                    key={day.date}
                    onClick={() => setSelectedDay(day)}
                    className={twMerge(
                      "group cursor-pointer transition-colors",
                      selectedDay.date === day.date
                        ? isDark
                          ? "bg-[#265F6B]/20"
                          : "bg-[#265F6B]/5"
                        : isDark
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-50/50",
                    )}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={twMerge(
                            "w-2 h-2 rounded-full",
                            day.calories > 2000
                              ? "bg-[#265F6B]"
                              : "bg-green-400",
                          )}
                        />
                        <span
                          className={twMerge(
                            "text-sm font-bold",
                            isDark ? "text-white" : "text-gray-900",
                          )}
                        >
                          {day.date}
                        </span>
                      </div>
                    </td>
                    <td
                      className={twMerge(
                        "px-6 py-4 text-sm font-geist font-medium",
                        isDark ? "text-gray-400" : "text-gray-600",
                      )}
                    >
                      {day.calories} kcal
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={twMerge(
                            "text-xs font-bold px-2 py-0.5 rounded-md",
                            isDark
                              ? "text-white bg-[#265F6B]/20"
                              : "text-[#265F6B] bg-[#265F6B]/10",
                          )}
                        >
                          {day.protein}g
                        </span>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {day.carbs}g
                        </span>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                          {day.fat}g
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className={twMerge(
                          "text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity",
                          isDark ? "text-white" : "text-[#265F6B]",
                        )}
                      >
                        VIEW DETAILS
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Day Details */}
        <div className="space-y-4">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Daily Breakdown
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
                  Selected Date
                </p>
                <h4
                  className={twMerge(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  {selectedDay.date}
                </h4>
              </div>
              <div
                className={twMerge(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  isDark
                    ? "bg-[#265F6B]/20 text-[#265F6B]"
                    : "bg-[#265F6B]/10 text-[#265F6B]",
                )}
              >
                <Utensils size={24} />
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
                Interpreted Meals
              </h5>
              {selectedDay.meals.map((meal, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className={twMerge(
                      "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                      isDark
                        ? "bg-[#265F6B]/20 text-white"
                        : "bg-[#265F6B]/10 text-[#265F6B]",
                    )}
                  >
                    {idx + 1}
                  </div>
                  <p
                    className={twMerge(
                      "text-sm font-medium",
                      isDark ? "text-gray-300" : "text-gray-700",
                    )}
                  >
                    {meal}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={twMerge(
                "pt-4 border-t",
                isDark ? "border-gray-800" : "border-gray-50",
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <Info size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold text-blue-600 uppercase">
                  Provider Note
                </span>
              </div>
              <p
                className={twMerge(
                  "text-xs leading-relaxed italic",
                  isDark ? "text-gray-400" : "text-gray-500",
                )}
              >
                "Great protein intake today, Sarah! Keep up the focus on lean
                meats like the baked cod."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
