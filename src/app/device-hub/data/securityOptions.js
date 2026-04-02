import { Lock, ShieldCheck, User } from "lucide-react";

export const SECURITY_OPTIONS = [
  {
    label: "Reset Password",
    icon: Lock,
    color: "text-blue-500",
    colorDark: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Two-Factor Auth",
    icon: ShieldCheck,
    color: "text-green-500",
    colorDark: "text-green-500",
    bg: "bg-green-50",
    status: "ON",
  },
  {
    label: "Biometric Login",
    icon: User,
    color: "text-purple-500",
    colorDark: "text-purple-500",
    bg: "bg-purple-50",
    status: "OFF",
  },
];
