"use client";
import React from "react";
import { Commet } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[var(--background)]">
      <Commet
        color="var(--text-color)"
        size="large"
        text="Loading"
        textColor="var(--text-color)"
      />
    </div>
  );
};

export default Loading;
