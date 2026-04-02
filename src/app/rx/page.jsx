import React from "react";
import { Pill, MapPin, Search, ChevronRight, Plus, Info } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

export default function RxPage() {
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
            Prescriptions
          </h2>
          <p
            className={twMerge(
              "font-medium",
              isDark ? "text-gray-400" : "text-gray-500",
            )}
          >
            Manage your medications and preferred pharmacy
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#265F6B] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#1e4a54] transition-all shadow-md shadow-[#265F6B]/20">
          <Plus size={20} />
          Transfer Rx
        </button>
      </div>

      {/* Empty State */}
      <div
        className={twMerge(
          "rounded-[40px] border shadow-sm p-12 flex flex-col items-center justify-center text-center space-y-6",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
        )}
      >
        <div
          className={twMerge(
            "w-24 h-24 rounded-3xl flex items-center justify-center relative",
            isDark
              ? "bg-[#265F6B]/20 text-[#265F6B]"
              : "bg-[#265F6B]/10 text-[#265F6B]",
          )}
        >
          <Pill size={48} />
          <div
            className={twMerge(
              "absolute -top-2 -right-2 w-8 h-8 rounded-full border flex items-center justify-center",
              isDark
                ? "bg-[#1A1F2E] border-gray-700 text-gray-400"
                : "bg-white border-gray-100 text-gray-300",
            )}
          >
            <Search size={16} />
          </div>
        </div>
        <div className="max-w-md space-y-2">
          <h3
            className={twMerge(
              "text-xl font-bricolage font-extrabold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            No Prescriptions Yet
          </h3>
          <p
            className={twMerge(
              "text-sm font-medium leading-relaxed",
              isDark ? "text-gray-400" : "text-gray-500",
            )}
          >
            Your provider hasn't prescribed any medications yet. Once an Rx is
            issued, it will appear here for management and refills.
          </p>
        </div>
        <div
          className={twMerge(
            "p-4 rounded-2xl border flex items-center gap-3",
            isDark
              ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
              : "bg-blue-50/50 border-blue-100 text-blue-600",
          )}
        >
          <Info size={18} />
          <p className="text-xs font-bold uppercase tracking-wider">
            Dovetail Tip: Complete your lab work to help your provider assess
            your needs.
          </p>
        </div>
      </div>

      {/* Pharmacy Selection */}
      <div className="space-y-4">
        <h3
          className={twMerge(
            "text-lg font-bricolage font-bold",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          Preferred Pharmacy
        </h3>
        <div
          className={twMerge(
            "p-6 rounded-3xl border shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#265F6B]/50 transition-all",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-100",
          )}
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
              <MapPin size={28} />
            </div>
            <div>
              <h4
                className={twMerge(
                  "text-lg font-bold",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                CVS Pharmacy #08422
              </h4>
              <p
                className={twMerge(
                  "text-sm font-medium mt-0.5",
                  isDark ? "text-gray-400" : "text-gray-500",
                )}
              >
                123 Health Way, San Francisco, CA 94105
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full uppercase">
                  Open Now
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  (415) 555-0123
                </span>
              </div>
            </div>
          </div>
          <button
            className={twMerge(
              "flex items-center gap-2 font-bold text-sm px-4 py-2 rounded-xl transition-colors",
              isDark
                ? "text-white bg-[#265F6B]/20 hover:bg-[#265F6B]/30"
                : "text-[#265F6B] bg-[#265F6B]/10 hover:bg-[#265F6B]/20",
            )}
          >
            Change
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
