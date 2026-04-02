import React from "react";
import { Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function AddDevicePlaceholder({ isDark, onClick }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-3xl border-2 border-dashed p-6 flex flex-col items-center justify-center gap-4 group hover:border-[#265F6B]/50 transition-all",
        isDark
          ? "bg-[#1A1F2E]/50 border-gray-700 hover:bg-[#265F6B]/10"
          : "bg-gray-50 border-gray-200 hover:bg-[#265F6B]/5",
      )}
    >
      <div
        className={twMerge(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-sm",
          isDark
            ? "bg-[#1A1F2E] text-gray-500 group-hover:text-[#265F6B]"
            : "bg-white text-[#64707D] group-hover:text-[#265F6B]",
        )}
      >
        <Plus size={28} />
      </div>
      <div className="text-center">
        <h3
          className={twMerge(
            "text-sm font-bold",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Connect New Device
        </h3>
        <p
          className={twMerge(
            "text-xs font-medium",
            isDark ? "text-gray-400" : "text-[#64707D]",
          )}
        >
          Smart scales, glucose monitors & more
        </p>
      </div>
    </button>
  );
}
