import React from "react";
import AdminSidebar from "@/components/AdminSidebar";

export default function adminLayout({ children }) {
  return (
    <div className="flex h-screen admin-bg">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
