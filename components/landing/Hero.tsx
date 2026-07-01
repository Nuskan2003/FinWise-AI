"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
        >
          <Sparkles className="h-4 w-4" />
          AI Powered Personal Finance
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl"
        >
          Take Control of Your
          <span className="text-emerald-500">
            {" "}Money
          </span>

          <br />

          Smarter with AI
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-slate-600"
        >
          Track your income, manage expenses, plan budgets,
          achieve savings goals, and receive intelligent
          financial insights powered by Artificial Intelligence.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            Get Started

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            View Demo
          </Button>
        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div>
            <h2 className="text-4xl font-bold text-emerald-500">
              10K+
            </h2>

            <p className="mt-2 text-slate-600">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-emerald-500">
              1M+
            </h2>

            <p className="mt-2 text-slate-600">
              Transactions Tracked
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-emerald-500">
              98%
            </h2>

            <p className="mt-2 text-slate-600">
              Customer Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}