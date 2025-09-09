import React from "react";

import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-red-800 text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-extrabold text-xl flex items-center gap-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpfebf-wRinEsuK_OcHglI9kskPsPx2ZzKw&s" alt="شعار المطعم" className="w-10 h-10 object-cover rounded-full" />
            كرم الشام
          </span>
          <div className="flex gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "underline font-bold" : ""}>الرئيسية</NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? "underline font-bold" : ""}>المنيو</NavLink>
                        <NavLink to="/About" className={({ isActive }) => isActive ? "underline font-bold" : ""}>عن كرم الشام</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "underline font-bold" : ""}>اتصل بنا</NavLink>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
  {/* Footer */}
<footer className="bg-red-800 text-white py-10">
  <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
    
    {/* اللوجو + اسم المطعم */}
    <div className="flex flex-col items-center md:items-start space-y-3">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpfebf-wRinEsuK_OcHglI9kskPsPx2ZzKw&s" 
        alt="شعار كرمل الشام" 
        className="w-20 h-20 rounded-full shadow-lg border-2 border-white"
      />
      <h2 className="text-2xl font-bold">مطعم كرمل الشام</h2>
      <p className="text-sm text-gray-200">أشهى الأكلات الشامية</p>
    </div>

    {/* معلومات التواصل */}
    <div className="space-y-2 text-lg">
      <p>📍 <span className="font-semibold">العنوان:</span> دمشق، شارع الثورة</p>
      <p>📞 <span className="font-semibold">الهاتف:</span> 
        <a href="tel:+963987654321" className="hover:text-yellow-400"> +963 987 654 321</a>
      </p>
      <p>🌐 <span className="font-semibold">الموقع:</span> 
        <a href="https://karmelsham.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"> karmelsham.com</a>
      </p>
      <div className="flex gap-4 justify-center md:justify-start mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-xl">🌐 فيسبوك</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-xl">📷 إنستغرام</a>
      </div>
    </div>

    {/* خريطة */}
    <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.68461776035!2d36.305!3d33.513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzQ2LjgiTiAzNsKwMTgnMTguMCJF!5e0!3m2!1sar!2s!4v1690000000000" 
        width="100%" 
        height="200" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>

  {/* حقوق */}
  <div className="text-center text-sm text-gray-300 mt-6 border-t border-gray-500 pt-4">
    جميع الحقوق محفوظة © 2025 مطعم كرمل الشام
  </div>
</footer>
    </div>
  );
}

