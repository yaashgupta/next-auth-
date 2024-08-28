"use client"; // Ensures this file is treated as a client-side component

import { SessionProvider } from "next-auth/react";
import React from 'react';

const SessionWrapper = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default SessionWrapper;
