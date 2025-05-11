"use client";
import Providers from "@/app/providers";

export default function ClientWrapper({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
