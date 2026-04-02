import React, { useState, useEffect } from "react";
import {
  Home,
  Utensils,
  Activity,
  Beaker,
  Calendar,
  Smartphone,
  Pill,
  User,
  Menu,
  X,
  Lightbulb,
  LightbulbOff,
  Weight,
  Moon,
  ChevronDown,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../app/layout";

const navItems = [
  { name: "HOME", icon: Home, path: "/" },
  {
    name: "LIFESTYLE",
    icon: Activity,
    isCollapsible: true,
    children: [
      { name: "Nutrition", icon: Utensils, path: "/nutrition" },
      { name: "Exercise", icon: Activity, path: "/exercise" },
      { name: "Sleep", icon: Moon, path: "/sleep" },
    ],
  },
  {
    name: "BODY METRICS",
    icon: Weight,
    isCollapsible: true,
    children: [
      { name: "Body Composition", icon: Weight, path: "/body-composition" },
      { name: "Labs", icon: Beaker, path: "/labs" },
    ],
  },
  { name: "DEVICE HUB", icon: Smartphone, path: "/device-hub" },
  { name: "APPOINTMENTS", icon: Calendar, path: "/appointments" },
  { name: "RX & SUPPLEMENTS", icon: Pill, path: "/rx" },
];

export default function Sidebar() {
  const [pathname, setPathname] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    setPathname(window.location.pathname);

    // Auto-expand sections that contain the current page
    const newExpandedSections = {};
    navItems.forEach((item) => {
      if (item.isCollapsible && item.children) {
        const hasActivePath = item.children.some(
          (child) =>
            window.location.pathname === child.path ||
            (child.path !== "/" &&
              window.location.pathname.startsWith(child.path)),
        );
        if (hasActivePath) {
          newExpandedSections[item.name] = true;
        }
      }
    });
    setExpandedSections(newExpandedSections);
  }, []);

  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const DovetailIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 lg:w-12 lg:h-12"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#265F6B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.30033 6.04342C8.79784 5.81431 8.45435 6.55882 8.37846 6.93893C8.0649 8.51063 8.5522 10.4084 9.28959 11.8081L9.98881 12.9399C9.95232 12.9799 9.30277 12.2593 9.24955 12.1977C8.96794 11.8732 8.70423 11.5238 8.44291 11.1831C8.28605 10.9784 7.79462 10.1857 7.58353 10.1381C7.00942 10.0101 7.01154 11.1082 7.02689 11.4419C7.0941 12.8896 7.88711 14.4587 8.76029 15.5971C9.39092 16.4192 10.1804 17.1113 10.9497 17.8032C10.1408 17.4375 9.3917 16.9364 8.71439 16.3706C8.39269 16.1021 8.08477 15.753 7.75346 15.5073C7.50574 15.3236 7.24623 15.2338 7.0767 15.5698C6.8425 16.0346 7.20115 17.0316 7.4058 17.4965C8.17337 19.2395 9.821 20.8248 11.4458 21.812C11.761 22.0034 12.1043 22.1543 12.4038 22.3676C11.7425 22.2323 11.0896 22.0052 10.4927 21.6967C10.1957 21.5434 9.38693 20.9852 9.11869 20.9692C8.82999 20.9525 8.79151 21.308 8.81693 21.5092C8.95354 22.5812 10.437 23.9423 11.3247 24.4965C12.67 25.3368 14.182 25.6892 15.7232 26.0141C15.7296 26.0529 15.674 26.0512 15.646 26.059C15.1974 26.1832 13.9526 26.1469 13.4634 26.0913C13.0964 26.0497 12.3819 25.8274 12.062 25.8803C11.8173 25.9212 11.8596 26.1875 11.9693 26.3471C12.3067 26.8374 13.3668 27.4779 13.9214 27.7202C15.2606 28.3052 16.9074 28.5052 18.356 28.31L17.4302 28.7348C17.0925 28.9122 16.5792 28.9361 16.2564 29.0922C15.8656 29.2811 16.5123 29.6361 16.6831 29.729C18.1851 30.5444 20.2898 30.6058 21.8824 30.0122C22.0567 29.9471 22.2143 29.8558 22.3892 29.7963C22.4165 29.824 22.1653 30.1074 22.1294 30.1469C18.9231 33.6739 14.369 35.4205 9.56498 35.1704C9.17844 35.1501 8.53212 34.9875 8.18705 35.1655C7.8763 35.3258 7.92503 35.8348 7.96342 36.1264C8.08741 37.072 8.87582 38.7518 9.89603 39.0044C10.1871 39.0765 10.5129 39.0878 10.813 39.0883C10.4578 39.5218 10.1133 40.0869 10.565 40.5874C11.045 41.1189 11.9895 41.1205 12.6226 40.8969C12.5131 41.3115 12.1823 41.7637 12.4517 42.187C12.7285 42.6215 13.3311 42.7473 13.813 42.6762C14.2481 42.6122 14.5687 42.4008 14.9546 42.2212C14.8449 42.973 15.559 43.1157 16.149 42.9243C17.8322 42.3779 19.6253 39.2396 21.0581 38.0063C22.03 37.1699 22.8742 37.5625 23.9986 37.7329C25.2691 37.9254 26.3471 38.0378 27.6382 37.8676C30.8598 37.4433 33.6891 35.6026 35.2144 32.768C35.937 31.4251 36.4246 29.5789 37.6558 28.6079C38.2666 28.1259 39.0728 28.0373 39.7906 28.3413C40.0298 28.4426 40.699 28.8914 40.8697 28.8979C41.1476 28.9076 40.9029 28.375 40.8374 28.2563C40.5667 27.7656 40.1276 27.405 39.9537 26.8579C39.7929 26.3517 39.7811 25.8797 39.5386 25.3755C38.8075 23.8559 36.8881 23.35 35.3648 23.976C33.7222 24.651 32.1863 26.7714 30.2085 26.1079C29.1862 25.7649 28.3816 23.8309 27.8316 22.938C25.2911 18.8152 21.2617 16.987 17.4703 14.2329C14.8565 12.3343 12.2987 10.0266 10.3785 7.4399C10.1633 7.15015 9.5683 6.16575 9.30033 6.04342ZM32.3208 7.14889C32.3329 6.76162 32.3308 6.26599 31.7837 6.53951C30.9962 6.93338 30.2487 8.60229 30.0787 9.42526C29.9456 10.0689 29.9595 10.7272 29.8775 11.3755C29.8058 11.4423 29.591 10.7798 29.5787 10.7378C29.5043 10.4833 29.3873 9.66062 29.2183 9.52584C28.9806 9.33676 28.5863 9.79926 28.4683 9.97213C27.754 11.0203 27.6755 12.4361 27.8521 13.6528C27.9122 14.0668 28.0267 14.4697 28.1773 14.8588C27.8511 14.5002 27.6275 14.0216 27.4322 13.5805C27.3465 13.3872 27.1643 12.7094 26.9556 12.6713C26.734 12.631 26.5073 12.9009 26.399 13.0678C25.7794 14.021 25.8226 15.761 26.2369 16.7846C26.3068 16.9576 26.4161 17.1137 26.4761 17.2905C26.3055 17.1495 26.1511 16.9872 26.0113 16.8169C25.8555 16.6275 25.5023 15.9986 25.3619 15.9165C25.1806 15.8104 25.0939 15.8475 25.0083 16.02C24.8119 16.4148 24.7542 17.5943 24.8345 18.0297C24.8444 18.0827 24.8512 18.1532 24.8863 18.1948C26.4214 19.1717 27.7086 20.5805 28.6997 22.0844C29.1006 22.6924 29.934 24.3193 30.4732 24.6587C32.0204 25.6313 34.1343 23.5706 34.3697 22.104C34.6375 20.4351 33.8236 18.3232 33.397 16.7016C32.6548 13.88 32.1257 11.0858 32.2359 8.14693C32.2482 7.81714 32.3107 7.47868 32.3208 7.14889Z"
        fill="#265F6B"
      />
    </svg>
  );

  return (
    <>
      {/* Mobile Toggle - Only show when menu is closed */}
      {!isOpen && (
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            <DovetailIcon />
          </button>
        </div>
      )}

      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={twMerge(
            "p-2.5 rounded-xl shadow-md border transition-all",
            isDark
              ? "bg-[#1A1F2E] border-gray-700 text-gray-300 hover:text-[#265F6B] hover:border-[#265F6B]"
              : "bg-white border-gray-100 text-gray-600 hover:text-[#265F6B] hover:border-[#265F6B]",
          )}
        >
          {isDark ? <Lightbulb size={20} /> : <LightbulbOff size={20} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={twMerge(
          "fixed inset-y-0 left-0 z-40 w-64 border-r transition-all duration-300 ease-in-out lg:translate-x-0",
          isDark ? "bg-[#1A1F2E] border-gray-800" : "bg-white border-gray-100",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full px-4 py-6 relative">
          {/* Close Button - Top Right (Mobile Only) */}
          <button
            onClick={() => setIsOpen(false)}
            className={twMerge(
              "lg:hidden absolute top-4 right-4 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all hover:shadow-lg",
              isDark
                ? "bg-[#1A1F2E] border-[#265F6B] text-[#265F6B]"
                : "bg-white border-[#265F6B] text-[#265F6B]",
            )}
          >
            <X size={20} />
          </button>

          {/* Logo Section */}
          <div className="flex items-center gap-3 px-2 mb-10">
            <DovetailIcon />
            <div>
              <h1
                className={twMerge(
                  "font-bricolage text-xl font-extrabold tracking-[0.08em]",
                  isDark ? "text-white" : "text-gray-900",
                )}
              >
                DOVETAIL
              </h1>
              <p
                className={twMerge(
                  "text-[8px] font-bold uppercase tracking-[0.08em] whitespace-nowrap",
                  isDark ? "text-white" : "text-[#265F6B]",
                )}
              >
                Health Intelligence
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              if (item.isCollapsible) {
                const isExpanded = expandedSections[item.name];
                const hasActivePath = item.children.some(
                  (child) =>
                    pathname === child.path ||
                    (child.path !== "/" && pathname.startsWith(child.path)),
                );

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className={twMerge(
                        "w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group",
                        hasActivePath && !isExpanded
                          ? isDark
                            ? "bg-[#265F6B]/20 text-white shadow-sm"
                            : "bg-[#265F6B]/10 text-[#265F6B] shadow-sm"
                          : isDark
                            ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          size={20}
                          strokeWidth={hasActivePath ? 2.5 : 2}
                        />
                        <span
                          className={twMerge(
                            "text-xs font-bold tracking-wider",
                            hasActivePath ? "font-bold" : "font-medium",
                          )}
                        >
                          {item.name}
                        </span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={twMerge(
                          "transition-transform duration-200",
                          isExpanded ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.children.map((child) => {
                          const isChildActive =
                            pathname === child.path ||
                            (child.path !== "/" &&
                              pathname.startsWith(child.path));
                          return (
                            <a
                              key={child.name}
                              href={child.path}
                              onClick={() => setIsOpen(false)}
                              className={twMerge(
                                "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group",
                                isChildActive
                                  ? isDark
                                    ? "bg-[#265F6B]/20 text-white shadow-sm"
                                    : "bg-[#265F6B]/10 text-[#265F6B] shadow-sm"
                                  : isDark
                                    ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <child.icon
                                  size={18}
                                  strokeWidth={isChildActive ? 2.5 : 2}
                                />
                                <span
                                  className={twMerge(
                                    "text-xs tracking-wider",
                                    isChildActive ? "font-bold" : "font-medium",
                                  )}
                                >
                                  {child.name}
                                </span>
                              </div>
                              {isChildActive && (
                                <div
                                  className={twMerge(
                                    "w-1.5 h-1.5 rounded-full",
                                    isDark ? "bg-white" : "bg-[#265F6B]",
                                  )}
                                />
                              )}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                pathname === item.path ||
                (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={twMerge(
                    "flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group",
                    isActive
                      ? isDark
                        ? "bg-[#265F6B]/20 text-white shadow-sm"
                        : "bg-[#265F6B]/10 text-[#265F6B] shadow-sm"
                      : isDark
                        ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    <span
                      className={twMerge(
                        "text-xs font-bold tracking-wider",
                        isActive ? "font-bold" : "font-medium",
                      )}
                    >
                      {item.name}
                    </span>
                  </div>
                  {isActive && (
                    <div
                      className={twMerge(
                        "w-1.5 h-1.5 rounded-full",
                        isDark ? "bg-white" : "bg-[#265F6B]",
                      )}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Account Section with Divider */}
          <div className="space-y-2">
            {/* Horizontal Divider */}
            <div
              className={twMerge(
                "border-t",
                isDark ? "border-gray-800" : "border-gray-100",
              )}
            />

            {/* Account Nav Item */}
            <a
              href="/account"
              onClick={() => setIsOpen(false)}
              className={twMerge(
                "flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group",
                pathname === "/account"
                  ? isDark
                    ? "bg-[#265F6B]/20 text-white shadow-sm"
                    : "bg-[#265F6B]/10 text-[#265F6B] shadow-sm"
                  : isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <div className="flex items-center gap-3">
                <User
                  size={20}
                  strokeWidth={pathname === "/account" ? 2.5 : 2}
                />
                <span
                  className={twMerge(
                    "text-xs font-bold tracking-wider",
                    pathname === "/account" ? "font-bold" : "font-medium",
                  )}
                >
                  ACCOUNT
                </span>
              </div>
              {pathname === "/account" && (
                <div
                  className={twMerge(
                    "w-1.5 h-1.5 rounded-full",
                    isDark ? "bg-white" : "bg-[#265F6B]",
                  )}
                />
              )}
            </a>
          </div>

          {/* User Section */}
          <div className="mt-2 pt-3">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border-2 border-[#265F6B]/30">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={twMerge(
                    "text-sm font-bold truncate",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  Sarah Johnson
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  Patient ID: #DV-2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
