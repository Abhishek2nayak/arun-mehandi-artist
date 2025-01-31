import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  href: string;
  children?: React.ReactNode;
}

export default function NavItem({ label, href, children }: NavItemProps) {
  const hasDropdown = Boolean(children);

  return (
    <div className="relative group">
      <Link 
        href={href} 
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        {label}
        {hasDropdown && <ChevronDown size={16} />}
      </Link>

      {hasDropdown && (
        <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {children}
        </div>
      )}
    </div>
  );
}
