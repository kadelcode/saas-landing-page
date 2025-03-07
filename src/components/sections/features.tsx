import { motion } from 'framer-motion';
import { Code, ShieldCheck, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Developer Friendly",
    description: "Easily integrate with our powerful APIs and SDKs to enhance your workflows."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure & Reliable",
    description: "Our platform ensures top-notch security and uptime for your critical business needs."
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "AI-Powered Automation",
    description: "Leverage artificial intelligence to automate repetitive tasks and boost efficiency."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Why Choose Our Platform?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        >
          Our platform is designed to offer the best experience with cutting-edge technology.
        </motion.p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
