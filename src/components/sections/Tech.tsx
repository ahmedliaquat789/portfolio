import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="bg-[#0e0e23] p-5 rounded-lg w-full min-w-[200px] flex flex-col items-center justify-center 
                    hover:bg-[#161638] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
                    group relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 
                      group-hover:opacity-70 blur-xl transition duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#080820] flex items-center justify-center overflow-hidden mb-4
                        shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_20px_rgba(129,140,248,0.5)]
                        transition-all duration-300">
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        </div>
        <h3 className="text-white text-lg font-medium group-hover:text-indigo-300 transition-colors duration-300">{name}</h3>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <section className="relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 
                    bg-gradient-to-br from-indigo-900/20 to-purple-900/20 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header useMotion={true} p="My tech stack" h2="Skills." />
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px] mb-12"
        >
          Technical expertise across multiple domains including web development, machine learning, and data science.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard name={technology.name} icon={technology.icon} />
            </motion.div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
