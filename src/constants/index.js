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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
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
    name: "python",
    icon: redux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Php",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Hackveda",
    icon: starbucks,
    iconBg: "#383E56",
    date: "feb 2025 - March 2025",
    points: [
      "Developed and delivered machine learning solutions based on business requirements, implementing models using tools like Dataiku DSS, scikit-learn, and XGBoost for predictive analytics and classification tasks.",
      "Utilized Dataiku DSS testing features to perform unit and automated testing on machine learning pipelines and data workflows, ensuring model accuracy, stability, and performance; summarized results in comprehensive test reports. ",
      "Wrote detailed, user-friendly software and model documentation, covering deployment steps, API usage, model interpretation, and troubleshooting guidelines",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "TechHomage Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - March 2023",
    points: [
      "Designed and developed responsive CRM web applications and client-facing websites using PHP (CodeIgniter) framework and Bootstrap for front-end styling",
      "Built and integrated user interfaces using HTML, CSS, and JavaScript, ensuring seamless user experience across devices. ",
      "Managed server-side logic, routing, and database interactions within the CodeIgniter MVC architecture to streamline backend operations. ",
      "Collaborated with cross-functional teams to gather requirements, translate business needs into technical features, and implement real-time solutions. ",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
//   {
//     testimonial:
//       "Master of Computer Applications",
//     name: "Savitribai Phule Pune University, Pune",
//     designation: "CGPA 7.79",
//     company: "",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "Creative.",
//     name: "Peter Parker",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
  // {
  //   testimonial:
  //     "Great Work!",
  //   name: "Bruce Banner",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "AI Trip Planner",
    description:
      "Developed a full-stack web application that generates personalized travel itineraries based on user preferences like destination, budget, and trip type.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/atharvarapte/AI-Trip-Planner-and-Hotel-Booking",
  },
  {
    name: "Cancer Prediction",
    description:
      "This cancer prediction project uses a combination of machine learning algorithms like Naive Bayes, Decision Tree, kNN, k-Means Clustering, and Random Forest to analyze patient data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/atharvarapte/Cancer-Prediction",
  },
  {
    name: "Netflix Data Analysis",
    description:
      "This project analyzes a dataset of Netflix content using Python. It uncovers insights such as the distribution of content by type, most common genres, content trends over time, and top directors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/atharvarapte/Netflix-Data-Analysis-",
  },
];

export { services, technologies, experiences, testimonials, projects };
