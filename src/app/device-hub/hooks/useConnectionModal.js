import { useState } from "react";

export function useConnectionModal() {
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [connectionStep, setConnectionStep] = useState("manufacturer");
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [appleEmail, setAppleEmail] = useState("");
  const [applePassword, setApplePassword] = useState("");

  const openConnectionModal = () => {
    setShowConnectionModal(true);
    setConnectionStep("manufacturer");
    setSelectedManufacturer(null);
    setSelectedModel(null);
    setAppleEmail("");
    setApplePassword("");
  };

  const closeConnectionModal = () => {
    setShowConnectionModal(false);
    setConnectionStep("manufacturer");
    setSelectedManufacturer(null);
    setSelectedModel(null);
  };

  const selectManufacturer = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setConnectionStep("model");
  };

  const selectModel = (model) => {
    setSelectedModel(model);
    setConnectionStep("login");
  };

  const backToManufacturer = () => {
    setConnectionStep("manufacturer");
    setSelectedManufacturer(null);
    setSelectedModel(null);
  };

  const handleAppleLogin = (e) => {
    e.preventDefault();
    alert("Device connected successfully!");
    closeConnectionModal();
  };

  return {
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
  };
}
