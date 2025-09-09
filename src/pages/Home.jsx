import React from "react";
import { NavLink } from "react-router-dom";

const featuredDishes = [
  {
    img: "https://images.unsplash.com/photo-1604908177522-f9f5b7da32d5",
    title: "شاورما دجاج",
    desc: "شاورما دجاج طازجة تقدم مع صوصات خاصة."
  },
  {
    img: "https://images.unsplash.com/photo-1606788075761-87981eeda1c9",
    title: "مشويات على الفحم",
    desc: "كباب، كفتة ولحم بتتبيلة شامية أصيلة."
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "صينية كرم الشام",
    desc: "صينية شامي غنية تناسب العائلات."
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[60vh] sm:h-[70vh] mt-16">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWMIg5--xOCpVp84HDqaKx63lQc3phgr0Eg&s"
          alt="مطعم شامي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 z-20">
          <div className="text-white max-w-full sm:max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              مطعم كرم الشام<br />المذاق الشامي الأصيل
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
              شاورما طازجة، مشويات على الفحم، وصواني تليق بمائدتكم.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:max-w-md">
              <NavLink 
                to="/menu" 
                className="bg-white/20 px-4 py-2 rounded text-white text-center font-semibold hover:bg-white/30 transition">
                تصفح المنيو
              </NavLink>
              <NavLink 
                to="/contact" 
                className="bg-white/20 px-4 py-2 rounded text-white text-center font-semibold hover:bg-white/30 transition">
                احجز اتصال
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-extrabold text-2xl text-center mb-10 text-primary">أشهر أطباقنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredDishes.map((dish, idx) => (
            <div key={idx} className="bg-white hover:-translate-y-1 transition shadow-md rounded-2xl overflow-hidden">
              <img src={dish.img} className="h-48 w-full object-cover" alt={dish.title} />
              <div className="p-4">
                <div className="font-extrabold text-lg">{dish.title}</div>
                <p className="text-sm sm:text-base text-gray-600 mt-1">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-6 shadow-md rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <h2 className="font-extrabold text-2xl sm:text-3xl">عروض الأسبوع</h2>
            <p className="text-gray-700 mt-4 text-base sm:text-lg">
              وجبة شاورما عربي دجاج + بطاطس + مشروب بـ
              <span className="font-bold text-gray-900"> 135 </span> جنيه فقط.
            </p>
            <NavLink
              to="/menu"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold shadow-lg transition mt-4 sm:mt-6"
            >
              اطّلع على باقي العروض
            </NavLink>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWMIg5--xOCpVp84HDqaKx63lQc3phgr0Eg&s"
            alt="مطعم شامي"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
