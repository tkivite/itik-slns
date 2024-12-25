import {
  Lightbulb,
  Code,
  UserPlus,
  BookOpen,
  Network,
  Briefcase,
  Award,
  Users,
  Clock,
} from "lucide-react";

export const faqItems = [
  {
    question: "What is the duration of the mentorship program?",
    answer:
      "The mentorship program lasts for 6 months, with weekly sessions and continuous support.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No, we accept individuals at various skill levels. Our mentorship program is designed to help you grow at your own pace.",
  },
  {
    question: "How are mentors assigned?",
    answer:
      "Mentors are matched based on your interests, goals, and technical background. We ensure a good fit to help you achieve your goals.",
  },
  {
    question: "Can I access the program remotely?",
    answer:
      "Our mentorship program is primarily remote, but physical sessions can be arranged from time to time for more hands-on learning.",
  },
];

export const whyChooseUs = [
  {
    title: "Industry-Leading Mentors",
    description:
      "Learn from professionals with years of experience in top tech companies.",
    icon: <Users className="text-primary-dark text-4xl w-full h-auto" />,
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Stay ahead with mentorship content that evolves with the tech industry.",
    icon: <Lightbulb className="text-primary-dark text-4xl w-full h-auto" />,
  },
  {
    title: "Flexible Learning",
    description:
      "Choose from various mentorship styles to fit your schedule and learning style.",
    icon: <Clock className="text-primary-dark w-full h-auto" />,
  },
];

export const modulesCovered = [
  {
    module: "Introduction to Web Application Development",
    description:
      "Learn the fundamentals of building web applications, including HTML, CSS, and JavaScript.",
    mentor: "Jane Doe",
    bio: "Senior Full Stack Developer with 10+ years of experience.",
  },
  {
    module: "Database Management with PostgreSQL",
    description:
      "Understand relational databases, learn SQL, and work with PostgreSQL to manage data.",
    mentor: "John Smith",
    bio: "Database Architect specializing in PostgreSQL and NoSQL databases.",
  },
  {
    module: "Backend and API Development with Java-Spring Boot",
    description:
      "Dive into backend development with Java and Spring Boot, and learn how to create and manage APIs.",
    mentor: "Alice Johnson",
    bio: "Expert in Java and distributed systems with 8+ years of experience.",
  },
  {
    module: "Frontend Development with React",
    description:
      "Master the React framework to build dynamic, responsive, and interactive front-end applications.",
    mentor: "Michael Brown",
    bio: "Frontend Engineer and React specialist with 6+ years of experience.",
  },
  {
    module: "Capstone Project",
    description:
      "Apply everything you've learned in a real-world project that demonstrates your full-stack capabilities.",
    mentor: "Emily Davis",
    bio: "Software Project Manager with expertise in mentoring student projects.",
  },
];

export const whatWeOffer = [
  {
    icon: Users,
    title: "One-on-One Guidance",
    description: "Personalized mentorship from expert tech professionals",
  },
  {
    icon: Code,
    title: "Code Reviews",
    description: "Regular feedback on your coding projects and assignments",
  },
  {
    icon: UserPlus,
    title: "Networking Opportunities",
    description: "Connect with industry professionals and fellow mentees",
  },
  {
    icon: BookOpen,
    title: "Exclusive Workshops",
    description: "Access to specialized tech workshops and online courses",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description: "Hands-on experience with actual tech industry projects",
  },
  {
    icon: Award,
    title: "Career Development",
    description: "Tailored plans to accelerate your tech career growth",
  },
  {
    icon: Network,
    title: "Tech Community",
    description:
      "Join a vibrant community of tech enthusiasts and professionals",
  },
  {
    icon: Lightbulb,
    title: "Innovation Insights",
    description: "Stay updated with the latest trends and innovations in tech",
  },
];

export const preferredTracks = [
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Fullstack Development" },
  { value: "data-science", label: "Data Science" },
  { value: "ai-ml", label: "Artificial Intelligence/Machine Learning" },
  { value: "devops", label: "DevOps" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "blockchain", label: "Blockchain Development" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "game-dev", label: "Game Development" },
];
