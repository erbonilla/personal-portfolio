// Importing icons for Hero section
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
//import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";

// Exporting icons as an array for easy use in Hero component
export const heroIcons = [
  {
    icon: <LinkedinLineIcon />,
    link: "https://www.linkedin.com/in/edgarbonillag/"
  },
  {
    icon: <GithubLineIcon />,
    link: "https://github.com/erbonilla"
  },
  {
    icon: <FacebookCircleLineIcon />,
    link: "https://www.facebook.com/oxygenozar"
  },
  {
    icon: <InstagramLineIcon />,
    link: "https://www.instagram.com/coacherbonilla/"
  },
  // <DribbbleLineIcon />,
];

// Importing icons for About Me section
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";


// Exporting icons with additional data for About Me section
export const aboutData = [
  {
    title: "Github Repos",
    amount: 33,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 11,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Team Members",
    amount: 3,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards Won",
    amount: 5,
    icon: <AwardFillIcon />,
  },
];

// Additional icons for other components
import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

// Exporting additional icons individually
export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

// About text data
export const aboutText = `
“Hi, I’m ED, UX/UI Designer and Front-End Developer passionate about crafting user-centered digital experiences. 
With expertise in HTML, CSS, JavaScript, and React, I build intuitive and responsive interfaces that connect technology with users. 
My skills in human-centered design and enterprise design thinking enable me to solve problems creatively while ensuring customer satisfaction. 
Combining technical proficiency with a keen eye for design, I strive to deliver seamless, engaging, 
and accessible solutions for the modern digital world.”
`;

// Experience data
export const experienceData = [
  {
    year: 1,
    title: "Hewlett Packard Enterprise - Technical Server Support Engineer.",
    education: [
      "- HP Accredited Platform Specialist (APS) .",
    ],
    experience: [
      "Experienced in global IT support, specializing in resolving hardware and software issues, diagnosing and troubleshooting ProLiant and Blade servers across Windows, Linux, and VMware, providing expertise in server clustering and multivendor systems.",
  
    ],
  },
  {
    year: 2,
    title: "Amazon - Supervisor Resolution Specialist, CNS Heavy Bulky, VCS ",
    education: [
      "- Azure Fundamentals.",
      "- Introduction & Cybersecurity Essentials.",
    ],
    experience: [
      "Experienced in handling associate and customer inquiries, including escalated contacts, with a strong focus on Customer Obsession and Ownership.",
      "Demonstrating foundational expertise in cloud services, cybersecurity principles, threat detection, network security, encryption, and defensive strategies.",
  
    ],
  },
  {
    year: 3,
    title: "IBM - Technical Support Specialist",
    education: [
      "- IT Essentials.",
      "- CCNA: Introduction to Networks.",
      "- CCNA: Switching, Routing, and Wireless Essentials.",
    ],
    experience: [
      "Provide advanced technical support for IBM products and solutions, leveraging expertise in troubleshooting, system optimization, and customer-focused problem resolution across hardware, software, and cloud platforms.",
      "Foundational expertise in networking concepts, IP addressing, LAN configuration, and troubleshooting, gained through extensive hands-on.",
    ],
  },
  {
    year: 4,
    title: "Kyndryl - Senior Technical Support Specialist",
    education: [
      "- Junior Cybersecurity Analyst.",
      "- CyberOps Associate.",
      "- User Experience Design Fundamental.",
    ],
    experience: [
      "Skilled in network monitoring, threat detection, vulnerability assessment, risk management, incident response, and hands-on experience with firewalls, cryptography, and forensic investigations.",
      "Advanced skills in network administration, virtualization, and cloud computing, gained through hands-on experience and continuous learning.",
    ],
  },
  {
    year: 5,
    title: "Google UX Design Professional Certificate.",
    education: [
      "- UX/UI Design Professional.",
      "- Web Development Fundamentals.",
      "- Adobe Creative Cloud: Photoshop, Illustrator.",
    ],
    experience: [
      "program focused on the entire design process, from user research and problem definition to ideation, wireframing, prototyping, and usability testing, with hands-on, practice-based assessments to develop user-centered design solutions..",
      ,
    ],
},
{
  year: 6,
  title: "Enterprise Design Thinking & Agile Methodologies",
  education: [
    "- Beginner in Programming - HTML, CSS, Javascript.",
    "- Web Development Fundamentals.",
    "- CISCO CCNA: Enterprise Networking.",
  ],
  experience: [
    "Expertise in applying design thinking to real-world projects. Proficient in UX concepts, team collaboration, with experience analyzing case studies and redesigning digital solutions to improve user outcomes.",
    "Knowledge of web development concepts and processes, developing, deploying, and testing websites using HTML, CSS, and JavaScript, with an understanding of the tools, programming languages, and skills essential for success.",
  ],
},
{
  year: 7,
  title: "Front-End Developer HTML, CSS, Javascript, React",
  education: [
    "- Front-End UI.",
    "- JavaScript, the language of the web.",
    "- React, Vite Git & Github version control.",
  ],
  experience: [
    "Front-End Developer training Oracle ONE Next Education Program, focusing on HTML, CSS, and JavaScript foundations to build interactive web pages, with preparation for modern frameworks like React and skills in Git and version control.",
    "React training, gaining expertise in building projects from scratch, implementing reactive components, utilizing hooks for state management, and integrating advanced JavaScript concepts.",
  ],
}
];


