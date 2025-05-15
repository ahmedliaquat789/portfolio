type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    title: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Portfolio",
    fullName: "Muhammad Ahmad",
    email: "ahmdliaqat@gmail.com",
  },
  hero: {
    name: "Muhammad Ahmad",
    p: ["Specialized in developing intelligent", "computer vision systems and machine learning"],
    title: "Machine Learning & Computer Vision Engineer",
    location: "Pakistan",
    social: {
      github: "https://github.com/ahmedliaquat789",
      linkedin: "https://linkedin.com/in/ahmedliaquat742/"
    }
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me.",
      content: `I'm a Computer Science graduate from COMSATS University, Wah Campus, with a strong passion for AI, Machine Learning, Computer Vision, and Generative AI. I've built expertise in Python, Deep Learning, and full-stack development using React.js, Flask, and AWS.

My experience includes developing real-world AI solutions such as brain tumor classifiers, music genre detectors, and video transformation tools using Stable Diffusion, GANs, and ESRGAN. I've also delivered scalable applications like AI-based hair color changers and virtual makeup systems.

I'm driven to innovate in GenAI and Computer Vision, and I aim to contribute to impactful, production-grade solutions through continuous learning and collaboration.`,
    },
    experience: {
      p: "My academic background",
      h2: "Education",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
