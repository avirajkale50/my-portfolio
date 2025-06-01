import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { delay } from "motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        duration={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32 "
        />
      </motion.div> */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        duration={{ duration: 0.6, delay: 0.6 }}
        className="flex items-end gap-2 text-xl md:text-4xl mb-3 font-Ovo"
      >
        Hi , I'm
        <span className="font-Ovo">Aviraj Kale</span>
        <Image src={assets.hand_icon} alt="hand icon" className="w-9" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        duration={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        git commit -m "innovation"
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        duration={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I’m a computer engineer passionate about building intelligent and
        efficient systems. I specialize in writing clean, scalable code that
        powers Web, Databases and Cloud technologies. From problem-solving to
        production-ready solutions, I turn ideas into reality through code. 🚀
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="icon" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={{ duration: 0.6, delay: 1 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
        >
          My resume
          <Image src={assets.download_icon} alt="icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
