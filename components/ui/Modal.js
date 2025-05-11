'use client';

import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';

export default function Modal({ isOpen, onClose, type, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-[#000000b1]" onClick={onClose}></div>
      <div className="relative bg-[var(--background)] rounded-lg p-6 max-w-sm w-full shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center">
          {type === 'success' ? (
            <FiCheckCircle className="w-12 h-12 text-green-500 mb-4" />
          ) : (
            <FiXCircle className="w-12 h-12 text-red-500 mb-4" />
          )}
          <h3 className={`text-lg font-semibold mb-2 ${
            type === 'success' ? 'text-green-500' : 'text-red-500'
          }`}>
            {type === 'success' ? 'Success!' : 'Error!'}
          </h3>
          <p className="text-center text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
