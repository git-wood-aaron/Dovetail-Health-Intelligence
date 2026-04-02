import React from "react";
import {
  MoreVertical,
  Wifi,
  WifiOff,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function DeviceCard({ device, isDark, onToggleStatus, onTroubleshoot }) {
  return (
    <div
      className={twMerge(
        "rounded-3xl border shadow-sm p-6 flex flex-col group hover:border-[#265F6B]/50 transition-all",
        isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={twMerge(
            "w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm",
            device.status === "online"
              ? isDark
                ? "bg-[#265F6B]/20 text-[#265F6B]"
                : "bg-[#265F6B]/10 text-[#265F6B]"
              : isDark
                ? "bg-gray-800 text-gray-500"
                : "bg-gray-100 text-[#64707D]",
          )}
        >
          <device.icon size={28} />
        </div>
        <button
          className={twMerge(
            "p-1 transition-colors",
            isDark
              ? "text-gray-600 hover:text-gray-400"
              : "text-gray-300 hover:text-gray-600",
          )}
        >
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-1 mb-6">
        <div className="flex items-center gap-2">
          <h3
            className={twMerge(
              "text-lg font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {device.name}
          </h3>
          <span
            className={twMerge(
              "w-2 h-2 rounded-full animate-pulse",
              device.status === "online" ? "bg-green-500" : "bg-red-500",
            )}
          />
        </div>
        <p
          className={twMerge(
            "text-xs font-medium uppercase tracking-widest",
            isDark ? "text-gray-400" : "text-[#64707D]",
          )}
        >
          {device.brand}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className={twMerge(
            "p-3 rounded-xl border",
            isDark
              ? "bg-[#0A0E1A] border-gray-800"
              : "bg-gray-50 border-gray-100",
          )}
        >
          <p
            className={twMerge(
              "text-[10px] font-bold uppercase mb-1",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Status
          </p>
          <div className="flex items-center gap-1.5">
            {device.status === "online" ? (
              <Wifi size={12} className="text-green-500" />
            ) : (
              <WifiOff size={12} className="text-red-500" />
            )}
            <span
              className={twMerge(
                "text-xs font-bold",
                device.status === "online"
                  ? isDark
                    ? "text-green-600"
                    : "text-[#137136]"
                  : isDark
                    ? "text-red-600"
                    : "text-[#C11F1F]",
              )}
            >
              {device.status === "online" ? "CONNECTED" : "DISCONNECTED"}
            </span>
          </div>
        </div>
        <div
          className={twMerge(
            "p-3 rounded-xl border",
            isDark
              ? "bg-[#0A0E1A] border-gray-800"
              : "bg-gray-50 border-gray-100",
          )}
        >
          <p
            className={twMerge(
              "text-[10px] font-bold uppercase mb-1",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Last Sync
          </p>
          <p
            className={twMerge(
              "text-xs font-bold",
              isDark ? "text-gray-300" : "text-gray-700",
            )}
          >
            {device.lastSync}
          </p>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        {device.status === "offline" && (
          <button
            onClick={() => onTroubleshoot(device.id)}
            className={twMerge(
              "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-colors",
              isDark
                ? "bg-red-50 text-red-600 hover:bg-red-100"
                : "bg-red-50 text-[#C11F1F] hover:bg-red-100",
            )}
          >
            <AlertCircle size={14} />
            Troubleshoot Sync
          </button>
        )}
        <button
          onClick={() => onToggleStatus(device.id)}
          className={twMerge(
            "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-colors",
            isDark
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-900 text-white hover:bg-gray-800",
          )}
        >
          <RefreshCw size={14} />
          Force Refresh
        </button>
      </div>
    </div>
  );
}
