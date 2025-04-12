"use client";

import Image from "next/image"
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

import { useState } from "react"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-screen overflow-x-hidden">
      <header className="hidden md:flex fixed top-0 justify-center w-full pt-6 z-40 select-none backdrop-blur-md">
        <nav className="w-full max-w-[80%] rounded-2xl border border-[#e0d7cb] bg-[#F9F1E5]/90 px-6 py-1 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="TerpNotes Logo"
              width={30}
              height={30}
            />
            <h1 className="text-xl text-[#1F1F1F]" style={{ fontFamily: "sen" }}>
              TerpNotes
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="cursor-pointer bg-[#CD1015] hover:bg-[#a60d11] transition-all text-white px-5 py-2 rounded-xl border hover:scale-105">
              Sign Up
            </button>
            <button className="cursor-pointer bg-[#CD1015] hover:bg-[#a60d11] transition-all text-white px-5 py-2 rounded-xl border hover:scale-105">
              Log In
            </button>
            <button className="cursor-pointer bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-5 py-2 rounded-xl border-[#CD1015]">
              Browse Notes
            </button>
          </div>
        </nav>
      </header>

      <div className="md:hidden fixed top-0 left-0 z-50 w-full px-4 py-4 bg-[#F9F1E5] border-b border-[#e0d7cb] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="TerpNotes Logo" width={30} height={30} />
          <h1 className="text-lg font-bold text-[#1F1F1F]" style={{ fontFamily: "sen" }}>TerpNotes</h1>
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
              <h2 className="text-lg font-bold text-[#1F1F1F]" style={{ fontFamily: "sen" }}>Menu</h2>
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

      <section className="min-h-screen flex items-center justify-center bg-[#F9F1E5] pt-32 relative">
        <div className="text-center px-4 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 space-y-2 text-[#1F1F1F]" style={{ fontFamily: "sen" }}>
            <span className="relative inline-block">
              All the{" "}
              <span className="relative inline-block">
                Notes
                <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1 left-0 w-full h-[0.6em]" preserveAspectRatio="none">
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
                <svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 w-[120%] h-[0.4em] -translate-y-1/2 -translate-x-1/2" preserveAspectRatio="none">
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
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#F3E8D8]">
        <div className="text-3xl text-[#1F1F1F]">📚 Notes Library Preview</div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#F9F1E5]">
        <div className="text-3xl text-[#1F1F1F]">📈 Analytics & Insights</div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#F3E8D8]">
        <div className="text-3xl text-[#1F1F1F]">💬 Student Reviews & Ratings</div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#F9F1E5]">
        <div className="text-3xl text-[#1F1F1F]">📥 Call to Action or Signup</div>
      </section>
    </div>
  );
}
