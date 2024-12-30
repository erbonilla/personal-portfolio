'use client';
import { motion } from "framer-motion";
import Head from "next/head";
import Heading from "./Heading";
import { pricingPlans, checkIcon } from "@/assets";

const PricingPlans = () => {
  return (
    <div 
      id="pricing" // Ensures this section links correctly with the Navbar
      className="py-20"
    >
      <Heading text="Pricing Plans" />
      <div className="h-full flex lg:flex-col items-center justify-between gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="w-[350px] xl:w-[300px] sm:w-[270px] bg-zinc-50 flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 shadow-lg dark:bg-zinc-700 transition-colors"
          >
            <h1 className="text-xl lg:text-lg font-light tracking-wide text-center dark:text-white transition-colors">
              {plan.title}
            </h1>
            <span className="text-2xl lg:text-xl text-center dark:text-white transition-colors">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-x-3">
                  <span className="text-2xl text-yellow-500">
                    {checkIcon}
                  </span>
                  <li className="text-[15px] font-light tracking-wide dark:text-white transition-colors">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-sm font-light text-center dark:text-gray-200 transition-colors">
              <span className="font-semibold">Ideal for:</span> {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;