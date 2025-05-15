import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  // Project images
  brainTumor,
  musicGenre,
  textToSpeech,
  animateStill,
  hairColor,
  aiMakeup,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: "/tech/python.svg",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: "/tech/flask.svg",
  },
  {
    name: "FastAPI",
    icon: "/tech/fastapi.svg",
  },
  {
    name: "REST API",
    icon: "/tech/restapi.svg",
  },
  {
    name: "GAN",
    icon: "/tech/gan.svg",
  },
  {
    name: "TensorFlow",
    icon: "/tech/tensorflow.svg",
  },
  {
    name: "PyTorch",
    icon: "/tech/pytorch.svg",
  },
  {
    name: "OpenCV",
    icon: "/tech/opencv.svg",
  },
  {
    name: "Scikit-learn",
    icon: "/tech/scikit-learn.svg",
  },
  {
    name: "Keras",
    icon: "/tech/keras.svg",
  },
  {
    name: "NumPy",
    icon: "/tech/numpy.svg",
  },
  {
    name: "Pandas",
    icon: "/tech/pandas.svg",
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "BS Computer Science",
    companyName: "COMSATS University Islamabad, Wah Campus",
    icon: "/tech/education.svg",
    iconBg: "#1877F2",
    date: "2021 - 2025",
    points: [
      "Computer Science graduate from COMSATS University, Wah Campus, with a strong foundation in AI, Machine Learning, and Software Development."
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Brain Tumor Classification",
    description:
      "Trained a ResNet-50 model to classify brain MRIs into four categories: glioma, meningioma, pituitary tumor, and no tumor achieving high accuracy on a labeled medical dataset.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "computer vision",
        color: "green-text-gradient",
      },
      {
        name: "resnet50",
        color: "pink-text-gradient",
      },
    ],
    image: brainTumor,
    sourceCodeLink: "https://github.com/ahmedliaquat789/fyp",
  },
  {
    name: "Music Genre Classification & Recommendation System",
    description:
      "Designed a Feedforward Neural Network (FNN) trained on the GTZAN dataset to classify music genres from uploaded audio files and provide intelligent song recommendations.",
    tags: [
      {
        name: "audio processing",
        color: "blue-text-gradient",
      },
      {
        name: "neural networks",
        color: "green-text-gradient",
      },
      {
        name: "recommendation",
        color: "pink-text-gradient",
      },
    ],
    image: musicGenre,
    sourceCodeLink: "https://github.com/ahmedliaquat789",
  },
  {
    name: "Text-to-Speech System",
    description:
      "Built a real-time text-to-speech pipeline integrating natural language preprocessing and deep voice synthesis models for lifelike audio generation.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "voice synthesis",
        color: "green-text-gradient",
      },
      {
        name: "deep learning",
        color: "pink-text-gradient",
      },
    ],
    image: textToSpeech,
    sourceCodeLink: "https://github.com/ahmedliaquat789",
  },
  {
    name: "Animate Still Images",
    description:
      "Developed an animated portrait generator using Stable Diffusion and ControlNet to animate static images based on facial motion prompts and text input.",
    tags: [
      {
        name: "stable diffusion",
        color: "blue-text-gradient",
      },
      {
        name: "controlnet",
        color: "green-text-gradient",
      },
      {
        name: "computer vision",
        color: "pink-text-gradient",
      },
    ],
    image: animateStill,
    sourceCodeLink: "https://github.com/ahmedliaquat789",
  },
  {
    name: "Hair Color Changer",
    description:
      "Developed a Hair Color Transformation tool using StyleGAN2 and custom hair segmentation for accurate, frame-wise color editing and full video synthesis.",
    tags: [
      {
        name: "stylegan2",
        color: "blue-text-gradient",
      },
      {
        name: "segmentation",
        color: "green-text-gradient",
      },
      {
        name: "video editing",
        color: "pink-text-gradient",
      },
    ],
    image: hairColor,
    sourceCodeLink: "https://github.com/ahmedliaquat789",
  },
  {
    name: "AI Makeup System",
    description:
      "Created an AI-based makeup application tool with face detection, facial recognition, and real-time makeup effects using deep learning and computer vision techniques.",
    tags: [
      {
        name: "face detection",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "augmented reality",
        color: "pink-text-gradient",
      },
    ],
    image: aiMakeup,
    sourceCodeLink: "https://github.com/ahmedliaquat789",
  },
];

export { services, technologies, experiences, projects };
