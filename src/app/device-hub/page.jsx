import React, { useState } from "react";
import { Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../layout";
import { useDevices } from "./hooks/useDevices";
import { useConnectionModal } from "./hooks/useConnectionModal";
import { useAccountSettings } from "./hooks/useAccountSettings";
import { DeviceCard } from "./components/DeviceCard";
import { AddDevicePlaceholder } from "./components/AddDevicePlaceholder";
import { ConnectionModal } from "./components/ConnectionModal/ConnectionModal";
import { TroubleshootModal } from "./components/TroubleshootModal";
import { AccountSettings } from "./components/AccountSettings/AccountSettings";

export default function DeviceHubPage() {
  const { devices, toggleStatus } = useDevices();
  const [showTroubleshoot, setShowTroubleshoot] = useState(null);
  const { isDark } = useTheme();

  const {
    showConnectionModal,
    connectionStep,
    selectedManufacturer,
    selectedModel,
    appleEmail,
    applePassword,
    setAppleEmail,
    setApplePassword,
    openConnectionModal,
    closeConnectionModal,
    selectManufacturer,
    selectModel,
    backToManufacturer,
    handleAppleLogin,
  } = useConnectionModal();

  const { isEditing, setIsEditing, formData, setFormData } =
    useAccountSettings();

  return (
    <div className="space-y-8 pb-12">
      {/* Device Hub Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className={twMerge(
              "text-3xl font-bricolage font-extrabold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            Device Hub & Account
          </h2>
          <p
            className={twMerge(
              "font-medium",
              isDark ? "text-gray-400" : "text-[#64707D]",
            )}
          >
            Manage your wearables, smart health hardware, and account settings
          </p>
        </div>
        <button
          onClick={openConnectionModal}
          className="flex items-center justify-center gap-2 bg-[#265F6B] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#1e4a54] transition-all shadow-md shadow-[#265F6B]/20"
        >
          <Plus size={20} />
          Add New Device
        </button>
      </div>

      {/* Device Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            isDark={isDark}
            onToggleStatus={toggleStatus}
            onTroubleshoot={setShowTroubleshoot}
          />
        ))}

        <AddDevicePlaceholder isDark={isDark} onClick={openConnectionModal} />
      </div>

      {/* Connection Modal */}
      {showConnectionModal && (
        <ConnectionModal
          isDark={isDark}
          connectionStep={connectionStep}
          selectedManufacturer={selectedManufacturer}
          selectedModel={selectedModel}
          appleEmail={appleEmail}
          applePassword={applePassword}
          onClose={closeConnectionModal}
          onBack={backToManufacturer}
          onSelectManufacturer={selectManufacturer}
          onSelectModel={selectModel}
          onEmailChange={setAppleEmail}
          onPasswordChange={setApplePassword}
          onSubmit={handleAppleLogin}
        />
      )}

      {/* Account Settings */}
      <AccountSettings
        isDark={isDark}
        isEditing={isEditing}
        formData={formData}
        onToggleEdit={() => setIsEditing(!isEditing)}
        onFormDataChange={setFormData}
      />

      {/* Troubleshooting Modal */}
      {showTroubleshoot && (
        <TroubleshootModal
          isDark={isDark}
          deviceId={showTroubleshoot}
          onClose={() => setShowTroubleshoot(null)}
          onSyncNow={toggleStatus}
        />
      )}
    </div>
  );
}
