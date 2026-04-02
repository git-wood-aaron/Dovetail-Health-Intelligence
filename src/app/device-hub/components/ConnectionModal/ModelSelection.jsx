import React from "react";
import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { DEVICE_MODELS } from "../../data/deviceManufacturers";

export function ModelSelection({ isDark, manufacturer, onSelect }) {
  const models = DEVICE_MODELS[manufacturer.id] || [];

  return (
    <div className="space-y-3">
      {models.map((model) => (
        <button
          key={model.id}
          onClick={() => onSelect(model)}
          className={twMerge(
            "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all group",
            isDark
              ? "bg-[#0A0E1A] border-gray-800 hover:border-[#265F6B] hover:bg-[#265F6B]/10"
              : "bg-gray-50 border-gray-200 hover:border-[#265F6B] hover:bg-[#265F6B]/5",
          )}
        >
          <span
            className={twMerge(
              "text-base font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {model.name}
          </span>
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
