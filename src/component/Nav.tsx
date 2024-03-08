import React from 'react';
import Logo from '../img/Снимок экрана 2024-03-03 151023-Photoroom.png-Photoroom.png';

type NavProps = {

};

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className="bg-green-900 fixed z-10 w-full p-2">
      <div className="container mx-auto max-w-6xl px-4">
        <a className="flex items-center gap-3" href="#">
          <img className="h-8 w-8" src={Logo} alt="" />
          <div className="text-green-50 font-semibold text-lg">EcoFerma DonCip</div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;