import { 
  Profile, 
  ExperienceItem, 
  ProjectItem, 
  EducationItem, 
  CertificationItem, 
  SkillCategory, 
  VolunteerItem, 
  LanguageItem 
} from './types';

// NOTE: Using local paths assuming images are in the 'public/img' directory.
// Example: public/img/project1.png is accessed via /img/project1.png

export const profileData: Profile = {
  name: "Sarah Alowjan",
  title: "AI & Software Engineer",
  tagline: "Bridging the gap between Intelligent Systems and Secure Infrastructure.",
  about: "Computer Science graduate with a strong focus on AI and hands-on experience in machine learning, deep learning, NLP, and computer vision, with AI-driven projects in predictive modeling and intelligent systems, practical cybersecurity training in vulnerability assessment and security analysis, and skills in software engineering, system analysis, and API development.",
  email: "sarahalowjan1@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarah-alowjan-a7296a245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/Sarahalo204",
  location: "ٌRiyadh ,Saudi Arabia "
};

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Cyber Defense Trainee",
    company: "Riyadh Airports Company",
    period: "Aug 2025 – Dec 2025 ",
    type: "Co-op",
    description: [
      "Assist in monitoring and assessing system vulnerabilities and security risks.",
      "Support in analyzing cybersecurity incidents and preparing incident reports.",
      "Participate in implementing cybersecurity awareness and defense measures.",
      "Gain hands-on experience in applying cybersecurity frameworks and tools in real-world environments."
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "NUTHUR – Early Wildfire Detection System",
    description: "An AI-powered platform for early wildfire prediction and monitoring using real-time environmental data in the Al-Soudah region.",
    detailedDescription: "NUTHUR is an AI-driven wildfire prediction and early warning system developed to address the growing wildfire risks in Al-Soudah region . The system analyzes high-resolution climate and geographic data—including temperature, humidity, wind speed, and terrain features—to estimate wildfire probability before ignition. Multiple machine learning and deep learning models were developed and evaluated using different data balancing strategies (no balancing, oversampling, and undersampling) to ensure reliable predictions. The platform runs the prediction model regularly, generates zone-based risk assessments, and sends instant alerts when danger is detected. Volunteers can also submit field reports to support monitoring and response efforts.",
    techStack: ["Python", "Machine Learning", "Environmental Data Analysis", "APIs", "Data Balancing Techniques"],
    category: "AI",
    github: "",
    image: "/img/project1.png"
  },
  {
    id: "2",
    title: "Nukhbah – AI Recruitment Platform",
    description: "An AI-powered recruitment system that matches candidates with tech jobs and automatically evaluates shortlisted applicants based on job requirements.",
    detailedDescription: "Nukhbah is an AI-powered recruitment platform built for hiring in technical fields such as Software Engineering, Cybersecurity, AI, Cloud, and Full Stack Development. It automates the recruitment pipeline starting with CV parsing and structured information extraction using NLP. Recruiters submit job descriptions, and the system uses embeddings and similarity matching to identify the most relevant candidates.Shortlisted applicants receive an automatically generated technical quiz tailored to the job role and experience level using a large language model. Submissions are evaluated and scored automatically, and top candidates are ranked and forwarded to employers for final review. By combining intelligent matching with automated technical assessment, Nukhbah reduces hiring time and improves the consistency and quality of technical evaluations.",
    techStack: ["Python", "Machine Learning", "NLP","LLMs & Prompt Engineering", "Web Development", "React"],
    category: "AI",
    github: "https://github.com/Sarahalo204/nukhbah-recruit.git",
    image: "/img/project2.jpg"
  },
  {
    id: "3",
    title: "Mawqif – Smart Parking Violation Detection",
    description: "An AI-based computer vision system that detects and classifies parking violations using deep learning models.",
    detailedDescription: "Mawqif is a smart parking violation detection system that leverages computer vision and deep learning to identify improperly parked vehicles. The project is built on a custom dataset annotated using Roboflow, where vehicles were labeled to distinguish between violation and non-violation cases. Multiple deep learning models were trained and evaluated, including lightweight architectures such as MobileNet for efficient image classification, along with additional deep learning models for feature-based analysis.The system processes visual data to detect vehicles and determine parking compliance, enabling automated identification of violations. This approach supports smarter traffic monitoring and reduces the need for fully manual inspection by providing accurate, AI-driven detection of parking misuse.",
    techStack: ["Python", "Computer Vision","Object Detection","OpenCV", "Deep Learning", "Roboflow (Data Annotation)","Streamlit"],
    category: "AI",
    github: "https://github.com/Sarahalo204/mawqif.git",
    image: "/img/project3.jpg"
  },
  {
    id: "4",
    title: "BrainGuard – MS Detection System",
    description: "A machine learning–based medical imaging system that detects Multiple Sclerosis from MRI scans using texture and feature extraction techniques.",
    detailedDescription: "BrainGuard is an AI-assisted diagnostic support system for early detection of Multiple Sclerosis (MS) from brain MRI images. To simplify the complex and time-consuming diagnostic process, the system converts MRI scans into numerical features using texture and structural extraction techniques such as Local Binary Patterns (LBP) and Histogram of Oriented Gradients (HOG).These features are used to train and evaluate multiple machine learning models. An interactive Streamlit application allows users to upload MRI images and receive instant predictions.",
    techStack: ["Python", "Machine Learning", "Medical Image Analysis", "Feature Extraction (LBP, HOG)","Streamlit"],
    category: "AI",
    github: "https://github.com/Sarahalo204/Multiple-Sclerosis-Detection-.git",
    image: "/img/project4.png"
  },
  {
    id: "5",
    title: "QR-Waiter – Smart Menu Platform",
    description: "A QR code–based smart restaurant system that provides interactive digital menus and improves order accuracy and service speed.",
    detailedDescription: "QR-Waiter is a smart digital menu and order management platform that improves restaurant efficiency and communication. Customers access an interactive QR code menu, reducing reliance on waiters and minimizing order errors.The platform supports real-time order tracking, emergency and scheduled orders, audio-visual menu display, instant feedback, and food analysis (protein, sugar, fat), while accommodating dietary preferences and allergies. By combining accessibility and smart order handling, QR-Waiter enables faster, more accurate, and personalized service.",
    techStack: ["JavaScript", "Node.js", "Web Development","Express.js"],
    category: "Software Development",
    github: "#",
   image: undefined
  },
  {
    id: "6",
    title: "Course Master – E-Learning Platform",
    description: "A web-based platform for managing, delivering, and tracking online courses with interactive and competitive learning features..",
    detailedDescription: "Course Master is a comprehensive E-Learning platform designed for students and lifelong learners. It provides tools for creating and delivering courses with multimedia content (videos, books, exercises), quizzes with adjustable difficulty, and interactive discussion boards. The platform also supports competitive challenges and instant feedback to enhance engagement and knowledge retention, delivering an effective and scalable educational experience.",
    techStack: ["JavaScript", "Web Development", "Node.js", "React"],
    category: "Software Development",
    github: "#",
    image: "/img/project6.jpg"
  },
  {
  id: "7",
  title: "Murshid – AI-Powered Real Estate Advisor",
  description: "An AI-driven real estate platform that predicts fair property prices, classifies listings, and helps users make informed buying and selling decisions.",
  detailedDescription: "Murshid is an AI-powered real estate advisor designed to help users make data-driven property decisions. The platform predicts fair market prices for properties using machine learning, compares them with listed prices, and classifies each property as Good Deal, Fair, or Overpriced. It also tracks market trends and provides insights through a simple AI assistant interface. By combining price prediction, deal classification, and trend analysis, Murshid empowers users to confidently evaluate real estate opportunities.",
  techStack: ["Python","Machine Learning", "Deep Learning","Next.js","React"],
  category: "AI",
  github: "https://github.com/Sarahalo204/murshid-smart-realestate.git",
  image: "/img/project7.png"
  },
  {
    id: "8",
    title: "Arabic Text Classification and Summarization",
    description: "An NLP project focused on Arabic text analysis, including automated classification and abstractive summarization using traditional and modern machine learning techniques..",
    detailedDescription: "This project explores Arabic text classification and summarization, addressing the language's rich morphology and variations. Using the AraFacts dataset, we developed models to classify text into factual categories  (e.g., sports, politics, finance)  and generate concise summaries. Comparative analysis between traditional machine learning and modern transformer-based methods highlighted strengths and limitations, providing insights into Arabic NLP and guiding future improvements in automated text processing.",
    techStack: ["Python", "NLP", "Machine Learning", "Deep Learning", "Text Preprocessing ","AraBERT"],
    category: "AI",
    github: "https://github.com/Sarahalo204/Arabic-Text-Classification-and-Summarization.git",
    image: undefined
  }
];

