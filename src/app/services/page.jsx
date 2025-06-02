'use client'
import { profile } from '@/constants/AppData';
import { fadeIn } from '@/constants/Motions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ServicesPage = () => {
  return (
   <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-white via-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-800">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {profile.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="relative group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-500"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="p-6 relative z-10 bg-white">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl mb-4">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
