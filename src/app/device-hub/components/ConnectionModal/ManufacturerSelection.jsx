import React from "react";
import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { DEVICE_MANUFACTURERS } from "../../data/deviceManufacturers";

export function ManufacturerSelection({ isDark, onSelect }) {
  return (
    <div className="space-y-3">
      {DEVICE_MANUFACTURERS.map((manufacturer) => (
        <button
          key={manufacturer.id}
          onClick={() => onSelect(manufacturer)}
          className={twMerge(
            "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all group",
            isDark
              ? "bg-[#0A0E1A] border-gray-800 hover:border-[#265F6B] hover:bg-[#265F6B]/10"
              : "bg-gray-50 border-gray-200 hover:border-[#265F6B] hover:bg-[#265F6B]/5",
          )}
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">{manufacturer.logo}</span>
            <span
              className={twMerge(
                "text-lg font-bold",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {manufacturer.name}
            </span>
          </div>
          <ChevronRight
            size={20}
            className={twMerge(
              "transition-colors",
              isDark
                ? "text-gray-600 group-hover:text-[#265F6B]"
                : "text-gray-300 group-hover:text-[#265F6B]",
            )}
          />
        </button>
      ))}
    </div>
  );
}
