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
      <footer className="bg-red-800 text-white py-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
    {/* شعار أو اسم الموقع */}
    <div className="mb-2 md:mb-0 font-bold text-lg">
      موقعي
    </div>

    {/* النص أو الحقوق */}
    <div className="text-center md:text-left text-sm">
      جميع الحقوق محفوظة © 2025
    </div>

    {/* روابط إضافية (اختياري) */}
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#" className="hover:text-yellow-400 text-sm">سياسة الخصوصية</a>
      <a href="#" className="hover:text-yellow-400 text-sm">الشروط والأحكام</a>
    </div>
  </div>
</footer>
    </div>
  );
}