export const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "B.Sc. in Computer Science",
    institution: "Imam Muhammad Ibn Saud Islamic University",
    year: "2022 - 2026",
    achievements: [
      "Specialization in Artificial Intelligence & Information Security",
      "Graduated Cum Laude (GPA 4.71/5.0)"
    ]
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: "1",
    name: "Cloud Computing Engineer",
    issuer: " Alibaba cloud & Tuwaiq Academy ",
    date: "Jan 2026"
  },
  {
    id: "2",
    name: "Building and Developing Artificial Intelligence Models Bootcamp",
    issuer: " Tuwaiq Academy",
    date: "Aug 2025 – Oct 2025 "
  },
  {
    id: "3",
    name: " Cybersecurity Courses Collection ",
    issuer: " KAUST Academy & NCA, IBM, ISC2, UC Davis ",
    date: "Jan 2025"
  },
  {
    id: "4",
    name: " Build Bootcamp ",
    issuer: " Build ",
    date: "Nov 2024"
  },
  {
    id: "5",
    name: " API Development Bootcamp  ",
    issuer: "Imam Mohammad Ibn Saud Islamic University  ",
    date: "Sep 2024"
  },

];

export const skillsData: SkillCategory[] = [
  {
    category: "Software Development",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "Software Engineering",
      "System Analysis",
      "UX/UI Design",
      "API Development",
      "Cloud Infrastructure"
    ]
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    skills: ["Machine Learning","Deep Learning","Natural Language Processing (NLP)", "Computer Vision", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "Data Visualization"]
  },
  {
    category: "Cybersecurity",
    skills: [
      "Cyber Defense",
      "Vulnerability Assessment",
      "Security Risk Analysis",
      "Cybersecurity Incident Analysis",
      "Incident Reporting"
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Critical Thinking",
      "Multitasking",
      "Effective Communication",
      "Time Management",
      "Collaboration & Teamwork",
      "Flexibility & Adaptability"
    ]
  
  }
];

