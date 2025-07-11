import React, { useEffect, memo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles } from "lucide-react";

const Header = memo(() => (
  <div className="text-center mb-8 px-[5%] ">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      Education
    </h2>
  </div>
));

const milestones = [
  {
    title: "Indian Institute of Technology Patna",
    subtitle: "Bachelor of Technology in Mechanical Engineering  |  November 2022 – Present",
    desc: "CPI - 7.66",
    color: "#6366f1"
  },
  {
    title: "M.P. International School and Jr. College, Pune",
    subtitle: "Maharashtra State Board Of Higher Secondary Education - XII | June 2021 – March 2022",
    desc: "Percentage: 84.83%",
    color: "#a855f7"
  },
  {
    title: "The New Millennium English Medium School and Jr. College, Pune",
    subtitle: "Maharashtra State Board Of Secondary Education - X | June 2019 – March 2020",
    desc: "Percentage: 93.40%",
    color: "#22c55e"
  }
];

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      id="Education"
      className="min-h-screen relative px-[5%] lg:px-[10%] text-white"
    >
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-700/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-tr from-fuchsia-600/20 to-indigo-500/20 rounded-full blur-2xl animate-float" />
      </div>

      <Header />

      <div className="relative z-10 flex flex-col items-center space-y-12">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="w-full max-w-4xl bg-[#0a0a1f] backdrop-blur-lg border border-white/10 rounded-2xl p-8 transform transition-transform duration-500 shadow-2xl hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={idx * 200 + 200}
          >
            <div className="flex items-center mb-4">
              <span
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: m.color }}
              />
              <h3 className="text-2xl font-semibold text-white font-sans ">
                {m.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 italic font-sans">
              {m.subtitle}
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed text-sm">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Education);
