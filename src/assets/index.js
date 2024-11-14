// Importing icons for Hero section
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

// Exporting icons as an array for easy use in Hero component
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
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
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Team Members",
    amount: 15,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards Won",
    amount: 12,
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
  Hi, I'm Nick, a web developer & designer. I blend the technical skills of web development 
  with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... 
  to build functional and responsive websites, while also using design tools like Photoshop 
  and Figma to create visually appealing and user-friendly interfaces. My role allows me 
  to ensure that websites not only work well but also look great and provide an excellent 
  user experience.
`;

// Experience data
export const experienceData = [
  {
    year: 1,
    title: "Foundation and Basics",
    education: "High School Diploma: Focus on computer science, mathematics, and art/design courses.",
    experience: [
      "Basic HTML/CSS: Learn through online tutorials and courses.",
      "Personal Projects: Create simple personal websites or blogs.",
    ],
  },
  {
    year: 2,
    title: "Advanced Learning and Early Experience",
    education: "Associate's Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.",
    experience: [
      "Freelance Work: Take on small freelance projects to build a portfolio.",
      "Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.",
    ],
  },
  {
    year: 3,
    title: "Specialized Education and Real-World Application",
    education: "Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).",
    experience: [
      "Internships: Secure internships with tech companies or design agencies.",
      "Contribute to Open Source: Collaborate on open-source projects.",
    ],
  },
  {
    year: 4,
    title: "Building Expertise and Expanding Skills",
    education: "Associate's Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.",
    experience: [
      "Full-Time Position: Work as a junior web developer or designer.",
      "Portfolio Development: Continuously update your portfolio with professional and personal projects.",
    ],
  },
  {
    year: 5,
    title: "Mastery and Leadership",
    education: "Workshops and Conferences: Attend industry events to stay updated.",
    experience: [
      "Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.",
      "Freelance and Consulting: Consider starting a freelance business or consulting practice.",
    ],
  },
];

// Skills data
export const skillsData = [
  { name: 'Figma', icon: '/skills/figma.png' },
  { name: 'Photoshop', icon: '/skills/photoshop.png' },
  { name: 'Blender', icon: '/skills/blender.png' },
  { name: 'VS Code', icon: '/skills/vscode.png' },
  { name: 'AI', icon: '/skills/ai.png' },
  { name: 'CSS', icon: '/skills/css.png' },
  { name: 'Framer', icon: '/skills/framer.png' },
  { name: 'GitHub', icon: '/skills/github.png' },
  { name: 'HTML', icon: '/skills/html.png' },
  { name: 'JavaScript', icon: '/skills/js.png' },
  { name: 'MongoDB', icon: '/skills/mongodb.png' },
  { name: 'Next.js', icon: '/skills/nextjs.png' },
  { name: 'Node.js', icon: '/skills/nodejs.png' },
  { name: 'React', icon: '/skills/react.png' },
  { name: 'Tailwind', icon: '/skills/tailwind.png' },
  { name: 'Three.js', icon: '/skills/threejs.png' },
  { name: 'TypeScript', icon: '/skills/ts.png' },
  { name: 'Vite', icon: '/skills/vite.png' },
];

// Projects data
export const projectsData = [
  {
    name: 'SparkleGrove.com',
    desc: 'A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.',
    url: '/projects/image-1.jpg',
    tech: ['Figma', 'Photoshop', 'HTML'],
  },
  {
    name: 'TechTrekker.net',
    desc: 'A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'Photoshop'],
  },
  {
    name: 'CozyNestHomes.org',
    desc: 'A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.',
    url: '/projects/image-3.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'WanderLuxeTravels.co',
    desc: 'A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.',
    url: '/projects/image-4.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  },
  {
    name: 'ByteBoosters.io',
    desc: 'A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.',
    url: '/projects/image-5.jpg',
    tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
  },
  {
    name: 'GreenLeafGardens.biz',
    desc: 'An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.',
    url: '/projects/image-6.jpg',
    tech: ['ReactJS', 'TailwindCSS', 'CSS', 'FramerMotion'],
  },
  {
    name: 'PixelPerfectDesigns.info',
    desc: 'A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.',
    url: '/projects/image-7.jpg',
    tech: ['NextJS', 'FramerMotion'],
  },
  {
    name: 'HarmonyHealthHub.com',
    desc: 'A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.',
    url: '/projects/image-8.jpg',
    tech: ['NextJS', 'ReactJS', 'FramerMotion'],
  },
  {
    name: 'StellarSkiesAstronomy.org',
    desc: 'An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.',
    url: '/projects/image-9.jpg',
    tech: ['ReactJS', 'JavaScript', 'ThreeJS'],
  },
  {
    name: 'UrbanEatsDelights.com',
    desc: 'A gourmet food blog sharing unique recipes, culinary tips, and reviews of local eateries and food trends.',
    url: '/projects/image-10.jpg',
    tech: ['NextJS', 'ThreeJS'],
  },
];

// Project buttons
export const projectsButton = [
  'All',
  'Figma',
  'Photoshop',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
  'ThreeJS'
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
  {
    question: 'How much do you charge for a website?',
    answer: 'Our website packages usually range from £2997 – £4997. However, it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.',
  },
  {
    question: 'Why are you so expensive?',
    answer: 'The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money.',
  },
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
  {
    question: 'Do you offer a payment schedule?',
    answer: 'Yes, we split the payment into two. The first 60% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 60% is taken 30 days after this.',
  },
  {
    question: 'Can I make the final payment when the site is ready to go live?',
    answer: 'No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.',
  },
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