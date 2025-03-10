"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {


    return (
        <section className='relative mt-14 flex flex-col items-center justify-center text-center py-20 px-6'>
            {/* Hero Content */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-bold sm:text-5xl'
            >
                Supercharge Your Business with Our <span className='text-[#6c63ff]'>AI-Powered</span> SaaS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mt-4 text-lg text-gray-600 dark:text-gray-300'
            >
                Increase efficiency, automate workflows, and grow revenue with our cutting-edge
                technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mt-6 flex space-x-4'
            >
                <Button size="lg" className='px-6 py-3 text-lg bg-[#6c63ff] hover:bg-[#6c63ff]/70 dark:text-white'>Get Started</Button>
                <Button size="lg" variant="outline" className='px-6 py-3 text-lg'>Learn More</Button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12"
            >
                <Image
                src="/images/ai-hero.svg"
                alt="Hero Illustration"
                width={600}
                height={400}
                priority
                className="rounded-lg shadow-lg"
                />
            </motion.div>
        </section>
    )
}