import React, { useState } from "react";
import {
  User,
  MapPin,
  CreditCard,
  Lock,
  ShieldCheck,
  ChevronRight,
  Save,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: "123 Health Way, San Francisco, CA 94105",
    billing: "Visa ending in 4242",
    email: "sarah.johnson@example.com",
  });
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
            Account
          </h2>
          <p
            className={twMerge(
              "font-medium",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Manage your personal information and security
          </p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={twMerge(
            "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-md",
            isEditing
              ? "bg-green-500 text-white hover:bg-green-600 shadow-green-100"
              : isDark
                ? "bg-[#1A1F2E] text-white border border-gray-700 hover:border-[#265F6B]"
                : "bg-white text-gray-900 border border-gray-100 hover:border-[#265F6B]/50",
          )}
        >
          {isEditing ? <Save size={20} /> : <User size={20} />}
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Personal & Address */}
        <div className="lg:col-span-2 space-y-6">
          <div
            className={twMerge(
              "rounded-[40px] border shadow-sm overflow-hidden",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div
              className={twMerge(
                "p-8 flex items-center gap-6",
                isDark ? "bg-[#265F6B]/20" : "bg-[#265F6B]/10",
              )}
            >
              <div
                className={twMerge(
                  "w-20 h-20 rounded-3xl p-1 border shadow-sm relative",
                  isDark
                    ? "bg-[#1A1F2E] border-[#265F6B]/30"
                    : "bg-white border-[#265F6B]/20",
                )}
              >
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white flex items-center justify-center text-white">
                  <ShieldCheck size={14} />
                </div>
              </div>
              <div>
                <h3
                  className={twMerge(
                    "text-2xl font-bricolage font-extrabold",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  Sarah Johnson
                </h3>
                <p className="text-[#265F6B] font-bold text-xs uppercase tracking-widest mt-1">
                  Verified Patient
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    className={twMerge(
                      "text-[10px] font-bold uppercase tracking-widest px-1",
                      isDark ? "text-gray-400" : "text-[#64707D]",
                    )}
                  >
                    Full Name (System Only)
                  </label>
                  <div
                    className={twMerge(
                      "w-full px-4 py-3.5 border rounded-2xl font-bold text-sm",
                      isDark
                        ? "bg-[#0A0E1A] border-gray-800 text-gray-400"
                        : "bg-gray-50 border-gray-100 text-[#64707D]",
                    )}
                  >
                    Sarah Johnson
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className={twMerge(
                      "text-[10px] font-bold uppercase tracking-widest px-1",
                      isDark ? "text-gray-400" : "text-[#64707D]",
                    )}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    disabled={!isEditing}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={twMerge(
                      "w-full px-4 py-3.5 border rounded-2xl font-bold text-sm focus:ring-2 focus:ring-[#265F6B]/20 focus:border-[#265F6B] transition-all",
                      isDark
                        ? isEditing
                          ? "bg-[#1A1F2E] border-gray-700 text-white"
                          : "bg-[#0A0E1A] border-gray-800 text-gray-400"
                        : isEditing
                          ? "bg-white border-gray-100 text-gray-900"
                          : "bg-gray-50 border-gray-100 text-[#64707D]",
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className={twMerge(
                    "text-[10px] font-bold uppercase tracking-widest px-1",
                    isDark ? "text-gray-400" : "text-[#64707D]",
                  )}
                >
                  Residential Address
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className={twMerge(
                      isDark ? "text-gray-400" : "text-[#64707D]",
                      "absolute left-4 top-1/2 -translate-y-1/2",
                    )}
                  />
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className={twMerge(
                      "w-full pl-12 pr-4 py-3.5 border rounded-2xl font-bold text-sm focus:ring-2 focus:ring-[#265F6B]/20 focus:border-[#265F6B] transition-all",
                      isDark
                        ? isEditing
                          ? "bg-[#1A1F2E] border-gray-700 text-white"
                          : "bg-[#0A0E1A] border-gray-800 text-gray-400"
                        : isEditing
                          ? "bg-white border-gray-100 text-gray-900"
                          : "bg-gray-50 border-gray-100 text-[#64707D]",
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className={twMerge(
                    "text-[10px] font-bold uppercase tracking-widest px-1",
                    isDark ? "text-gray-400" : "text-[#64707D]",
                  )}
                >
                  Default Billing
                </label>
                <div className="relative">
                  <CreditCard
                    size={18}
                    className={twMerge(
                      isDark ? "text-gray-400" : "text-[#64707D]",
                      "absolute left-4 top-1/2 -translate-y-1/2",
                    )}
                  />
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData.billing}
                    onChange={(e) =>
                      setFormData({ ...formData, billing: e.target.value })
                    }
                    className={twMerge(
                      "w-full pl-12 pr-4 py-3.5 border rounded-2xl font-bold text-sm focus:ring-2 focus:ring-[#265F6B]/20 focus:border-[#265F6B] transition-all",
                      isDark
                        ? isEditing
                          ? "bg-[#1A1F2E] border-gray-700 text-white"
                          : "bg-[#0A0E1A] border-gray-800 text-gray-400"
                        : isEditing
                          ? "bg-white border-gray-100 text-gray-900"
                          : "bg-gray-50 border-gray-100 text-[#64707D]",
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Security & Others */}
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
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            {[
              {
                label: "Reset Password",
                icon: Lock,
                color: isDark ? "text-blue-500" : "text-[#0A56D1]",
                bg: "bg-blue-50",
              },
              {
                label: "Two-Factor Auth",
                icon: ShieldCheck,
                color: "text-green-500",
                bg: "bg-green-50",
                status: "ON",
              },
              {
                label: "Biometric Login",
                icon: User,
                color: "text-purple-500",
                bg: "bg-purple-50",
                status: "OFF",
              },
            ].map((item, idx) => (
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
                      item.color,
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
              Closing your account will permanently delete your health records
              and disconnect all synced devices.
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
      </div>
    </div>
  );
}
