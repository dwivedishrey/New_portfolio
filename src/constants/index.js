import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/food.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a dedicated full stack developer specializing in crafting dynamic and user-friendly web applications. With a strong foundation in front-end technologies such as React and Material UI, and back-end frameworks like Node.js and Express.js, I excel in building interactive and visually appealing solutions.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer currently pursuing a B.Tech in Computer Science & Engineering at Kamla Nehru Institute of Technology, where I have maintained a CGPA of 8.2/10. My passion for web development is evident through my hands-on experience with technologies like React, Node.js, Express.js, and MongoDB. I have successfully developed dynamic applications such as a food app and a news aggregator, and have significantly contributed to the ArthaMarga financial literacy platform. My work extends to open source contributions, including the GirlScript Summer of Code and Hacktober Fest, where I have enhanced frontend features using HTML, CSS, JavaScript, and React. As a finalist in the American Express Makeathon 2024 and a participant in the Smart India Hackathon 2023, I thrive in collaborative environments and excel at solving complex problems. Outside of coding, I enjoy staying active and have represented my college in table tennis at Spardha 2023. I am passionate about continuously learning new technologies and contributing to the open-source community.`
export const EXPERIENCES = [
  {
    year: "Oct 2023 – Nov 2023",
    role: "Web Development Intern",
    company: "Bharat Intern",
    description: `Developed dynamic web applications using React and Material UI. Implemented seamless navigation with React Router and focused on creating intuitive, visually appealing user interfaces.`,
    technologies: ["React", "Material UI", "React Router"],
  },
  {
    year: "May 2023 – Aug 2023",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    description: `Contributed to multiple open source projects by developing and enhancing frontend features using HTML, CSS, JavaScript, and React.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];


export const PROJECTS = [
  {
    title: "ArthaMarga— Financial Literacy Platform",
    image: project1, // Replace with the actual image reference
    description:
      "An interactive and user-friendly educational website aimed at enhancing financial literacy for all age groups. Features include AI-powered chatbot, financial visualizations, investment monitoring, market trends, and a financial community forum.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Chart.js"],
    url: "https://financialliteracy-33625.web.app/",
  },
  {
    title: "Twitter Like Clone — MERN Application",
    image: project2, // Replace with the actual image reference
    description:
      "A full-stack social media application with features such as tweet creation, profile updating, and user authentication.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    url: "https://twiiter-application.web.app",
  },
  {
    title: "Food App",
    image: project3, // Replace with the actual image reference
    description:
      "A dynamic food application with an intuitive and visually appealing user interface, utilizing seamless navigation and interactive components.",
    technologies: ["React", "Material UI", "React Router"],
    url: "https://strong-kleicha-79a9f2.netlify.app",
  },
  {
    title: "NewsApp",
    image: project4, // Replace with the actual image reference
    description:
      "A dynamic news aggregator providing real-time access to diverse news articles, featuring user interaction enhancements.",
    technologies: ["React", "React Router"],
    url: "https://lnkd.in/dsNv5FMB",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
