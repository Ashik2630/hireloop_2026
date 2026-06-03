"use client";
import React, { useState } from "react";
import { Crown, BarChart3, Zap, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <Crown className="h-4 w-4 text-pink-400" />,
      iconBg: "bg-pink-950/40 border-pink-900/50",
      priceMonthly: 0,
      priceYearly: 0,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      ctaText: "Choose This Plan",
      isFeatured: false,
    },
    {
      name: "Growth",
      icon: <BarChart3 className="h-4 w-4 text-purple-400" />,
      iconBg: "bg-purple-950/40 border-purple-900/50",
      priceMonthly: 17,
      priceYearly: 12, // example discounted price
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      ctaText: "Choose This Plan",
      isFeatured: true,
    },
    {
      name: "Premium",
      icon: <Zap className="h-4 w-4 text-indigo-400" />,
      iconBg: "bg-indigo-950/40 border-indigo-900/50",
      priceMonthly: 99,
      priceYearly: 79, // example discounted price
      subtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      ctaText: "Choose This Plan",
      isFeatured: false,
    },
  ];

  return (
    <section className="w-full bg-black py-24 px-4 sm:px-6 lg:px-8 text-zinc-100 font-sans selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-1 bg-indigo-500 rounded-sm"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Pricing
          </span>
          <span className="w-1 h-1 bg-indigo-500 rounded-sm"></span>
        </div>

        {/* Main Title */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-xl mb-10 leading-tight">
          Pay for the leverage,
          <br />
          not the listings
        </h2>

        {/* Period Selector Toggle */}
        <div className="flex items-center bg-zinc-900/60 p-1 rounded-full border border-zinc-800/80 mb-14">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              billingPeriod === "monthly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              billingPeriod === "yearly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="bg-magenta-gradient px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-linear-to-r from-pink-500 to-fuchsia-600 scale-95 origin-left">
              25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {plans.map((plan, index) => {
            const currentPrice =
              billingPeriod === "monthly"
                ? plan.priceMonthly
                : plan.priceYearly;

            return (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                key={index}
                className={`relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 bg-[#0A0A0F] border ${
                  plan.isFeatured
                    ? "border-zinc-700/90 shadow-[0_0_30px_rgba(124,58,237,0.08)] scale-[1.02] z-10"
                    : "border-zinc-900/80 shadow-xl"
                }`}
              >
                <div>
                  {/* Card Header Top */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex items-center justify-center p-2 rounded-lg border ${plan.iconBg}`}
                      >
                        {plan.icon}
                      </div>
                      <span className="text-base font-medium text-zinc-200">
                        {plan.name}
                      </span>
                    </div>

                    {/* Price display */}
                    <div className="flex items-baseline text-white">
                      <span className="text-3xl font-semibold tracking-tight">
                        $
                      </span>
                      <span className="text-4xl font-bold tracking-tight mx-0.5">
                        {currentPrice}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-medium tracking-normal">
                        /month
                      </span>
                    </div>
                  </div>

                  {/* Subtitle Line */}
                  <p className="text-xs font-medium text-zinc-300 mb-5">
                    {plan.subtitle}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2.5 text-xs text-zinc-400"
                      >
                        <div className="flex items-center justify-center p-0.5 rounded bg-zinc-900 border border-zinc-800 shrink-0 mt-0.5">
                          <Plus
                            className="h-2.5 w-2.5 text-zinc-500"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action Button */}
                <button
                  className={`w-full group flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-medium transition-all duration-200 ${
                    plan.isFeatured
                      ? "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800/60 hover:bg-zinc-800/80 hover:text-white"
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
