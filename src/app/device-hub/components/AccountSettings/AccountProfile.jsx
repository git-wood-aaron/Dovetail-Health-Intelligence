import React from "react";
import { MapPin, CreditCard, ShieldCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function AccountProfile({
  isDark,
  isEditing,
  formData,
  onFormDataChange,
}) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div
        className={twMerge(
          "rounded-[40px] border shadow-sm overflow-hidden",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
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
                  onFormDataChange({ ...formData, email: e.target.value })
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
                  onFormDataChange({ ...formData, address: e.target.value })
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
                  onFormDataChange({ ...formData, billing: e.target.value })
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
  );
}
