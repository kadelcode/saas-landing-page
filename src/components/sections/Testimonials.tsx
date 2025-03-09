"use client"; // A client component

/**
 * Import the necessary components and styles from the `Swiper` library,
 * which is used to create a carousel or slider.
 */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/**
 * Imports the `motion` component from the `framer-motion` library,
 * which is used for animations.
 */
import { motion } from "framer-motion";

/* Imports `Star` icon from `lucide-react` library */
import { Star } from "lucide-react";

/**
 * This defines an array of objects, where each object represents a testimonial.
 * Each testimonial has a `name`, `initials`, `rating`, and `review`.
 */
const testimonials = [
    {
        name: "John Doe",
        initials: "JD",
        rating: 5,
        review: "This platform transformed my workflow. Highly recommend!",
    },
    {
        name: "Willock Smith",
        initials: "WS",
        rating: 4,
        review: "A great experience overall. The UI is smooth and fast!",
    },
    {
        name: "Kate Kitty",
        initials: "KK",
        rating: 5,
        review: "Wow! Great user experience, love it!"
    },
    {
        name: "Michael Brown",
        initials: "MB",
        rating: 4,
        review: "Fantastic tool with amazing support. Best decision ever!",
    },
];


/* React functional component */
export function Testimonials() {
    return ( // Returns a JSX structure
        <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                {/** An animated h2 tag using `framer-motion` */}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold sm:text-4xl"
                >
                    What Our Users Say
                </motion.h2>

                {/* An animated paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                >
                    Hear from our satisfied customers who love our platform.
                </motion.p>

                {/* Swiper Carousel */}
                {/**
                 * This sets up the Swiper carousel with pagination and autoplay features.
                 * It defines the space between slides, the number of slides per view,
                 * and the auto delay.
                 */}
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 4000 }}
                  pagination={{ clickable: true }}
                  className="mt-12 bg-white dark:bg-gray-800 shadow-md"
                >
                    {/* Maps over the `testimonials` array to create a `SwiperSlide` for each testimonial */}
                    {testimonials.map((testimonial, index) => ( 
                        <SwiperSlide key={index}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 }}
                              className="p-6 rounded-lg"
                            >
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 flex items-center justify-center bg-primary text-white dark:text-gray-900 rounded-full text-xl font-bold">
                                        {testimonial.initials}
                                    </div>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                                <div className="mt-2 flex justify-center">
                                    {/* Creates a row of star icons to representing the rating */}
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`w-5 h-5 ${
                                            i < testimonial.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"
                                          }`}
                                          fill={i < testimonial.rating ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-gray-600 dark:text-gray-300 mb-2">
                                    {testimonial.review}
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}