"use client";

import React, { useEffect } from "react";

interface ClientMessageHandlerProps {
  onAction: (action: string) => void;
  children: React.ReactNode;
}

const ClientMessageHandler: React.FC<ClientMessageHandlerProps> = ({ onAction, children }) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      onAction(data.action);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onAction]);

  return <>{children}</>;
};

export default ClientMessageHandler;
