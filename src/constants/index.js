import {
  mobile,
  stack,
  ai,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  dart,
  firebase,
  python,
  tailwind,
  nodejs,
  sql,
  git,
  cmrit,
  heapoly,
  evoter,
  hongkong,
  heyyo,
  objdet,
  threejs,
  easymart,
  gpt,
  mistral,
  stablediffusion,
  opensource,
  sarvo,
  pixelthreads,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: stack,
  },
  {
    title: "AI Application Developer",
    icon: ai,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "GPT AI",
    icon: gpt,
  },
  {
    name: "Mistral AI",
    icon: mistral,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "bbpos",
    icon: cmrit,
    iconBg: "#383E56",
    date: "December 2022 - Jan 2025",
    points: [
      "Created and managed web applications utilizing React.js and other relevant technologies as part of various projects.",
      "Developed Android applications utilizing Java, Flutter, and other relevant technologies including Firebase as part of different projects.",
      "Collaborated with peers and classmates to produce top-notch projects while gaining expertise in industry-standard development practices.",
      "Ensured cross-browser compatibility and implemented responsive design in projects. Ensured a bug free experience for users.",
      "Participated in code reviews and hackathons, providing and incorporating feedback from others to enhance my skills and contribute to the team's success.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "yuneec",
    icon: heapoly,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Dec 2022",
    points: [
      "Developed a fully-featured property management system using React.js and Node.js",
      "Integrated automated tenant communication tools",
      "Built a robust property listing and search functionality using React.js",
      "Collaborated closely with the product team"
      ],
  },
  {
    title: "student",
    company_name: "University of Hong Kong",
    icon: hongkong,
    iconBg: "#E6DEDD",
    date: "Sep 2014 - Aug 2018",
    points: [
      "Acquired proficiency in C, C++, Python, and Java, as well as delving into advanced topics like computer vision.",
      "Developed and implemented a real-time Intrusion Detection System using Python, enhancing my machine learning skills.",
      "Explored the potential applications of AI and Machine Learning in software development, gaining valuable insights.",
      "Gained knowledge and expertise in various computer subjects such as data structures and algorithms, database management systems, and computer networks and coding practices.",
    ],
  },
];

const testimonials = [
  // TODO:  need to change with mentor feedback, etc.
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SARVO - Virtual Elderly Companion Assistant",
    description:
      "SARVO: A Voice-Enabled Elderly Companion Assistant designed for natural language conversations, emotional support, personalized entertainment, and a reminder system, enhancing well-being among the elderly. It is an emotionally capable companion and assistant that can perform a variety of tasks and keep the elderly company.",
    tags: [
      {
        name: "MisralAI",
        color: "blue-text-gradient",
      },
      {
        name: "SentimentAnalysis",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "orange-text-gradient",
      },
      {
        name: "VoiceAssistant",
        color: "pink-text-gradient",
      },
    ],
    image: sarvo,
    source_code_link: "https://github.com/arshad-syed18/Sarvo-AI-Assistant",
  },
  {
    name: "PixelThreads- A 3D product store",
    description:
      "PixelThreads: Transforming e-commerce with a 3D product store where users can customize and visualize clothes in a unique and immersive way. Powered by React, Three.js, Framer Motion, and Tailwind CSS for a cutting-edge user experience. Explore the future of online shopping!",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
      {
        name: "StableDiffusion",
        color: "orange-text-gradient",
      },
      {
        name: "AiImageGeneration",
        color: "pink-text-gradient",
      },
    ],
    image: pixelthreads,
    source_code_link: "https://github.com/arshad-syed18/PixelThreads-3DProductStore",
  },
  {
    name: "eVoter",
    description:
      "The eVoter project is an online platform for voting and managing elections. It aims to increase accessibility and convenience for voters by allowing them to cast their votes online. With eVoter, voters can securely cast their votes from the comfort of their homes, while election administrators can easily manage the election process with real-time updates and analytics.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: evoter,
    source_code_link: "https://github.com/arshad-syed18/eVoter",
  },
  {
    name: "HeyYo - Feature-Rich Android Chat App",
    description:
      "HeyYo is a feature-rich Android chat app created with Android Studio and Java, seamlessly integrating Firebase. It provides phone number authentication, real-time messaging, multimedia sharing, status viewing, and group chat, all within an intuitively designed user interface.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: heyyo,
    source_code_link: "https://github.com/arshad-syed18/HeyYo-ChatApp",
  },
  {
    name: "Real Time Intrusion Detection System",
    description:
      "Real-time Intrusion Detector is an AI-based application that uses YOLOv4 computer vision to detect unauthorized objects and persons in a video feed. It flags the objects and persons if their accuracy percentage is high and sends a message to the designated person.",
    tags: [
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "YoloV4",
        color: "green-text-gradient",
      },
      {
        name: "ObjectDetection",
        color: "blue-text-gradient",
      },
    ],
    image: objdet,
    source_code_link: "https://github.com/arshad-syed18/Real-time-intrusion-detector",
  },
  {
    name: "EasyMart",
    description:
      "An ecommerce app built with Flutter and Firebase as the backend, aimed at allowing businesses to sell their products online securely. Features include browsing products and product details, adding products to the shopping cart, secure checkout with Firebase authentication and payment processing, view order history, and admin access to manage products. ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "text-yellow-500",
      },
      {
        name: "Ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: easymart,
    source_code_link: "https://github.com/arshad-syed18/EasyMart",
  },
];

export { services, technologies, experiences, testimonials, projects };