export const volunteerData: VolunteerItem[] = [
  {
    id: "1",
    role: "Public Relations Team Member",
    organization: "College of Computer and Information Sciences Graduation Ceremony",
    period: "May 2024 – Jan 2025",
    description: "Supported event organization and coordination during the graduation ceremony, ensuring smooth communication and sponsor engagement."
  },
  {
    id: "2",
    role: "Public Relations Committee Member",
    organization: "Zaheer Club",
    period: "Aug 2024 – June 2025",
    description: "Conducted sponsor research, maintained communication with partners, and assisted in organizing club events and outreach activities."
  },
  {
    id: "3",
    role: "Injaz Engine Team Member",
    organization: "Enjaz Club",
    period: "Aug 2024 – March 2025",
    description: "Tracked volunteer hours, maintained participation records, and facilitated communication and coordination between team members."
  },
  {
    id: "4",
    role: "Public Relations Committee Member",
    organization: "College of Computer Science Student Council",
    period: "Jan 2023 – May 2024",
    description: "Researched and communicated with sponsors for college events and supported public relations efforts to promote student council activities."
  },
  {
    id: "5",
    role: "Activities Committee Member",
    organization: "Google Developer Student Club",
    period: "Oct 2022 – Sep 2023",
    description: "Contributed to organizing technical events and activities while collaborating with peers to increase student engagement in technology initiatives."
  }
];


export const languagesData: LanguageItem[] = [
  {
    language: "Arabic",
    proficiency: "Native",
    level: 100
  },
  {
    language: "English",
    proficiency: "Professional Working",
    level: 100
  },
];