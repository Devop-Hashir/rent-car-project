'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const AboutPage = () => {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariant}
        className="text-5xl font-extrabold text-center mb-12"
      >
        About Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariant}
        >
          <Image
            src="/mason.jpg" // Replace with your image
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeVariant}
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-6 text-gray-600">
            At CarRentalX, we are passionate about delivering exceptional car rental experiences. With a focus
            on reliability, comfort, and affordability, we help people find the perfect ride for any occasion.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            To make car rentals simple, accessible, and trustworthy for everyone. We combine technology with
            personalized service to exceed expectations.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Customer-first approach</li>
            <li>Quality & Reliability</li>
            <li>Transparent pricing</li>
            <li>Innovation through technology</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
