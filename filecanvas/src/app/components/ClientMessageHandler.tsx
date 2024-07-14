"use client";

import React, { useEffect } from "react";

const ClientMessageHandler = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log(event.data);

      
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <>{children}</>;
};

export default ClientMessageHandler;
