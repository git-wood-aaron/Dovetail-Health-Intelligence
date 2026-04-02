import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  Image as ImageIcon,
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronRight,
  Database,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "./layout";

const INITIAL_MESSAGES = [
  {
    id: "1",
    role: "ai",
    content:
      "I'm Dovetail Scribe, your AI assistant. You can upload labs, food photos, or data exports here. I'll organize and add the data to Dovetail.",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const DIETICIAN_MESSAGES = [
  {
    id: "1",
    role: "human",
    content:
      "Hi Sarah! I'm Jenny Colman, the Dietician assigned to you. Welcome!",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("scribe"); // "scribe" or "dietician"
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [dieticianMessages, setDieticianMessages] =
    useState(DIETICIAN_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSimulateDropdown, setShowSimulateDropdown] = useState(false);
  const { isDark } = useTheme();
  const scrollRef = useRef(null);
  const attachInputRef = useRef(null);
  const foodInputRef = useRef(null);
  const labInputRef = useRef(null);
  const deviceInputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, dieticianMessages, isProcessing, activeTab]);

  const addMessage = (role, content, type = "text", metadata = null) => {
    const newMessage = {
      id: Date.now().toString(),
      role,
      content,
      type,
      metadata,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    if (activeTab === "scribe") {
      setMessages((prev) => [...prev, newMessage]);
    } else {
      setDieticianMessages((prev) => [...prev, newMessage]);
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMsg = inputValue;
    setInputValue("");
    addMessage("user", userMsg);

    setTimeout(() => {
      if (activeTab === "scribe") {
        addMessage(
          "ai",
          "I'm listening. Feel free to upload any data or photos you'd like me to scribe for you.",
        );
      } else {
        addMessage(
          "human",
          "Thanks for reaching out! I'm here to help with your nutrition goals.",
        );
      }
    }, 1000);
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.type.startsWith("image/") ? "image" : "file";

    if (fileType === "image") {
      const imageUrl = URL.createObjectURL(file);
      addMessage("user", `Uploading ${file.name}`, "image", { imageUrl });
    } else {
      addMessage("user", `Uploading ${file.name}`, "file", {
        fileName: file.name,
      });
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      addMessage(
        "ai",
        `I've received your ${type} file. Let me process that for you...`,
      );
    }, 2000);
  };

  const simulateJourney = (journeyId) => {
    setShowSimulateDropdown(false);
    setIsProcessing(true);

    switch (journeyId) {
      case "labs":
        addMessage("user", "Uploading lab_results_feb20.pdf", "file", {
          fileName: "lab_results_feb20.pdf",
        });
        setTimeout(() => {
          setIsProcessing(false);
          addMessage(
            "ai",
            "I've pulled your labs from Feb 20th. I see your HbA1c is 5.8%. I noticed the 'Fasting Glucose' line is slightly blurry on page 2—was that 104 or 184?",
            "clarification",
            {
              options: ["104", "184"],
              suggestion: "Labs",
            },
          );
        }, 2000);
        break;
      case "food":
        addMessage("user", "Uploading dinner_photo.jpg", "image", {
          imageUrl:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
        });
        setTimeout(() => {
          setIsProcessing(false);
          addMessage(
            "ai",
            "Got it. Looks like a chicken souvlaki plate. Did you eat both pieces of the pita bread, and was there any dressing on the salad?",
            "clarification",
            {
              options: ["Only half pita", "Both pieces", "No pita"],
              suggestion: "Nutrition",
            },
          );
        }, 2000);
        break;
      case "sleep":
        addMessage("user", "Uploading sleep_export_feb.csv", "file", {
          fileName: "sleep_export_feb.csv",
        });
        setTimeout(() => {
          setIsProcessing(false);
          addMessage(
            "ai",
            "I've processed your sleep data from February. It looks like your 'Time Asleep' is being reported in seconds—I've converted that to hours and minutes for your Exercise/Sleep tab. Should I keep this conversion logic for future uploads?",
            "clarification",
            {
              options: ["Yes, please", "No, keep original"],
              suggestion: "Exercise",
            },
          );
        }, 2000);
        break;
      case "inbody":
        addMessage("user", "Uploading inbody_scan.jpg", "image", {
          imageUrl:
            "https://ucarecdn.com/818f32e8-755d-40db-8898-d625c1aff88b/-/format/auto/",
        });
        setTimeout(() => {
          setIsProcessing(false);
          addMessage(
            "ai",
            "Great progress! I've logged your Body Fat at 28% and your Muscle Mass at 72 lbs. I noticed this scan was taken at 6:00 PM—usually, these are most accurate in the morning. Should I tag this as an 'Evening Scan' for your provider?",
            "clarification",
            {
              options: ["Yes", "No"],
              suggestion: "Account/Vitals",
            },
          );
        }, 2000);
        break;
    }
  };

  const simulationOptions = [
    { id: "labs", label: "Lab Work PDF" },
    { id: "food", label: "Food Photo" },
    { id: "sleep", label: "Sleep CSV Export" },
    { id: "inbody", label: "InBody Scan" },
  ];

  const currentMessages = activeTab === "scribe" ? messages : dieticianMessages;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header with Simulate Button - removed title */}
      <div className="flex items-center justify-end mb-6">
        <div className="relative">
          <button
            onClick={() => setShowSimulateDropdown(!showSimulateDropdown)}
            className={twMerge(
              "px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-all border opacity-20 hover:opacity-100",
              isDark
                ? "bg-[#1A1F2E] border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600"
                : "bg-gray-50 border-gray-200 text-[#64707D] hover:text-gray-600 hover:border-gray-300",
            )}
          >
            simulate
          </button>
          {showSimulateDropdown && (
            <div
              className={twMerge(
                "absolute top-full right-0 mt-2 w-48 rounded-xl shadow-lg border overflow-hidden z-10",
                isDark
                  ? "bg-[#1A1F2E] border-gray-700"
                  : "bg-white border-gray-200",
              )}
            >
              {simulationOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => simulateJourney(option.id)}
                  className={twMerge(
                    "w-full px-4 py-3 text-left text-sm font-medium transition-colors",
                    isDark
                      ? "text-gray-300 hover:bg-[#265F6B]/20 hover:text-[#265F6B]"
                      : "text-gray-700 hover:bg-[#265F6B]/10 hover:text-[#265F6B]",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-4">
        <div
          className={twMerge(
            "inline-flex rounded-xl p-4 border",
            isDark
              ? "bg-[#1A1F2E] border-gray-800"
              : "bg-white border-gray-150",
          )}
        >
          <button
            onClick={() => setActiveTab("scribe")}
            className={twMerge(
              "px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              activeTab === "scribe"
                ? "bg-[#265F6B] text-white"
                : isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-500 hover:text-gray-900",
            )}
          >
            Dovetail Scribe
            {activeTab === "scribe" && (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("dietician")}
            className={twMerge(
              "px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              activeTab === "dietician"
                ? "bg-[#265F6B] text-white"
                : isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-500 hover:text-gray-900",
            )}
          >
            Chat with Dietician
            {activeTab === "dietician" && (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div
        className={twMerge(
          "flex-1 rounded-3xl border shadow-sm overflow-hidden flex flex-col mb-4",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
        )}
      >
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {currentMessages.map((msg) => (
            <div
              key={msg.id}
              className={twMerge(
                "flex flex-col",
                msg.role === "user" ? "items-end" : "items-start",
              )}
            >
              <div
                className={twMerge(
                  "max-w-[80%] rounded-2xl p-4",
                  msg.role === "user"
                    ? "bg-[#265F6B] text-white rounded-tr-none"
                    : isDark
                      ? "bg-[#0A0E1A] text-gray-200 rounded-tl-none border border-gray-800"
                      : "bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100",
                  msg.id === "1" && "text-base",
                )}
              >
                {msg.type === "image" && (
                  <div className="mb-3 rounded-lg overflow-hidden border border-white/20">
                    <img
                      src={msg.metadata.imageUrl}
                      alt="Uploaded"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
                {msg.type === "file" && (
                  <div className="flex items-center gap-3 mb-2 p-2 bg-white/20 rounded-lg border border-white/30">
                    <FileText size={20} />
                    <span className="font-medium truncate">
                      {msg.metadata.fileName}
                    </span>
                  </div>
                )}
                <p
                  className={twMerge(
                    "leading-relaxed",
                    msg.id === "1" ? "font-semibold" : "font-medium",
                  )}
                >
                  {msg.content}
                </p>

                {msg.type === "clarification" && (
                  <div
                    className={twMerge(
                      "mt-4 space-y-3 pt-4 border-t",
                      isDark ? "border-gray-700" : "border-gray-200",
                    )}
                  >
                    <div className="flex flex-wrap gap-2">
                      {msg.metadata.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            addMessage("user", opt);
                            setTimeout(() => {
                              addMessage(
                                "ai",
                                `Got it. I've routed this data to your ${msg.metadata.suggestion} section. Your provider has been notified.`,
                              );
                            }, 1000);
                          }}
                          className={twMerge(
                            "px-4 py-2 border rounded-xl text-xs font-bold transition-all shadow-sm",
                            isDark
                              ? "bg-[#1A1F2E] border-gray-700 text-gray-300 hover:border-[#265F6B] hover:text-[#265F6B]"
                              : "bg-white border-gray-200 text-gray-700 hover:border-[#265F6B] hover:text-[#265F6B]",
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div
                      className={twMerge(
                        "p-3 rounded-xl border flex items-center justify-between",
                        isDark
                          ? "bg-[#265F6B]/10 border-[#265F6B]/30"
                          : "bg-[#265F6B]/5 border-[#265F6B]/20",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Database
                          size={14}
                          className={isDark ? "text-white" : "text-[#265F6B]"}
                        />
                        <span
                          className={twMerge(
                            "text-[10px] font-bold uppercase",
                            isDark ? "text-white" : "text-[#265F6B]",
                          )}
                        >
                          Suggestion: Store in {msg.metadata.suggestion}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className={twMerge(
                            "p-1 transition-colors",
                            isDark
                              ? "text-gray-400 hover:text-red-500"
                              : "text-[#64707D] hover:text-[#C11F1F]",
                          )}
                        >
                          <XCircle size={32} />
                        </button>
                        <button
                          className={twMerge(
                            "p-1 transition-colors",
                            isDark
                              ? "text-gray-400 hover:text-green-500"
                              : "text-[#64707D] hover:text-[#137136]",
                          )}
                        >
                          <CheckCircle2 size={32} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <span
                className={twMerge(
                  "text-[10px] mt-1 font-bold px-1 uppercase tracking-wider",
                  isDark ? "text-gray-400" : "text-[#64707D]",
                )}
              >
                {msg.timestamp}
              </span>
            </div>
          ))}

          {/* Schedule Appointment Button for Dietician Tab */}
          {activeTab === "dietician" && currentMessages.length === 1 && (
            <div className="flex justify-start">
              <a
                href="/appointments"
                className={twMerge(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md",
                  "bg-[#265F6B] text-white hover:bg-[#1e4a54]",
                )}
              >
                <Calendar size={18} />
                Schedule Appointment
              </a>
            </div>
          )}

          {isProcessing && (
            <div
              className={twMerge(
                "flex items-center gap-3",
                isDark ? "text-gray-400" : "text-[#64707D]",
              )}
            >
              <div
                className={twMerge(
                  "w-8 h-8 rounded-full flex items-center justify-center animate-pulse",
                  isDark ? "bg-[#265F6B]/20" : "bg-[#265F6B]/10",
                )}
              >
                <Sparkles size={16} className="text-[#265F6B]" />
              </div>
              <span className="text-xs font-bold italic">
                Dovetail Scribe is interpreting...
              </span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div
          className={twMerge(
            "p-4 border-t",
            isDark
              ? "bg-[#0A0E1A]/50 border-gray-800"
              : "bg-gray-50/50 border-gray-100",
          )}
        >
          <div
            className={twMerge(
              "max-w-3xl mx-auto flex items-center gap-3 p-2 rounded-2xl shadow-sm border",
              isDark
                ? "bg-[#1A1F2E] border-gray-700"
                : "bg-white border-gray-100",
            )}
          >
            <button
              onClick={() => attachInputRef.current?.click()}
              className={twMerge(
                "p-2 rounded-xl transition-all",
                isDark
                  ? "text-gray-400 hover:text-[#265F6B] hover:bg-[#265F6B]/10"
                  : "text-[#64707D] hover:text-[#265F6B] hover:bg-[#265F6B]/5",
              )}
            >
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                activeTab === "scribe"
                  ? "Message Dovetail or upload files..."
                  : "Message Jenny..."
              }
              className={twMerge(
                "flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium",
                isDark
                  ? "text-white placeholder:text-gray-500"
                  : "text-gray-900 placeholder:text-[#64707D]",
              )}
            />
            <button
              onClick={handleSend}
              className="bg-[#265F6B] text-white p-2.5 rounded-xl hover:bg-[#1e4a54] transition-all shadow-md shadow-[#265F6B]/20"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* File inputs - hidden */}
      <input
        ref={attachInputRef}
        type="file"
        accept="image/*,.pdf,.csv,.txt,.json"
        className="hidden"
        onChange={(e) => handleFileUpload(e, "attachment")}
      />
      <input
        ref={foodInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e, "food")}
      />
      <input
        ref={labInputRef}
        type="file"
        accept=".pdf,image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e, "lab")}
      />
      <input
        ref={deviceInputRef}
        type="file"
        accept=".csv,.txt,.json"
        className="hidden"
        onChange={(e) => handleFileUpload(e, "device data")}
      />

      {/* Quick Access Info - Only show for Scribe tab */}
      {activeTab === "scribe" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div
            onClick={() => foodInputRef.current?.click()}
            className={twMerge(
              "h-8 md:h-12 px-3 md:px-4 rounded-xl md:rounded-2xl border shadow-sm flex items-center gap-3 group hover:border-[#265F6B]/50 transition-all cursor-pointer",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
              <ImageIcon size={14} className="md:hidden" />
              <ImageIcon size={16} className="hidden md:block" />
            </div>
            <div className="flex-1 min-w-0">
              <h4
                className={twMerge(
                  "text-xs md:text-sm font-bold truncate",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                Food Log
              </h4>
              <p
                className={twMerge(
                  "hidden md:block text-[10px] font-medium uppercase tracking-wider truncate",
                  isDark ? "text-gray-400" : "text-[#64707D]",
                )}
              >
                Upload photos of meals
              </p>
            </div>
            <ChevronRight
              size={14}
              className={twMerge(
                "transition-colors flex-shrink-0 md:hidden",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
            <ChevronRight
              size={16}
              className={twMerge(
                "transition-colors flex-shrink-0 hidden md:block",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
          </div>
          <div
            onClick={() => labInputRef.current?.click()}
            className={twMerge(
              "h-8 md:h-12 px-3 md:px-4 rounded-xl md:rounded-2xl border shadow-sm flex items-center gap-3 group hover:border-[#265F6B]/50 transition-all cursor-pointer",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-[#0A56D1] flex-shrink-0">
              <FileText size={14} className="md:hidden" />
              <FileText size={16} className="hidden md:block" />
            </div>
            <div className="flex-1 min-w-0">
              <h4
                className={twMerge(
                  "text-xs md:text-sm font-bold truncate",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                Lab Results
              </h4>
              <p
                className={twMerge(
                  "hidden md:block text-[10px] font-medium uppercase tracking-wider truncate",
                  isDark ? "text-gray-400" : "text-[#64707D]",
                )}
              >
                Sync PDFs or clinic photos
              </p>
            </div>
            <ChevronRight
              size={14}
              className={twMerge(
                "transition-colors flex-shrink-0 md:hidden",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
            <ChevronRight
              size={16}
              className={twMerge(
                "transition-colors flex-shrink-0 hidden md:block",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
          </div>
          <div
            onClick={() => deviceInputRef.current?.click()}
            className={twMerge(
              "h-8 md:h-12 px-3 md:px-4 rounded-xl md:rounded-2xl border shadow-sm flex items-center gap-3 group hover:border-[#265F6B]/50 transition-all cursor-pointer",
              isDark
                ? "bg-[#1A1F2E] border-gray-800"
                : "bg-white border-gray-100",
            )}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0">
              <Database size={14} className="md:hidden" />
              <Database size={16} className="hidden md:block" />
            </div>
            <div className="flex-1 min-w-0">
              <h4
                className={twMerge(
                  "text-xs md:text-sm font-bold truncate",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                Device Data
              </h4>
              <p
                className={twMerge(
                  "hidden md:block text-[10px] font-medium uppercase tracking-wider truncate",
                  isDark ? "text-gray-400" : "text-[#64707D]",
                )}
              >
                Import CSV/Sleep exports
              </p>
            </div>
            <ChevronRight
              size={14}
              className={twMerge(
                "transition-colors flex-shrink-0 md:hidden",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
            <ChevronRight
              size={16}
              className={twMerge(
                "transition-colors flex-shrink-0 hidden md:block",
                isDark
                  ? "text-gray-600 group-hover:text-[#265F6B]"
                  : "text-gray-300 group-hover:text-[#265F6B]",
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
