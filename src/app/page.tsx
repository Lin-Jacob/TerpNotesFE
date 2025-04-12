"use client";

import Image from "next/image"
import Link from "next/link"

import Grid from "@/../public/assets/images/grid.svg"
import Logo from "@/../public/assets/images/logo.svg"

import Flower from "@/../public/assets/images/decorations/flower_drawing.svg"
import Notebook from "@/../public/assets/images/decorations/notebook_drawing.svg"
import SmallFlower from "@/../public/assets/images/decorations/small_flower_drawing.svg"
import UMDLogo from "@/../public/assets/images/decorations/umd_logo_drawing.svg"

import Equation from "@/../public/assets/images/decorations/equation.svg"
import Hearts from "@/../public/assets/images/decorations/hearts.svg"
import Lightbulb from "@/../public/assets/images/decorations/lightbulb.svg"
import PieChart from "@/../public/assets/images/decorations/pie_chart.svg"

import InstagramIcon from "@/../public/assets/images/decorations/instagram_icon.svg"
import TwitterIcon from "@/../public/assets/images/decorations/twitter_icon.svg"
import FacebookIcon from "@/../public/assets/images/decorations/facebook_icon.svg"

import { useState } from "react"

const slides = [
  {
    title: "Discover Quality Notes",
    description: "Browse top-rated notes across hundreds of UMD courses. All content is student-created and curated for clarity and usefulness.",
    graphic: "",
  },
  {
    title: "Easily Share Your Notes",
    description: "Help your fellow Terps by uploading your class notes. Gain recognition and contribute to the UMD community effortlessly.",
    graphic: "",
  },
  {
    title: "Organize Your Study Life",
    description: "Keep all your favorite notes in one place, track what you’ve read, and build your own custom study library.",
    graphic: "",
  },
  {
    title: "Collaborate With Peers",
    description: "Follow classmates, comment on notes, and build study groups all within TerpNotes. Learning is better together.",
    graphic: "",
  },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <header className="hidden md:flex fixed top-0 justify-center w-full pt-6 z-40 select-none backdrop-blur-md">
        <nav className="w-full max-w-[80%] rounded-2xl border border-[#e0d7cb] bg-[#F9F1E5]/90 px-6 py-1 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="TerpNotes Logo"
              width={30}
              height={30}
            />
            <h1 className="text-xl text-[#1F1F1F] font-bold">
              TerpNotes
            </h1>
          </div>
          <div className="flex gap-3">
            <Link href="/signup" passHref>
              <button className="bg-[#CD1015] hover:bg-[#a60d11] transition-all text-white px-5 py-2 rounded-xl border hover:scale-105">
                Sign Up
              </button>
            </Link>

            <Link href="/login" passHref>
              <button className="bg-[#CD1015] hover:bg-[#a60d11] transition-all text-white px-5 py-2 rounded-xl border hover:scale-105">
                Log In
              </button>
            </Link>

            <Link href="/browse-notes" passHref>
              <button className="bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-5 py-2 rounded-xl border-[#CD1015]">
                Browse Notes
              </button>
            </Link>

          </div>
        </nav>
      </header>

      <div className="md:hidden fixed top-0 left-0 z-50 w-full px-4 py-4 bg-[#F9F1E5] border-b border-[#e0d7cb] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="TerpNotes Logo" width={30} height={30} />
          <h1 className="text-lg font-bold text-[#1F1F1F]">TerpNotes</h1>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="text-[#1F1F1F] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setSidebarOpen(false)}>
          <div
            className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-[#F9F1E5] border-r border-[#e0d7cb] p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-[#1F1F1F]">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <svg className="w-5 h-5 text-[#1F1F1F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              <button className="bg-[#CD1015] text-white px-4 py-2 rounded-lg">Sign Up</button>
              <button className="bg-[#CD1015] text-white px-4 py-2 rounded-lg">Log In</button>
              <button className="border border-[#CD1015] text-[#CD1015] px-4 py-2 rounded-lg">Browse Notes</button>
            </nav>
          </div>
        </div>
      )}

      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F9F1E5] pt-32 relative">
        <div className="text-center px-4 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 space-y-2 text-[#1F1F1F]">
            <span className="relative inline-block">
              All the{" "}
              <span className="relative inline-block">
                Notes
                <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-2 left-0 w-full h-[0.6em]" preserveAspectRatio="none">
                  <path d="M2 15C20 5 80 20 98 10" stroke="#CD1015" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              .
            </span>
            <br />
            <span className="relative inline-block">
              None of the{" "}
              <span className="relative inline-block">
                Stress
                <svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 w-[120%] h-[0.4em] -translate-y-1/5 -translate-x-1/2" preserveAspectRatio="none">
                  <line x1="10" y1="5" x2="190" y2="5" stroke="#CD1015" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              .
            </span>
          </h2>
          <p className="text-[#333] max-w-xl mx-auto text-lg mt-2">
            TerpNotes is a UMD-focused note-sharing and studying platform where students compile, rate, and explore notes across semesters.
          </p>
          <div className="mt-8">
            <button className="bg-[#CD1015] hover:bg-[#a60d11] text-white px-6 py-3 rounded-xl border hover:scale-105 transition-all">
              Browse Notes
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image src={Flower} alt="Flower" className="logo floating-logo" />
          <Image src={Notebook} alt="Notebook" className="logo floating-logo" />
          <Image src={SmallFlower} alt="Small Flower" className="logo floating-logo hidden md:block" />
          <Image src={UMDLogo} alt="UMD Logo" className="logo floating-logo" />
          <Image src={Equation} alt="Equation" className="logo floating-logo" />
          <Image src={Hearts} alt="Hearts" className="logo floating-logo" />
          <Image src={Lightbulb} alt="Lightbulb" className="logo floating-logo" />
          <Image src={PieChart} alt="Pie Chart" className="logo floating-logo hidden md:block" />
        </div>

        <div className="relative w-1/2 overflow-hidden mt-10 select-none">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F9F1E5] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F9F1E5] to-transparent z-10" />

          <div className="whitespace-nowrap animate-marquee text-[#1F1F1F] font-semibold text-lg flex gap-2 md:gap-16">
            {[
              "CMSC131", "MATH140", "ENES100", "PHYS161", "BSCI170",
              "ECON200", "ARTH200", "PSYC100", "HIST200", "STAT400"
            ].map((course, index) => (
              <span key={index} className="inline-block">
                {course}
              </span>
            ))}

            {[
              "CMSC131", "MATH140", "ENES100", "PHYS161", "BSCI170",
              "ECON200", "ARTH200", "PSYC100", "HIST200", "STAT400"
            ].map((course, index) => (
              <span key={`dup-${index}`} className="inline-block">
                {course}
              </span>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#F9F1E5] py-10 flex flex-col items-center text-center border border-gray">
        <div className="flex items-center gap-3 mb-3">
          <Image src={Hearts} alt="Hearts" width={30} height={30} className="text-red-500" style={{ filter: 'invert(18%) sepia(87%) saturate(6875%) hue-rotate(357deg) brightness(88%) contrast(114%)' }} />
          <p className="text-lg md:text-xl font-semibold text-[#1F1F1F]">
            Loved by students at
          </p>
          <Image src={UMDLogo} alt="UMD Logo" width={32} height={32} />
          <Image src={Hearts} alt="Hearts" width={30} height={30} className="text-red-500" style={{ filter: 'invert(18%) sepia(87%) saturate(6875%) hue-rotate(357deg) brightness(88%) contrast(114%)' }} />
        </div>
        <p className="text-[#333] max-w-xl text-sm">
          Terps love to use TerpNotes to crush exams, organize their semesters, and share top-tier class notes!
        </p>
      </section>


      <section className="relative bg-[#F3E8D8] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#cd101533_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />



        <svg className="absolute top-24 left-4 w-28 opacity-10 animate-float" viewBox="0 0 100 20" fill="none">
          <path d="M0 10 C30 -10, 70 30, 100 10" stroke="#CD1015" strokeWidth="3" fill="none" />
        </svg>

        <svg className="absolute bottom-10 left-10 w-32 opacity-10 animate-pulse-slow" viewBox="0 0 150 50" fill="none">
          <path d="M10 25 Q30 5, 50 25 Q70 45, 90 25 Q110 5, 130 25" stroke="#CD1015" strokeWidth="2" fill="none" />
        </svg>

        <svg className="absolute bottom-16 right-10 w-40 animate-float opacity-10" viewBox="0 0 150 50" fill="none">
          <path d="M0 30 Q30 10, 60 30 T120 30" stroke="#CD1015" strokeWidth="2" fill="none" />
        </svg>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-[#1F1F1F] mb-4 relative inline-block">
            📚 <span className="relative inline-block">
              Notes
              <svg
                viewBox="0 0 100 20"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1 left-0 w-full h-[0.6em]"
                preserveAspectRatio="none"
              >
                <path d="M2 15C20 5 80 20 98 10" stroke="#CD1015" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>{" "}
            Library Preview
          </h2>

          <p className="text-[#333] text-lg mb-12 max-w-2xl mx-auto">
            Explore top-rated notes from popular UMD courses — curated and shared by students like you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { course: "CMSC131", title: "Intro to Java – Midterm Review", rating: 4.8 },
              { course: "MATH140", title: "Limits, Derivatives & Integrals", rating: 4.7 },
              { course: "PHYS161", title: "Mechanics Concept Summary", rating: 4.5 },
              { course: "BSCI170", title: "Cell Biology Final Guide", rating: 4.9 },
              { course: "ECON200", title: "Supply & Demand Diagrams", rating: 4.6 },
              { course: "PSYC100", title: "Memory & Learning Notes", rating: 4.4 }
            ].map((note, idx) => (
              <div
                key={idx}
                className="bg-[#F9F1E5] border border-[#e0d7cb] rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-sm text-[#CD1015] font-bold mb-1">
                  {note.course}
                </div>
                <div className="text-xl font-semibold text-[#1F1F1F] mb-2">
                  {note.title}
                </div>
                <div className="text-[#666] text-sm">⭐ {note.rating} rating</div>
                <div className="w-full flex items-end justify-end mt-4">
                  <button className="bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-5 py-2 rounded-xl border-[#CD1015]">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-[#CD1015] hover:bg-[#a60d11] text-white px-6 py-3 rounded-xl border hover:scale-105 transition-all">
              Browse All Notes
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#F9F1E5] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeIndex === index
                  ? "bg-[#CD1015] text-white shadow-md"
                  : "text-[#CD1015] hover:bg-[#f1dbcb]"
                  }`}

              >
                {slide.title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-12 border border-[#F3E8D8] shadow-sm rounded border-gray h-[500px]">
            <div className="w-full lg:w-1/2 text-left">
              <h3
                className="text-3xl font-extrabold text-[#1F1F1F] mb-4"

              >
                {slides[activeIndex].title}
              </h3>
              <p className="text-[#333] text-lg leading-relaxed max-w-xl">
                {slides[activeIndex].description}
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={slides[activeIndex].graphic}
                alt="Slide Graphic"
                className="max-h-[400px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3E8D8] py-20 px-6 relative overflow-hidden">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1F1F1F] mb-4 relative inline-block" style={{ fontFamily: "sen" }}>
            💬 Student{" "}
            <span className="relative inline-block">
              Reviews
              {/* Red underline SVG */}
              <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-2 left-0 w-full h-[0.6em]" preserveAspectRatio="none">
                <path d="M2 15C20 5 80 20 98 10" stroke="#CD1015" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>{" "}
            & Ratings
          </h2>
          <p className="text-[#333] max-w-xl mx-auto text-lg mt-2">
            Hear what other Terps are saying about the notes that helped them succeed.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Habib A.",
              major: "Computer Science",
              review: "The CMSC131 notes were a lifesaver before the midterm. Super clear and well-organized!",
              rating: 5,
            },
            {
              name: "Olaniyi S.",
              major: "Psychology",
              review: "Loved the layout of the PSYC100 materials — I used them all semester long!",
              rating: 4.8,
            },
            {
              name: "Kevin Y.",
              major: "Biology",
              review: "Honestly better than my own notes. Helped me review fast before finals.",
              rating: 4.7,
            },
          ].map((student, idx) => (
            <div
              key={idx}
              className="bg-[#F9F1E5] border border-[#e0d7cb] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#CD1015] text-sm font-semibold mb-1" style={{ fontFamily: "sen" }}>
                {student.name} • {student.major}
              </div>
              <p className="text-[#1F1F1F] text-base mb-3" style={{ fontFamily: "sen" }}>
                “{student.review}”
              </p>
              <div className="text-[#666] text-sm">⭐ {student.rating} rating</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/login">
            <button className="bg-[#CD1015] hover:bg-[#a60d11] text-white px-6 py-3 rounded-xl border hover:scale-105 transition-all">
              Write a Review
            </button>
          </Link>
        </div>

        <div className="absolute -top-10 -left-10 opacity-10 w-64 h-64 pointer-events-none rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#CD1015" strokeWidth="4" strokeDasharray="4 8" />
          </svg>
        </div>
        <div className="absolute -bottom-16 -right-16 opacity-10 w-64 h-64 pointer-events-none rotate-[25deg]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 90 C 40 20, 60 80, 90 10" stroke="#CD1015" strokeWidth="2" />
          </svg>
        </div>
      </section>

      <section className="relative bg-[#F9F1E5] py-24 px-6 overflow-hidden">
        <svg className="absolute top-10 left-8 w-32 opacity-10 animate-float" viewBox="0 0 100 20" fill="none">
          <path d="M0 10 C30 -10, 70 30, 100 10" stroke="#CD1015" strokeWidth="3" fill="none" />
        </svg>

        <svg className="absolute bottom-16 right-10 w-40 opacity-10 animate-pulse-slow" viewBox="0 0 120 20" fill="none">
          <path d="M0 15 Q30 5, 60 15 T120 15" stroke="#CD1015" strokeWidth="2" fill="none" />
        </svg>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F] mb-6">
            Ready to{" "}
            <span className="relative inline-block">
              Join
              <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-3 left-0 w-full h-[0.6em]" preserveAspectRatio="none">
                <path d="M2 15C20 5 80 20 98 10" stroke="#CD1015" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>{" "}
            the Study Revolution?
          </h2>
          <p className="text-lg text-[#333] mb-10">
            Sign up today and explore the best UMD notes, study guides, and resources — curated by students, for students.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#CD1015] hover:bg-[#a60d11] transition-all text-white px-6 py-3 rounded-xl border hover:scale-105 text-lg">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-6 py-3 rounded-xl border-[#CD1015] text-lg">
              Browse Notes
            </button>
          </div>
        </div>
      </section>



      <footer className="bg-[#F9F1E5] border-t border-[#e0d7cb] px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex items-center gap-3">
            <Image src={Logo} alt="TerpNotes Logo" width={30} height={30} />
            <span className="text-xl font-semibold text-[#1F1F1F]">
              TerpNotes
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#333] text-sm font-medium">
            <a href="/terms-of-service" target="_blank" className="hover:text-[#CD1015] transition flex">
              Terms of Service
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 3H21m0 0v7.5M21 3L10 14M5 5h5m-5 0v14h14v-5"
                  />
                </svg>
              </span>
            </a>
            <a href="/privacy-policy" target="_blank" className="hover:text-[#CD1015] transition flex">
              Privacy Policy
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 3H21m0 0v7.5M21 3L10 14M5 5h5m-5 0v14h14v-5"
                  />
                </svg>
              </span>
            </a>
            <a href="/about" className="hover:text-[#CD1015] transition">About</a>
            <a href="/contact" className="hover:text-[#CD1015] transition">Contact</a>
          </div>

          <div className="flex gap-3">
            <a href="https://www.instagram.com/terpnotesumd/" target="_blank" className="w-[25px] h-[25px] hover:scale-110 transition-transform flex items-center justify-center" aria-label="Instagram">
              <Image src={InstagramIcon} alt="Instagram" width={22.5} height={22.5} />
            </a>
            <a href="https://x.com/terpnotesumd/" target="_blank" className="w-[25px] h-[25px] hover:scale-110 transition-transform flex items-center justify-center" aria-label="Twitter">
              <Image src={TwitterIcon} alt="Twitter" width={25} height={25} />
            </a>
            <a href="#" className="h-[25px] hover:scale-110 transition-transform flex items-center justify-center" aria-label="Facebook">
              <Image src={FacebookIcon} alt="Facebook" width={12} height={12} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#e0d7cb] pt-6 text-center text-sm text-[#666]">
          © {new Date().getFullYear()} TerpNotes. Built with ❤️ at University of Maryland, College Park.
        </div>
      </footer>

    </div>
  );
}
