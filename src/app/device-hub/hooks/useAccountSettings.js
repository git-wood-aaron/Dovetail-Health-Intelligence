import { useState } from "react";

export function useAccountSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: "123 Health Way, San Francisco, CA 94105",
    billing: "Visa ending in 4242",
    email: "sarah.johnson@example.com",
  });

  return {
    isEditing,
    setIsEditing,
    formData,
    setFormData,
  };
}
