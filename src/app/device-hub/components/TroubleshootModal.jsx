import React from "react";
import { X, AlertCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

const TROUBLESHOOT_STEPS = [
  "Swipe down from the top of your screen and make sure Location is toggled ON.",
  "Go to Settings > Apps > Fit Profile (or your device app).",
  "Tap Permissions and ensure Location is set to 'Allow all the time'.",
  "Tap the device to wake it up and check for the Bluetooth icon.",
];

export function TroubleshootModal({ isDark, deviceId, onClose, onSyncNow }) {
  const deviceName = deviceId === "ge-scale" ? "GE Scale" : "Garmin Watch";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
      <div
        className={twMerge(
          "rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300",
          isDark ? "bg-[#1A1F2E]" : "bg-white",
        )}
      >
        <div className="bg-[#265F6B] p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-2xl font-bricolage font-extrabold tracking-tight">
              Dovetail Sync Sentry
            </h3>
          </div>
          <p className="text-blue-100 font-medium leading-relaxed">
            I noticed your {deviceName} hasn't checked in with us lately.
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h4
              className={twMerge(
                "text-sm font-bold uppercase tracking-widest",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              30-Second Fix
            </h4>
            <div className="space-y-3">
              {TROUBLESHOOT_STEPS.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div
                    className={twMerge(
                      "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",
                      isDark
                        ? "bg-[#265F6B]/20 text-[#265F6B]"
                        : "bg-[#265F6B]/10 text-[#265F6B]",
                    )}
                  >
                    {idx + 1}
                  </div>
                  <p
                    className={twMerge(
                      "text-sm leading-relaxed font-medium",
                      isDark ? "text-gray-300" : "text-gray-600",
                    )}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                onSyncNow(deviceId);
                onClose();
              }}
              className="flex-1 py-4 bg-[#265F6B] text-white rounded-2xl font-bold text-sm hover:bg-[#1e4a54] transition-all"
            >
              I've Done This (Sync Now)
            </button>
            <button
              onClick={onClose}
              className={twMerge(
                "flex-1 py-4 rounded-2xl font-bold text-sm transition-all",
                isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              Remind Me Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
