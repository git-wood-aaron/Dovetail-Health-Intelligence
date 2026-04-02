import React from "react";
import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { SECURITY_OPTIONS } from "../../data/securityOptions";

export function SecuritySection({ isDark }) {
  return (
    <div className="space-y-6">
      <h3
        className={twMerge(
          "text-lg font-bricolage font-bold",
          isDark ? "text-white" : "text-gray-900",
        )}
      >
        Security
      </h3>
      <div
        className={twMerge(
          "p-4 rounded-[32px] border shadow-sm space-y-2",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
        )}
      >
        {SECURITY_OPTIONS.map((item, idx) => (
          <button
            key={idx}
            className={twMerge(
              "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-50",
            )}
          >
            <div className="flex items-center gap-4">
              <div
                className={twMerge(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  item.bg,
                  isDark ? item.colorDark : item.color,
                )}
              >
                <item.icon size={20} />
              </div>
              <span
                className={twMerge(
                  "text-sm font-bold",
                  isDark ? "text-gray-300" : "text-gray-700",
                )}
              >
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {item.status && (
                <span
                  className={twMerge(
                    "text-[10px] font-extrabold px-2 py-0.5 rounded-full",
                    item.status === "ON"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400",
                  )}
                >
                  {item.status}
                </span>
              )}
              <ChevronRight
                size={18}
                className={twMerge(
                  "transition-colors",
                  isDark
                    ? "text-gray-600 group-hover:text-[#265F6B]"
                    : "text-gray-300 group-hover:text-[#265F6B]",
                )}
              />
            </div>
          </button>
        ))}
      </div>

      <div
        className={twMerge(
          "p-6 rounded-[32px] border space-y-4",
          isDark
            ? "bg-red-500/10 border-red-500/30"
            : "bg-red-50 border-red-100",
        )}
      >
        <h4
          className={twMerge(
            "text-sm font-bold",
            isDark ? "text-red-400" : "text-red-900",
          )}
        >
          Data Deletion
        </h4>
        <p
          className={twMerge(
            "text-xs leading-relaxed font-medium",
            isDark ? "text-red-300" : "text-red-700",
          )}
        >
          Closing your account will permanently delete your health records and
          disconnect all synced devices.
        </p>
        <button
          className={twMerge(
            "w-full py-3 rounded-xl text-xs font-bold transition-colors",
            isDark
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-[#C11F1F] text-white hover:bg-[#A81919]",
          )}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
