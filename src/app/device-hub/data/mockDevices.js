import { Watch, Smartphone, Scale } from "lucide-react";

export const MOCK_DEVICES = [
  {
    id: "garmin",
    type: "watch",
    name: "Garmin Fenix 7X",
    status: "online",
    lastSync: "2 mins ago",
    battery: "85%",
    icon: Watch,
    brand: "Garmin",
  },
  {
    id: "calorie",
    type: "app",
    name: "MyFitnessPal",
    status: "online",
    lastSync: "1 hour ago",
    battery: null,
    icon: Smartphone,
    brand: "Under Armour",
  },
  {
    id: "ge-scale",
    type: "scale",
    name: "GE SmartScale Cync",
    status: "offline",
    lastSync: "3 days ago",
    battery: "12%",
    icon: Scale,
    brand: "GE Health",
  },
];
