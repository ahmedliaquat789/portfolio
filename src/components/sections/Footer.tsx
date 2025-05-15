import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { Link } from "react-router-dom";
import { SocialIcon } from "../../constants/SocialIcon";
import { config } from "../../constants/config";

const Footer = () => {
  return (
    <footer className="relative bg-primary py-10">
      {/* Gradient glow effect on the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent" />
      
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10" />

      <div className={`${styles.padding} max-w-7xl mx-auto relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#915EFF]" />
              <h3 className="text-white ml-3 text-xl font-bold">{config.html.title}</h3>
            </div>
            <p className="text-secondary text-sm max-w-xs">
              Creating stunning digital experiences with modern technologies and cutting-edge design.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href={config.hero.social.github} platform="github" />
              <SocialIcon href={config.hero.social.linkedin} platform="linkedin" />
              <SocialIcon href={`mailto:${config.html.email}`} platform="email" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xl font-bold">Get In Touch</h3>
            <p className="text-secondary text-sm">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-secondary hover:text-[#915EFF] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${config.html.email}`}
                  className="text-sm hover:text-[#915EFF] transition-colors duration-300"
                >
                  {config.html.email}
                </a>
              </div>
              <div className="flex items-center text-secondary hover:text-[#915EFF] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <a 
                  href={config.hero.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#915EFF] transition-colors duration-300"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center text-secondary hover:text-[#915EFF] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={config.hero.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#915EFF] transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-secondary text-sm"
          >
            © {new Date().getFullYear()} {config.html.title}. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex mt-4 md:mt-0"
          >
            <a href="#terms" className="text-secondary hover:text-[#915EFF] text-sm mx-2 transition-colors duration-300">
              Terms
            </a>
            <a href="#privacy" className="text-secondary hover:text-[#915EFF] text-sm mx-2 transition-colors duration-300">
              Privacy
            </a>
            <a href="#cookies" className="text-secondary hover:text-[#915EFF] text-sm mx-2 transition-colors duration-300">
              Cookies
            </a>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#915EFF] opacity-10 blur-xl animate-pulse" />
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#915EFF] opacity-10 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
};

export default Footer; 