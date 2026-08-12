export const profile = {
  name: "Intasar Mostafiz",
  role: "Computer Science & Engineering Student",
  tagline:
    "I build systems that solve real problems — from graph-based navigation engines to AI-powered fake news detection.",
  meta: "BCSE 24 · ID 24524203112 · Bangladesh University of Professionals",
  email: "intasarmostafiz@gmail.com",
  phone: "+880 1850055402",
  location: "House 06, Avenue 02, Mirpur-12, Dhaka-1216",
  linkedin: "https://linkedin.com/in/intasar-mostafiz/",
  github: "https://github.com/Inta-tech",
};

export const stats = [
  { value: "3.85", label: "CGPA / 4.00" },
  { value: "7+", label: "Projects built" },
  { value: "5.00", label: "HSC & SSC GPA" },
  { value: "2027", label: "Expected graduation" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "HTML"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Node.js", "JavaScript", "CSS", "Java Swing"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Code::Blocks",
      "Linux",
      "MySQL",
    ],
  },
];

export const projects = [
  {
    title: "AI Fake News Detection",
    status: "Ongoing",
    stack: ["Python", "FastAPI", "React.js", "Node.js"],
    description:
      "An AI-powered system using machine learning and NLP to detect fake news and assess the credibility of online news articles.",
  },
  {
    title: "Dhaka City Navigation System",
    stack: ["Java", "Dijkstra's Algorithm"],
    description:
      "A graph-based navigation system that calculates and visualizes the shortest routes between locations across Dhaka City.",
  },
  {
    title: "Hospital Management System",
    stack: ["Java Swing", "MySQL"],
    description:
      "Streamlines patient records, appointments, billing, and administrative operations in a single desktop application.",
  },
  {
    title: "WiFi Management System",
    stack: ["JavaFX", "MySQL"],
    description:
      "Manages customers, internet plans, connection requests, and admin operations through a centralized database.",
  },
  {
    title: "Turing Machine Simulator",
    stack: ["Java Swing", "MySQL", "JDK"],
    description:
      "A visual simulation application built to make the mechanics of a Turing machine intuitive to understand.",
  },
  {
    title: "Line Following Robot",
    stack: ["C", "Arduino", "Sensors"],
    description:
      "An autonomous robot using IR sensors and a microcontroller to detect and follow a predefined path.",
  },
  {
    title: "Browser Shortcut Manager",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    description:
      "A cloud-based academic resource portal for organizing study resources, with drag-and-drop management.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    org: "Bangladesh University of Professionals (BUP), Dhaka",
    period: "Jan 2024 – Dec 2027 (Expected)",
    detail: "CGPA 3.85 / 4.00 (up to 5th semester)",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    org: "Notre Dame College, Dhaka",
    period: "2021 – 2023",
    detail: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    org: "Jhikargacha B.M. Secondary School, Jashore",
    period: "2019 – 2021",
    detail: "GPA 5.00 / 5.00",
  },
];

export const achievements = [
  {
    title: "Inter-University Programming Contest (IUPC)",
    period: "Oct 2024 – Present",
    detail:
      "Competitive programming contests, solving algorithmic problems under time constraints.",
  },
  {
    title: "Circuit Clash 1.0 Robo Soccer — Participant & Organizer",
    period: "Oct 2025",
    detail:
      "Competed and helped organize the robotics event, handling coordination and technical activities.",
  },
  {
    title: "Overview of AI — Participant",
    period: "Feb 2025",
    detail:
      "Hands-on exposure to fundamental artificial intelligence concepts and applications.",
  },
  {
    title: "Database Management & Excel Pivot Competition — BUP Career Club",
    period: "2025",
    detail:
      "Demonstrated data analysis and problem-solving skills across database and pivot table tasks.",
  },
  {
    title: "Microsoft Excel Competition — Participant",
    period: "2024",
    detail:
      "Proficiency in data analysis, spreadsheet management, and problem solving.",
  },
];

export const activities = [
  {
    title: "BUP Robotics Club — General Member",
    period: "Jan 2025 – Present",
    detail:
      "Contributing to robotics activities and technical projects in robotics and automation.",
  },
  {
    title: "Notre Dame Information Technology Club — Executive Member",
    period: "Mar 2022 – Dec 2023",
    detail:
      "Organized technology-focused events, activities, and club initiatives.",
  },
  {
    title: "Bangladesh Scouts — Division Head",
    period: "2014 – 2021",
    detail:
      "Led a scout division, developing leadership, teamwork, discipline, and organization.",
  },
];

export const references = [
  {
    name: "Iyolita Islam",
    title: "Lecturer, Dept. of CSE",
    org: "Bangladesh University of Professionals",
    email: "iyolitaislam@bup.edu.bd",
  },
  {
    name: "Rumana Yasmin",
    title: "Lecturer, Dept. of CSE",
    org: "Bangladesh University of Professionals",
    email: "rumana.yasmin@bup.edu.bd",
  },
];

/*
 * Navigation links
 * CV has been added here so it automatically appears
 * in both desktop and mobile navigation.
 */
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#cv", label: "CV" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
