"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function MobileMenu({ isOpen, onToggle, children }: MobileMenuProps) {
  return (
    <div className="md:hidden relative z-50 w-[500px]">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 z-50"
          style={{ zIndex: 9999 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
