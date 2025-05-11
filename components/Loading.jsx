"use client";
import React from "react";
import { Commet } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[var(--background)]">
      <Commet
        color="var(--foreground)"
        size="large"
        text="Loading Page"
        textColor="var(--foreground)"
      />
    </div>
  );
};

export default Loading;