// Skills data
export const skillsData = [
  { name: 'HTML', icon: '/skills/html.png' },
  { name: 'CSS', icon: '/skills/css.png' },
  { name: 'JavaScript', icon: '/skills/js.png' },
  { name: 'Tailwind', icon: '/skills/tailwind.png' },
  { name: 'React', icon: '/skills/react.png' },
  { name: 'Vite', icon: '/skills/vite.png' },
  { name: 'Next.js', icon: '/skills/nextjs.png' },
  { name: 'Node.js', icon: '/skills/nodejs.png' },
  { name: 'Figma', icon: '/skills/figma.png' },
  { name: 'Illustrator', icon: '/skills/ai.png' },
  { name: 'Photoshop', icon: '/skills/photoshop.png' },
  { name: 'GitHub', icon: '/skills/github.png' },
  // { name: 'Framer', icon: '/skills/framer.png' },
  // { name: 'Bootstrap', icon: '/skills/bootstrap.png' },
  // { name: 'Blender', icon: '/skills/blender.png' },
  // { name: 'MongoDB', icon: '/skills/mongodb.png' },
  // { name: 'TypeScript', icon: '/skills/ts.png' },
  // { name: 'VS Code', icon: '/skills/vscode.png' },
];

// Projects data
export const projectsData = [
  {
    name: 'Programming logic',
    desc: 'Development environment setup and creating interactive games, while gaining access to a comprehensive developer ecosystem of tools, documentation, and support.',
    url: '/projects/image-01.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
  name: 'HTML & CSS',
    desc: 'Developed foundational skills in HTML and CSS, to create projects from scratch, apply CSS styling, and implement semantic HTML with best practices based on documentation.',
    url: '/projects/image-02.png',
    tech: ['Figma', 'HTML', 'CSS'],
  },
  {
    name: 'Git & GitHub',
    desc: 'Acquired proficiency in Git and GitHub, including repository management, version control, etc. With a focus on best practices and console navigation.',
    url: '/projects/image-03.png',
    tech: ['GitHub'],
  },
  {
    name: 'Text Encryptor & Decryptor Challenge',
    desc: 'Created the Text Encryptor project, applying skills in JavaScript, HTML, CSS, Git, and GitHub, with a focus on responsiveness, functionality, and AI optimization.',
    url: '/projects/image-04.png',
    tech: ['HTML', 'CSS'],
  },
  {
    name: 'Enhancing projects with AI tools',
    desc: 'Enhancing skills in HTML integrating advanced semantics, syntax, and refactoring projects with AI tools, using Lighthouse for code optimization.',
    url: '/projects/image-05.png',
    tech: ['HTML', 'CSS'],
  },
  {
    name: 'AluraPlay',
    desc: 'Expertise in creating responsive designs, and utilizing JavaScript for simulating APIs, and transforming static pages into dynamic applications.',
    url: '/projects/image-06.png',
    tech: ['HTML', 'CSS'],
  },
  {
    name: 'Portfolio Challenge',
    desc: 'Consolidating knowledge completing a hands-on portfolio challenge, applying skills in HTML, CSS, JavaScript, and responsive design to simulate real-world web development projects.',
    url: '/projects/image-07.png',
    tech: [ 'Figma', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'AluraMidi',
    desc: 'Developed skills in JavaScript, including optimizing code with for loops, handling keyboard events, dynamically managing HTML classes, and implementing conditional logic with operators',
    url: '/projects/image-08.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Fokus Pomodoro timer app',
    desc: 'Building a Pomodoro timer app while mastering DOM manipulation, dynamic attribute and class modifications, user interaction events, and utilizing JavaScript utility objects.',
    url: '/projects/image-09.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Space Pong game',
    desc: 'Boost development with GitHub Copilot and ChatGPT AI tools by creating player classes, implementing collision detection, enhancing game scenes with images, and adding immersive sound effects.',
    url: '/projects/image-10.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'SpaceApp',
    desc: 'JavaScript, mastering synchronous and asynchronous programming, using the NASA API with fetch, handling Promises with then, catch, and async/await, and managing API request errors effectively.',
    url: '/projects/image-11.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Best-Store (AluraGeek)',
    desc: 'Full e-commerce application: CRUD operations, pagination, search, sort, and filter using JSON Server. React fundamentals (SPA, JSX, Components, Hooks, Props, State, Context), form validation, JWT-based authentication and role-based authorization, React Router.',
    url: '/projects/image-12.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ReactJS'],
  },
  {
    name: 'Org Registration Form ',
    desc: 'Gaining skills in creating and evolving reactive components, application prototyping, GitHub project management, dependency handling, and one-way data binding with VirtualDOM.',
    url: '/projects/image-13.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
  },
  {
    name: 'Alura-Cinema',
    desc: 'React project, creating components and pages, implementing dynamic and nested routes, using hooks like useState, useParams, useEffect, and useContext, consuming APIs, and deploying the project on Vercel.',
    url: '/projects/image-15.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
  },
  {
    name: 'EasyFilm ',
    desc: 'Movie app with React.js, featuring responsive design, user authentication, Redux, AI voice integration, dark/light mode, and third-party API integration using Async/Await and React Router 6.',
    url: '/projects/image-21.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap'],
  },

  {
    name: 'Personal Portfolio ',
    desc: 'Movie app with React.js, featuring responsive design, user authentication, Redux, AI voice integration, dark/light mode, and third-party API integration using Async/Await and React Router 6.',
    url: '/projects/image-21.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TailwindCSS', 'NextJS'],
  },
];

