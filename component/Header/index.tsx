import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header>
     
      <Navigation />
      <div className="text-center mt-10 ">
        <Logo />
      </div>
    </header>
  );
}