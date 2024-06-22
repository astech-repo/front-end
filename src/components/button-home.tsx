'use client'
import React from "react";

interface CardButtonProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  tipo: string;
}

const CardButton: React.FC<CardButtonProps> = ({ icon, title, link, tipo }) => {

const navegar = () => {
localStorage.setItem('tipo', tipo)
window.location.href = link
}

  return (
      <div onClick={navegar} className="cursor-pointer transition-all hover:opacity-75 bg-gray-100 w-40 h-40 rounded-md shadow-xl flex flex-col items-center justify-center gap-4">
        <div className="text-7xl">{icon}</div>
        <div className="text-center text-balance">{title}</div>
      </div>
  );
};

export default CardButton;
