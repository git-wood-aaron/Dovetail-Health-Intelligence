import React from "react";
import { Save, User } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { AccountProfile } from "./AccountProfile";
import { SecuritySection } from "./SecuritySection";

export function AccountSettings({
  isDark,
  isEditing,
  formData,
  onToggleEdit,
  onFormDataChange,
}) {
  return (
    <>
      <div
        className={twMerge(
          "border-t pt-8",
          isDark ? "border-gray-800" : "border-gray-100",
        )}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className={twMerge(
              "text-3xl font-bricolage font-extrabold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Account Settings
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
          onClick={onToggleEdit}
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
        <AccountProfile
          isDark={isDark}
          isEditing={isEditing}
          formData={formData}
          onFormDataChange={onFormDataChange}
        />
        <SecuritySection isDark={isDark} />
      </div>
    </>
  );
}
