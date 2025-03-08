"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
    {
        name: "Basic",
        price: "$9",
        duration: "month",
        features: ["Access to basic features", "Email support", "Limited integrations"],
    },
    {
        name: "Pro",
        price: "$29",
        duration: "month",
        features: [" All basic features", "Priority email support", "Advanced integrations"],
    },
    {
        name: "Enterprise",
        price: "Custom",
        duration: "",
        features: ["Dedicated account manager", "Custom integrations", "24/7 priority support"],
    },
]


export function Pricing() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold sm:text-4xl"
                >
                    Choose Your Plan
                </motion.h2>

                {/* Sub heading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                >
                    Flexible pricing for individuals and businesses of all sizes.
                </motion.p>

                {/* Pricing Cards */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-semibold">{plan.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {plan.price} <span className="text-sm">{plan.duration}</span>
                            </p>

                            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-6 w-full px-4 py-2 text-white bg-[#6c63ff] hover:bg-[#4a41f8] dark:bg-[#9892fc] dark:hover:bg-[#817afa] cursor-pointer rounded-lg transition-colors duration-300">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}