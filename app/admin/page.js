"use client";

import { useState } from "react";
import Image from "next/image";

const messagesData = [
  {
    id: 1,
    name: "Ali Khan",
    text: "Hello, I wanted to inquire about your services regarding React development.",
  },
  {
    id: 2,
    name: "Sara Malik",
    text: "Please get back to me regarding the portfolio update.",
  },
  {
    id: 3,
    name: "Zain Ahmed",
    text: "Great work! Loved your latest design. Would like to collaborate.",
  },
  {
    id: 4,
    name: "Hira Fatima",
    text: "Need help with Next.js integration. Can we talk?",
  },
  {
    id: 5,
    name: "Umer Sheikh",
    text: "Are you available for a freelance project next week?",
  },
];

export default function ProtectedPage() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="p-6 space-y-6 bg-[var(--background)]">
      {/* Header */}
      <div className="flex items-center justify-center bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 mt-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--text-color)] mb-2">
            Admin Panel
          </h1>
          <p className="text-lg text-[var(--text-color)]">
            Manage your dashboard, projects, and more here.
          </p>
        </div>
      </div>

      {/* First Row: Messages and Visitors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Messages Box */}
        <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 w-full h-80 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">
            Messages
          </h2>
          {messagesData.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className="flex items-center gap-4 mb-4 cursor-pointer p-2 rounded"
            >
              <Image
                src="/images/default.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="w-full overflow-hidden">
                <p className="text-[var(--bold-text-color)] font-semibold">
                  {message.name}
                </p>
                <p className="text-[var(--text-color)] text-sm truncate max-w-full">
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visitors Box */}
        <div className="flex flex-col justify-between bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center text-[var(--text-color)]">
            Visitors
          </h2>
          <div className="space-y-3 text-[var(--text-color)]">
            <p className="text-lg">
              🌍 Total Visitors: <span className="font-semibold">789</span>
            </p>
            <p className="text-lg">
              👥 Active Now: <span className="font-semibold">27</span>
            </p>
            <p className="text-lg">
              📅 This Week: <span className="font-semibold">142</span>
            </p>
            <p className="text-lg">
              📈 Traffic Source:{" "}
              <span className="font-semibold">Organic + Referrals</span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <a
              href="/admin/visitors"
              className="text-[var(--link-color)] hover:underline text-sm"
            >
              View Detailed Analytics →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard Box */}
        <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-bold mb-2 text-[var(--text-color)]">
            Dashboard
          </h2>
          <p className="text-sm text-[var(--text-color)] mb-4">
            Access your performance stats, user logs, and latest activity
            summaries.
          </p>
          <a
            href="/admin/dashboard"
            className="text-[var(--link-color)] hover:underline"
          >
            Go to Dashboard
          </a>
        </div>

        {/* Manage Projects Box */}
        <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-bold mb-2 text-[var(--text-color)]">
            Manage Projects
          </h2>
          <a
            href="/admin/manage-projects"
            className="text-[var(--link-color)] hover:underline"
          >
            Manage Projects
          </a>
        </div>

        {/* Manage Skills Box */}
        <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-bold mb-2 text-[var(--text-color)]">
            Manage Skills
          </h2>
          <a
            href="/admin/manage-skills"
            className="text-[var(--link-color)] hover:underline"
          >
            Manage Skills
          </a>
        </div>
      </div>

      {/* Modal for Message */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--card-bg)] rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-[var(--bold-text-color)] mb-2">
              {selectedMessage.name}
            </h3>
            <p className="text-[var(--text-color)] mb-4">
              {selectedMessage.text}
            </p>
            <button
              className="bg-[var(--button-bg)] text-[var(--button-text)] px-4 py-2 rounded hover:opacity-90"
              onClick={() => setSelectedMessage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
