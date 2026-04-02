import React from "react";
import {
  Calendar,
  Video,
  Clock,
  MapPin,
  MoreVertical,
  Plus,
  ChevronRight,
  Beaker,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

export default function AppointmentsPage() {
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
            Appointments
          </h2>
          <p
            className={twMerge(
              "font-medium",
              isDark ? "text-gray-400" : "text-gray-500",
            )}
          >
            Manage your consultations and follow-ups
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#265F6B] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#1e4a54] transition-all shadow-md shadow-[#265F6B]/20">
          <Plus size={20} />
          Book Appointment
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Upcoming & Past */}
        <div className="lg:col-span-2 space-y-6">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Upcoming Session
          </h3>

          <div className="bg-gradient-to-br from-[#265F6B] to-[#1e4a54] rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#265F6B]/20 rounded-full blur-2xl -ml-10 -mb-10" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md p-1 border border-white/30">
                    <img
                      src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Doctor"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Dr. Emily Rivera</h4>
                    <p className="text-blue-100 text-sm font-medium">
                      Obesity & Metabolic Specialist
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">
                      Date
                    </p>
                    <p className="font-bold">Feb 24, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">
                      Time
                    </p>
                    <p className="font-bold">10:30 AM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Video size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">
                      Type
                    </p>
                    <p className="font-bold">Video Consult</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-white text-[#265F6B] px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  <Video size={18} />
                  Join Session Now
                </button>
                <button className="flex-1 bg-[#1e4a54]/50 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
                  Reschedule
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3
              className={twMerge(
                "text-lg font-bricolage font-bold mb-4",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              Past Sessions
            </h3>
            <div className="space-y-3">
              {[
                {
                  dr: "Dr. Emily Rivera",
                  date: "Jan 12, 2026",
                  type: "Follow-up",
                  result: "Notes Available",
                },
                {
                  dr: "Dr. Emily Rivera",
                  date: "Dec 05, 2025",
                  type: "Initial Consult",
                  result: "Completed",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={twMerge(
                    "p-4 rounded-2xl border flex items-center justify-between group hover:border-[#265F6B]/50 transition-all",
                    isDark
                      ? "bg-[#1A1F2E] border-gray-800"
                      : "bg-white border-gray-100",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={twMerge(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        isDark
                          ? "bg-gray-800 text-gray-500"
                          : "bg-gray-50 text-gray-400",
                      )}
                    >
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h4
                        className={twMerge(
                          "text-sm font-bold",
                          isDark ? "text-white" : "text-gray-900",
                        )}
                      >
                        {s.dr}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        {s.date} • {s.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full uppercase">
                      {s.result}
                    </span>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Prep & Info */}
        <div className="space-y-6">
          <h3
            className={twMerge(
              "text-lg font-bricolage font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Session Prep
          </h3>
          <div
            className={twMerge(
              "p-6 rounded-3xl border shadow-sm space-y-6",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h5
                    className={twMerge(
                      "text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    Check-in Early
                  </h5>
                  <p
                    className={twMerge(
                      "text-xs mt-0.5",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Please join the call 5 minutes before the start time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                  <Beaker size={16} />
                </div>
                <div>
                  <h5
                    className={twMerge(
                      "text-sm font-bold",
                      isDark ? "text-white" : "text-gray-900",
                    )}
                  >
                    Latest Labs
                  </h5>
                  <p
                    className={twMerge(
                      "text-xs mt-0.5",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Dr. Rivera will review your Feb 20th HbA1c results.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={twMerge(
                "p-4 rounded-2xl border",
                isDark
                  ? "bg-[#265F6B]/10 border-[#265F6B]/30"
                  : "bg-[#265F6B]/5 border-[#265F6B]/20",
              )}
            >
              <h5 className="text-xs font-bold text-[#265F6B] uppercase tracking-wider mb-2">
                Patient Dashboard
              </h5>
              <p
                className={twMerge(
                  "text-xs leading-relaxed",
                  isDark ? "text-gray-400" : "text-gray-600",
                )}
              >
                Your provider has full access to your Dovetail Scribe
                interpretations. No need to bring physical records.
              </p>
            </div>

            <button
              className={twMerge(
                "w-full py-4 rounded-2xl font-bold text-sm transition-all",
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-800",
              )}
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