// Project buttons
export const projectsButton = [
  'All',
  'Figma',
  'Photoshop',
  'Illustrator',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
  'Vite',
  'Bootstrap',
  'NodeJS',
];

// Pricing Plans data
export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '$500 – $1,000',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO',
      'Contact form',
      'Social media links',
      '1 month support',
    ],
    recommended: 'Small businesses, personal websites, bloggers',
  },
  {
    title: 'Premium',
    pricing: '$5,000 – $10,000',
    features: [
      'Unlimited pages',
      'Responsive design',
      'Comprehensive SEO',
      'Contact form',
      'Social media links',
      'Advanced security',
      'E-commerce (unlimited products)',
      'Blog setup',
      'Google Analytics with custom reports',
      '6 months support',
    ],
    recommended: 'Medium-sized businesses, online stores, service providers',
  },
  {
    title: 'Standard',
    pricing: '$1,500 – $3,000',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO',
      'Contact form',
      'Social media links',
      'E-commerce (20 products)',
      'Blog setup',
      'Google Analytics',
      '3 months support',
    ],
    recommended: 'Large businesses, complex e-commerce sites, custom web applications',
  }
];

// Review icons
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

// Reviews data
export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Mark T., Freelance Graphic Designer',
    comments: "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Sarah B., E-commerce Store Owner',
    comments: "Working with you has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn’t be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'John D., Tech Startup CEO',
    comments: "The new site design has significantly improved our brand's online presence. The website is fast, easy to navigate, and beautifully laid out. Our clients have given us positive feedback, and it’s all thanks to your expertise.",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Lisa M., Travel Blogger',
    comments: "Thank you for designing a beautiful and functional website for my travel blog! It’s user-friendly and captures the spirit of adventure I wanted to convey. My followers have noticed the difference, and I couldn't be happier.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-5.png',
    name: 'James K., Food Critic',
    comments: "I’m beyond impressed with your work. The website you built for my food blog is stunning, and it has received rave reviews from my readers. Your design skills are top-notch, and I’m thrilled with the results!",
    stars: [1, 1, 1, 1, 0.5],
  },
];

