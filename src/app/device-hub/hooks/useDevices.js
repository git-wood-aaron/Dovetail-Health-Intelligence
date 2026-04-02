import { useState, useEffect } from "react";
import { Watch } from "lucide-react";
import { MOCK_DEVICES } from "../data/mockDevices";

export function useDevices() {
  const [devices, setDevices] = useState(MOCK_DEVICES);

  useEffect(() => {
    const newDeviceData = localStorage.getItem("newlyConnectedDevice");
    if (newDeviceData) {
      try {
        const deviceInfo = JSON.parse(newDeviceData);
        const newDevice = {
          id: `device-${Date.now()}`,
          type: "watch",
          name: deviceInfo.model,
          status: "online",
          lastSync: "Just now",
          battery: "100%",
          icon: Watch,
          brand: deviceInfo.manufacturer,
        };
        setDevices((prev) => [newDevice, ...prev]);
        localStorage.removeItem("newlyConnectedDevice");
      } catch (error) {
        console.error("Error parsing new device data:", error);
      }
    }
  }, []);

  const toggleStatus = (id) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: d.status === "online" ? "offline" : "online" }
          : d,
      ),
    );
  };

  return { devices, toggleStatus };
}
