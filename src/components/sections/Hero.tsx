import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { SocialIcon } from "../../constants/SocialIcon";
import profileImage from "../../assets/image.webp";
import backgroundVideo from "../../assets/27669-365224683.mp4";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/27669-365224683.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={`mx-auto max-w-7xl ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10 z-10 w-full`}>
        {/* Left side - Profile Card */}
        <div className="bg-[#12071f] w-full max-w-md rounded-3xl p-8 shadow-xl backdrop-blur-sm bg-opacity-50 border border-[#2a1e3a]">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-[#915EFF] mb-6 mx-auto relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4d94ff] via-[#915EFF] to-[#D92E6A] opacity-30"></div>
              
              {/* The image */}
              <img 
                src={profileImage} 
                alt={config.hero.name} 
                className="w-full h-full object-cover relative z-5"
                style={{ 
                  objectPosition: 'center center',
                  transform: 'scale(1.2)' // Zoom in effect
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200x200.png?text=Profile";
                }}
              />
            </div>
            
            {/* Name & Title */}
            <h2 className="text-3xl font-bold text-[#4d94ff] mb-2 text-center">
              {config.hero.name}
            </h2>
            <div className="w-full">
              <p className="text-[#915EFF] text-lg mb-1 text-left">Specialization:</p>
              <p className="text-white text-xl font-semibold mb-4 text-left">
                {config.hero.title}
              </p>
            </div>
            
            {/* Location */}
            <div className="flex items-center mb-6 justify-center">
              <span className="text-secondary">Based in: </span>
              <span className="text-white ml-2">{config.hero.location}</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-2 justify-center">
              <SocialIcon href={config.hero.social.github} platform="github" />
              <SocialIcon href={config.hero.social.linkedin} platform="linkedin" />
              <SocialIcon href={`mailto:${config.html.email}`} platform="email" />
            </div>
          </div>
        </div>

        {/* Right side - Introduction */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="mb-2 px-4 py-2 bg-black bg-opacity-30 rounded-full text-white text-sm">
            Let's meet!
          </div>
          
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            I'm <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#4d94ff] to-[#915EFF]"
              style={{ textShadow: "0 0 12px rgba(77, 148, 255, 0.6)" }}
            >
              {config.hero.name.toUpperCase()}
            </span>
          </h1>
          
          <div className="mt-6 space-y-4">
            <p className="text-secondary text-lg sm:text-xl">
                Specialized in developing intelligent <span className="text-white">computer vision systems</span> and <span className="text-white">machine learning</span> models 
                that solve real-world problems with cutting-edge AI techniques.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#915EFF] rounded-md text-white font-medium hover:bg-opacity-80 transition-all"
              >
                My Work
              </motion.a>
              
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 rounded-md text-white font-medium hover:border-[#915EFF] transition-all"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-6 bottom-10 hidden lg:flex flex-col items-center">
        <motion.div 
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex flex-col items-center"
        >
          <div className="rotate-90 text-secondary text-xs tracking-[0.2em] mb-8">SCROLL FOR MORE</div>
          <div className="h-16 w-[1px] bg-secondary opacity-50"></div>
        </motion.div>
      </div>
      
      {/* Mobile scroll indicator */}
      <div className="xs:bottom-10 absolute bottom-10 flex w-full items-center justify-center z-10 lg:hidden">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