// FAQ data
import CheckLineIcon from "remixicon-react/CheckLineIcon";
export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
 /* {
    question: 'How much do you charge for a website?',
    answer: 'Our website packages usually range from £2997 – £4997. However, it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.',
  },
  {
    question: 'Why are you so expensive?',
    answer: 'The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money.',
  },*/
  {
    question: 'How long does it take to build a website?',
    answer: 'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you.',
  },
  {
    question: 'How do we communicate throughout the website build?',
    answer: 'Before we begin working together, we’ll usually have an initial chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later.',
  },
  {
    question: 'What will you need from me?',
    answer: 'It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on, we could need additional resources from you.',
  },
  {
    question: 'What if I don’t like the website?',
    answer: 'You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.',
  },
 /* {
    question: 'Do you offer a payment schedule?',
    answer: 'Yes, we split the payment into two. The first 60% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 60% is taken 30 days after this.',
  },
  {
    question: 'Can I make the final payment when the site is ready to go live?',
    answer: 'No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.',
  },*/
  {
    question: 'Who hosts the website?',
    answer: 'If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.',
  },
  {
    question: 'Can I update the website myself once it’s been built?',
    answer: 'Yes. We like to offer the ability for our clients to update the website themselves. We’ll give you all the training and tools to be able to make website amendments. We use an easy-to-use platform called WordPress so you can add, edit, and delete content without paying us to do it for you.',
  },
];

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />

// Navbar data

// Additional icons for specific components
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon';
export const questionArrow = <ArrowDropDownLineIcon />;

// index.js or navbarData.js in your assets folder
import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",         // ID for the Home section
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",        // ID for the About section
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",   // ID for the Experience section
    name: "Experience",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",       // ID for the Skills section
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "projects",     // ID for the Projects section
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",      // ID for the Pricing section
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",      // ID for the Contact section
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",    // ID for the FAQ section
    name: "FAQ",
    icon: <QuestionAnswerLineIcon />,
  },
];

// Copyright icon
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon';
export const copyRightIcon = <CopyrightLineIcon />;

// Exporting data
export default {
  heroIcons,
  aboutData,
  downloadIcon,
  arrowLeftIcon,
  aboutText,
  experienceData,
  skillsData,
  starIcons,
  arrowIcons,
  reviewsData,
  projectsData,
  projectsButton,
  pricingPlans,
  checkIcon,
  questions,
  navbarData,
  questionArrow,
  copyRightIcon
};