type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
};

type PortfolioData = {
  name: {
    first: string;
    last: string;
    initials: string;
  };
  hero: {
    greeting: string;
    eyebrow: string;
    primary: string;
    secondary: string;
  };
  about: string;
  focusAreas: {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
  }[];
  timeline: {
    title: string;
    organization: string;
    period: string;
    description: string;
  }[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    codesandbox: string;
    codeforces: string;
  };
  education: string[];
  certifications: string[];
  achievements: string[];
};

export const portfolioData: PortfolioData = {
  name: {
    first: "Tarush",
    last: "Chauhan",
    initials: "TC",
  },
  hero: {
    greeting: "Hello! I'm",
    eyebrow: "DevOps Engineer",
    primary: "DevOps",
    secondary: "Cloud",
  },
  about:
    "DevOps-focused engineer with hands-on experience designing CI/CD pipelines, containerizing applications with Docker, and deploying services across AWS, Azure, and GCP. Skilled in Python, Flask, REST API development, Kubernetes fundamentals, and infrastructure automation, with a track record of cutting deployment time and improving release reliability.",
  focusAreas: [
    {
      title: "DEVOPS & CI/CD",
      subtitle: "Automated pipelines and containerized deployments",
      description:
        "I design CI/CD pipelines with Jenkins and GitHub Actions, containerize applications with Docker, and deploy via Nginx on Linux, with hands-on experience in Kubernetes fundamentals for scalable multi-instance orchestration.",
      tags: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Nginx",
        "Linux",
        "Bash",
      ],
    },
    {
      title: "BACKEND & CLOUD",
      subtitle: "Secure systems and production-ready APIs",
      description:
        "I build backend features with Node.js, Express.js, Flask, MongoDB, and MySQL, with a strong focus on REST API design, JWT authentication, and cloud-first deployment across AWS, Azure, and GCP.",
      tags: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "JWT Authentication",
        "MongoDB",
        "MySQL",
        "AWS",
        "Azure",
        "GCP",
      ],
    },
  ],
  timeline: [
    {
      title: "B.E. Computer Science — DevOps Specialization",
      organization: "Chandigarh University, Mohali",
      period: "2022-2026",
      description:
        "Pursuing a Bachelor of Engineering in Computer Science with a DevOps specialization, CGPA 7.83/10, building strong foundations in CI/CD, cloud infrastructure, and containerized deployments.",
    },
    {
      title: "Software Developer Intern",
      organization: "Geeks Keeper",
      period: "2025",
      description:
        "Integrated 8+ REST API endpoints across 3 internal services, debugged payload and data-flow issues to cut recurring bug reports by an estimated 30%, and contributed 15+ merged pull requests through Git branching workflows without production regressions.",
    },
    {
      title: "Academic Foundation",
      organization: "DAV Public School, Ambala",
      period: "2019-22",
      description:
        "Completed secondary and senior secondary education, cleared JEE Mains with a strong percentile, and achieved AINCAT All India Rank 43 alongside active participation in competitions.",
    },
  ],
  projects: [
    {
      title: "TaskFlow — Full-Stack To-Do App",
      category: "CI/CD & Docker",
      tools:
        "React, Flask, MongoDB, Docker, Docker Compose, GitHub Actions, pytest, ESLint, flake8, Render, MongoDB Atlas",
      image: "/images/project-file-sharing.svg",
      link: "https://github.com/Tarushchauhan73/TaskFlow",
    },
    {
      title: "DevOps Deployment Project",
      category: "CI/CD Pipeline & Containerization",
      tools:
        "Jenkins, GitHub Actions, Docker, Nginx, Linux, Kubernetes fundamentals for multi-instance orchestration",
      image: "/images/project-car.svg",
      link: "https://github.com/Tarushchauhan73/DevOps-Deployment-Project",
    },
    {
      title: "Employee Promotion Prediction",
      category: "Machine Learning Project",
      tools:
        "Python, Pandas, Scikit-learn, categorical and numerical feature preprocessing, model training and evaluation",
      image: "/images/project-promotion.svg",
      link: "https://github.com/Tarushchauhan73",
    },
  ],
  contact: {
    email: "tarushchauhan19@gmail.com",
    phone: "+91-9350356163",
    location: "Ambala City, Haryana 134003, India",
    linkedin: "https://linkedin.com/in/tarush-chauhan-b91b8a256",
    github: "https://github.com/Tarushchauhan73",
    codesandbox: "https://codesandbox.io/dashboard/recent",
    codeforces: "https://codeforces.com/profile/tarushchauhan19",
  },
  education: [
    "B.E. in Computer Science — Specialization: DevOps, Chandigarh University, Mohali — Aug 2022 to May 2026 | CGPA: 7.83/10",
    "Senior Secondary Education, DAV Public School (CBSE), Ambala — 2021 to 2022",
    "Secondary Education, DAV Public School (CBSE), Ambala — 2019 to 2020",
  ],
  certifications: [
    "DevOps Foundations — Oracle",
    "AWS Cloud Fundamentals — AWS",
    "Generative AI Fundamentals — IBM",
    "Cloud Digital Leader / Fundamentals — Google Cloud",
    "Azure Fundamentals — Microsoft",
    "Python for Data Science — TATA / IBM Technovate",
    "Data Visualization — TATA",
  ],
  achievements: [
    "Cleared JEE Mains with a strong percentile",
    "AINCAT All India Rank 43",
    "Oracle Cloud Infrastructure 2024 Generative AI Certified",
    "GD and Quiz Champion in inter-school competitions",
  ],
};
