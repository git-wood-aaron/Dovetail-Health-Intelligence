import React from "react";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function AppleLoginForm({
  isDark,
  selectedModel,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onBack,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="text-center py-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
          <span className="text-5xl">🍎</span>
        </div>
        <h4
          className={twMerge(
            "text-lg font-bold",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          {selectedModel?.name}
        </h4>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            className={twMerge(
              "text-xs font-bold uppercase tracking-widest",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Apple ID
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            required
            className={twMerge(
              "w-full px-4 py-3.5 border rounded-2xl font-medium text-sm focus:ring-2 focus:ring-[#265F6B]/20 focus:border-[#265F6B] transition-all",
              isDark
                ? "bg-[#0A0E1A] border-gray-800 text-white placeholder:text-gray-400"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-[#64707D]",
            )}
          />
        </div>

        <div className="space-y-2">
          <label
            className={twMerge(
              "text-xs font-bold uppercase tracking-widest",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="••••••••"
            required
            className={twMerge(
              "w-full px-4 py-3.5 border rounded-2xl font-medium text-sm focus:ring-2 focus:ring-[#265F6B]/20 focus:border-[#265F6B] transition-all",
              isDark
                ? "bg-[#0A0E1A] border-gray-800 text-white placeholder:text-gray-400"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-[#64707D]",
            )}
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className={twMerge(
            "flex-1 py-4 rounded-2xl font-bold text-sm transition-all",
            isDark
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200",
          )}
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 py-4 bg-[#265F6B] text-white rounded-2xl font-bold text-sm hover:bg-[#1e4a54] transition-all flex items-center justify-center gap-2"
        >
          <Check size={18} />
          Connect Device
        </button>
      </div>
    </form>
  );
}
