import React from "react";
import { X, ChevronLeft } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ManufacturerSelection } from "./ManufacturerSelection";
import { ModelSelection } from "./ModelSelection";
import { AppleLoginForm } from "./AppleLoginForm";

export function ConnectionModal({
  isDark,
  connectionStep,
  selectedManufacturer,
  selectedModel,
  appleEmail,
  applePassword,
  onClose,
  onBack,
  onSelectManufacturer,
  onSelectModel,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) {
  const getTitle = () => {
    if (connectionStep === "manufacturer") return "Select Manufacturer";
    if (connectionStep === "model")
      return `Select ${selectedManufacturer?.name} Model`;
    if (connectionStep === "login") return "Connect to Apple";
    return "";
  };

  const getDescription = () => {
    if (connectionStep === "manufacturer")
      return "Choose your device manufacturer to get started";
    if (connectionStep === "model")
      return "Pick the specific model you want to connect";
    if (connectionStep === "login")
      return "Sign in with your Apple ID to sync your health data";
    return "";
  };

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
          {connectionStep === "model" && (
            <button
              onClick={onBack}
              className="absolute top-4 left-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <h3 className="text-2xl font-bricolage font-extrabold tracking-tight">
            {getTitle()}
          </h3>
          <p className="text-blue-100 font-medium leading-relaxed mt-2">
            {getDescription()}
          </p>
        </div>

        <div className="p-8">
          {connectionStep === "manufacturer" && (
            <ManufacturerSelection
              isDark={isDark}
              onSelect={onSelectManufacturer}
            />
          )}

          {connectionStep === "model" && selectedManufacturer && (
            <ModelSelection
              isDark={isDark}
              manufacturer={selectedManufacturer}
              onSelect={onSelectModel}
            />
          )}

          {connectionStep === "login" &&
            selectedManufacturer?.id === "apple" && (
              <AppleLoginForm
                isDark={isDark}
                selectedModel={selectedModel}
                email={appleEmail}
                password={applePassword}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onSubmit={onSubmit}
                onBack={onBack}
              />
            )}
        </div>
      </div>
    </div>
  );
}
