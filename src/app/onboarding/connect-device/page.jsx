import React, { useState } from "react";
import { Watch, Apple, Smartphone, ChevronRight, Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

const DEVICE_MANUFACTURERS = [
  {
    id: "apple",
    name: "Apple",
    icon: Apple,
  },
  {
    id: "fitbit",
    name: "Fitbit",
    icon: Watch,
  },
  {
    id: "garmin",
    name: "Garmin",
    icon: Watch,
  },
  {
    id: "samsung",
    name: "Samsung",
    icon: Smartphone,
  },
];

const DEVICE_MODELS = {
  apple: [
    { id: "apple-watch-ultra", name: "Apple Watch Ultra" },
    { id: "apple-watch-series-9", name: "Apple Watch Series 9" },
    { id: "apple-watch-se", name: "Apple Watch SE" },
  ],
  fitbit: [
    { id: "fitbit-sense-2", name: "Fitbit Sense 2" },
    { id: "fitbit-versa-4", name: "Fitbit Versa 4" },
  ],
  garmin: [
    { id: "garmin-fenix-7", name: "Garmin Fenix 7" },
    { id: "garmin-forerunner-965", name: "Garmin Forerunner 965" },
  ],
  samsung: [
    { id: "galaxy-watch-6", name: "Galaxy Watch 6" },
    { id: "galaxy-fit-3", name: "Galaxy Fit 3" },
  ],
};

export default function ConnectDevicePage() {
  const [step, setStep] = useState("manufacturer"); // "manufacturer" | "model" | "login"
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [appleEmail, setAppleEmail] = useState("");
  const [applePassword, setApplePassword] = useState("");

  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setStep("model");
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    if (selectedManufacturer.id === "apple") {
      setStep("login");
    }
  };

  const handleConnectDevice = () => {
    // Store in localStorage so Device Hub can display it
    localStorage.setItem(
      "newlyConnectedDevice",
      JSON.stringify({
        manufacturer: selectedManufacturer.name,
        model: selectedModel.name,
        timestamp: Date.now(),
      }),
    );

    // Smooth transition to Device Hub
    window.location.href = "/device-hub";
  };

  const handleDoLater = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#265F6B] via-[#1e4a54] to-[#0A0E1A] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's get your devices connected
          </h1>
          <p className="text-lg text-white/70 font-medium">
            Connect your health devices to sync data automatically
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div
              className={twMerge(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                step === "manufacturer"
                  ? "bg-[#265F6B] text-white"
                  : "bg-[#265F6B]/20 text-[#265F6B]",
              )}
            >
              {step !== "manufacturer" ? <Check size={16} /> : "1"}
            </div>
            <div className="w-12 h-0.5 bg-gray-200">
              <div
                className={twMerge(
                  "h-full bg-[#265F6B] transition-all duration-300",
                  step === "model" || step === "login" ? "w-full" : "w-0",
                )}
              />
            </div>
            <div
              className={twMerge(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                step === "model" || step === "login"
                  ? "bg-[#265F6B] text-white"
                  : "bg-gray-200 text-gray-400",
                step === "login" && "bg-[#265F6B]/20 text-[#265F6B]",
              )}
            >
              {step === "login" ? <Check size={16} /> : "2"}
            </div>
            <div className="w-12 h-0.5 bg-gray-200">
              <div
                className={twMerge(
                  "h-full bg-[#265F6B] transition-all duration-300",
                  step === "login" ? "w-full" : "w-0",
                )}
              />
            </div>
            <div
              className={twMerge(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                step === "login"
                  ? "bg-[#265F6B] text-white"
                  : "bg-gray-200 text-gray-400",
              )}
            >
              3
            </div>
          </div>

          {/* Manufacturer Selection */}
          {step === "manufacturer" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Select Device Brand
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DEVICE_MANUFACTURERS.map((manufacturer) => {
                  const Icon = manufacturer.icon;
                  return (
                    <button
                      key={manufacturer.id}
                      onClick={() => handleManufacturerSelect(manufacturer)}
                      className="p-6 border-2 border-gray-200 rounded-2xl hover:border-[#265F6B] hover:bg-[#265F6B]/5 transition-all group flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#265F6B]/10 flex items-center justify-center text-gray-600 group-hover:text-[#265F6B] transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="text-lg font-bold text-gray-700 group-hover:text-[#265F6B] transition-all flex-1 text-left">
                        {manufacturer.name}
                      </span>
                      <ChevronRight className="text-gray-300 group-hover:text-[#265F6B] transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Model Selection */}
          {step === "model" && selectedManufacturer && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => {
                    setStep("manufacturer");
                    setSelectedManufacturer(null);
                  }}
                  className="text-sm text-gray-500 hover:text-[#265F6B] font-medium"
                >
                  ← Back
                </button>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Select {selectedManufacturer.name} Device
              </h2>
              <div className="space-y-3">
                {DEVICE_MODELS[selectedManufacturer.id].map((model) => (
                  <button
                    key={model.id}
                    onClick={() => handleModelSelect(model)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-[#265F6B] hover:bg-[#265F6B]/5 transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg font-bold text-gray-700 group-hover:text-[#265F6B] transition-all">
                      {model.name}
                    </span>
                    <ChevronRight className="text-gray-300 group-hover:text-[#265F6B] transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Login Step (Apple only) */}
          {step === "login" && selectedManufacturer?.id === "apple" && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => {
                    setStep("model");
                    setSelectedModel(null);
                  }}
                  className="text-sm text-gray-500 hover:text-[#265F6B] font-medium"
                >
                  ← Back
                </button>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Apple size={32} className="text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Connect {selectedModel?.name}
                </h2>
                <p className="text-gray-600 font-medium">
                  Enter your Apple ID to authorize device access
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="apple-email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Apple ID
                  </label>
                  <input
                    id="apple-email"
                    type="email"
                    value={appleEmail}
                    onChange={(e) => setAppleEmail(e.target.value)}
                    placeholder="you@icloud.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#265F6B] focus:border-transparent font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="apple-password"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="apple-password"
                    type="password"
                    value={applePassword}
                    onChange={(e) => setApplePassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#265F6B] focus:border-transparent font-medium"
                  />
                </div>

                <button
                  onClick={handleConnectDevice}
                  disabled={!appleEmail || !applePassword}
                  className="w-full bg-[#265F6B] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#1e4a54] transition-all shadow-lg shadow-[#265F6B]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Connect Device
                </button>

                <p className="text-xs text-gray-500 text-center font-medium">
                  Your credentials are securely stored and never shared
                </p>
              </div>
            </div>
          )}

          {/* Do this later link */}
          <div className="mt-8 text-center">
            <button
              onClick={handleDoLater}
              className="text-sm text-gray-500 hover:text-[#265F6B] font-medium underline"
            >
              Do this later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
