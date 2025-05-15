import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

// Add custom styles for the timeline
import "./timeline.css";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        width: "100%",
        boxShadow: "none",
        padding: "35px 40px 35px 0",
        border: "none",
      }}
      contentArrowStyle={{ 
        display: "none" // Hide the arrow
      }}
      date=""
      iconStyle={{ 
        background: experience.iconBg, 
        boxShadow: "0 0 0 4px rgba(29, 24, 54, 0.3), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)" 
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[70%] w-[70%] object-contain"
          />
        </div>
      }
    >
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-[28px] font-bold text-white">{experience.title}</h3>
        <span className="text-[#915EFF] text-lg font-semibold">{experience.date}</span>
      </div>
      <p
        className="text-secondary text-[18px] font-semibold mb-6"
        style={{ margin: 0 }}
      >
        {experience.companyName}
      </p>

      <div className="mt-6 space-y-4">
        {experience.points.map((point, index) => (
          <p
            key={`experience-point-${index}`}
            className="text-white-100 text-[16px] leading-relaxed"
          >
            {point}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative min-h-screen">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-radial-gradient-cyan opacity-5" />
      
      {/* Gradient line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
      
      {/* Animated glowing elements */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-green-500 opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.7s' }} />

      <div className="relative z-10 pt-10 pb-24">
        <Header useMotion={true} {...config.sections.experience} />

        <div className="mt-16 flex flex-col">
          <VerticalTimeline
            layout="1-column-left"
            className="custom-timeline"
            animate={true}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "education");
