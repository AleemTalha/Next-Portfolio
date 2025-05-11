"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiUser, FiMail, FiTag, FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("Message sent successfully!", "success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        showToast("Failed to send message!", "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-xl mx-auto px-4 text-black relative"
    >
      {toast.show && (
        <div
          className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg z-10 text-white transition-all
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="pl-10 bg-white text-black border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <FiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="pl-10 bg-white text-black border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="relative">
        <FiTag className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="pl-10 bg-white text-black border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <FiMessageCircle className="absolute top-3 left-3 text-gray-500" />
        <textarea
          name="message"
          placeholder="Enter your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="pl-10 pt-3 bg-white text-black border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[var(--button-bg)] text-white py-2 px-6 rounded-lg transition-all mx-auto block"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
