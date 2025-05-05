"use client";
import Cursor from "@/components/cursor";
import Navbar from "@/components/Navbar";
import Providers from "@/app/providers";

export default function ClientWrapper({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
