import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// EmailJS configuration - these values would ideally be in environment variables
const SERVICE_ID = "service_9b5ebfa";
const TEMPLATE_ID = "template_4j7i8m8";
const PUBLIC_KEY = "9yUlbnKjGTpPfgN_I";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Use formRef.current directly with EmailJS
    if (formRef.current) {
      emailjs
        .sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            
            setForm({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-12 flex flex-col gap-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {config.contact.form.name.span}
              </span>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder={config.contact.form.name.placeholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {config.contact.form.email.span}
              </span>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder={config.contact.form.email.placeholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {config.contact.form.message.span}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={config.contact.form.message.placeholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
                required
              />
            </label>
            
            <input type="hidden" name="to_name" value={config.html.fullName} />
            <input type="hidden" name="to_email" value={config.html.email} />
            
            <button
              type="submit"
              className="bg-[#915EFF] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-80 transition-all"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
