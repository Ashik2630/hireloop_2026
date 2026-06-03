import React from "react";
import { Search, MapPin } from "lucide-react";

export default function JobHero() {
  return (
    <div className="flex min-h-150 w-full flex-col items-center justify-center bg-[#0B0B0F] px-4 py-16 text-white relative overflow-hidden">
      {/* Optional: Subtle background glow/grid elements to mimic the design */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_60%)]" />

      {/* Container matching the bounding box intent */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* 1. Top Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-[#16161C]/80 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-400 backdrop-blur-sm">
          <span role="img" aria-label="briefcase" className="text-sm">
            💼
          </span>
          <span className="font-mono text-zinc-200">50,000+</span> NEW JOBS THIS
          MONTH
        </div>

        {/* 2. Main Heading */}
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* 3. Subtitle / Description */}
        <p className="mb-10 max-w-2xl text-base text-zinc-400 md:text-lg font-light leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* 4. Dual-Input Search Bar Container */}
        <div className="flex w-full max-w-3xl flex-col rounded-2xl border border-zinc-800 bg-[#121218]/90 p-2 shadow-2xl backdrop-blur-md sm:rounded-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            {/* Left Input: Job Title */}
            <div className="flex w-full items-center gap-3 px-3 py-2">
              <Search className="h-5 w-5 shrink-0 text-zinc-500" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:ring-0"
              />
            </div>

            {/* Divider Line (Only visible on desktop) */}
            <div className="hidden h-8 w-px bg-zinc-800 sm:block" />

            {/* Right Input: Location */}
            <div className="flex w-full items-center gap-3 px-3 py-2">
              <MapPin className="h-5 w-5 shrink-0 text-zinc-500" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:ring-0"
              />
            </div>

            {/* Search Button */}
            <button className="flex h-11 w-full items-center justify-center rounded-xl bg-[#4F46E5] text-white transition-colors duration-200 hover:bg-[#4338CA] sm:h-11 sm:w-11 sm:shrink-0 sm:rounded-full">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 5. Trending Positions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
          <span className="text-zinc-500 mr-1">Trending Position</span>
          <button className="rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:bg-zinc-800 transition">
            Product Designer
          </button>
          <button className="rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:bg-zinc-800 transition">
            AI Engineering
          </button>
          <button className="rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:bg-zinc-800 transition">
            Dev-ops Engineer
          </button>
        </div>
      </div>
    </div>
  );
}
