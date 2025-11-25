import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-10"
      >
        Why People <span className="text-primary">Love Our Platform</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-semibold mb-3">Fast & Reliable Services</h3>
          <p className="text-gray-600 leading-relaxed">
            Our platform ensures instant processing with minimal delays. Whether
            you are booking, recharging, or paying, our optimized system delivers
            fast, secure, and highly reliable service every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-semibold mb-3">Trusted by Thousands</h3>
          <p className="text-gray-600 leading-relaxed">
            With a growing user base and thousands of daily transactions, people
            trust our platform for convenience, accuracy, and best-in-class
            support. You're always in safe hands with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
          <p className="text-gray-600 leading-relaxed">
            We use advanced encryption and multiple security layers to protect
            your payments. All transactions are monitored and verified to ensure
            your complete safety and peace of mind.
          </p>
        </motion.div>
      </div>

      {/* Long Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-14 bg-blue-50 p-8 rounded-2xl shadow-inner"
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">A Platform Built for Everyone</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Whether you're a regular user or a business owner, our ecosystem is
          designed to bring convenience right to your fingertips. We constantly
          enhance our platform with new features, better security, and smoother
          performance. With continuous upgrades, fresh UI, powerful tools, and a
          seamless experience, we aim to provide a modern digital environment
          where everything works effortlessly. You're not just using a service —
          you're experiencing a future-ready platform built with care, passion,
          and innovation.
        </p>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
