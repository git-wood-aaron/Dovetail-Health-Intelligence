import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "../components/sidebar";
import { useState, createContext, useContext, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return default values if context is not available
    return { isDark: false, setIsDark: () => {} };
  }
  return context;
}

export default function RootLayout({ children }) {
  // Initialize from localStorage if available, otherwise default to false (light mode)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "dark";
    }
    return false;
  });

  // Save to localStorage whenever isDark changes
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Check if current route should hide sidebar
  const hideSidebar =
    typeof window !== "undefined" &&
    (window.location.pathname === "/account/signin" ||
      window.location.pathname.startsWith("/onboarding"));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <div
          className={
            isDark
              ? "dark bg-[#0A0E1A] text-white min-h-screen"
              : "bg-[#FBFCFE] text-gray-900 min-h-screen"
          }
        >
          <div className="flex min-h-screen">
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Bricolage+Grotesque:wght@600;800&family=Inter:wght@300;400;500;600&display=swap');
              
              .font-geist { font-family: 'Geist', sans-serif; }
              .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif; }
              .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            {!hideSidebar && <Sidebar />}
            <main
              className={
                hideSidebar
                  ? "flex-1 min-h-screen"
                  : "flex-1 lg:pl-64 min-h-screen"
              }
            >
              <div
                className={
                  hideSidebar
                    ? ""
                    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 lg:pt-8"
                }
              >
                {children}
              </div>
            </main>
          </div>
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
