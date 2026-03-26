import { 
  FiCheckSquare, 
  FiZap, 
  FiUsers, 
  FiBarChart2, 
  FiLink, 
  FiShield 
} from "react-icons/fi";

import Image1 from '../assets/Carousel1.webp';
import Image2 from '../assets/Carousel2.webp';
import Image3 from '../assets/Carousel3.webp';

export const featuresData = [
  {
    id: 1,
    // We pass the component reference itself, not invoked as <FiCheckSquare />
    icon: FiCheckSquare, 
    title: "Smart Task Management",
    desc: "Organize tasks, set priorities, and track progress with an intuitive and flexible task management system."
  },
  {
    id: 2,
    icon: FiZap,
    title: "Workflow Automation",
    desc: "Automate repetitive processes with custom triggers and actions to save time and boost efficiency."
  },
  {
    id: 3,
    icon: FiUsers,
    title: "Real-Time Collaboration",
    desc: "Collaborate with your team in real-time with shared workspaces, comments, and instant updates."
  },
  {
    id: 4,
    icon: FiBarChart2,
    title: "Analytics & Insights",
    desc: "Get powerful insights into your workflow performance with real-time analytics and reporting tools."
  },
  {
    id: 5,
    icon: FiLink,
    title: "Seamless Integrations",
    desc: "Connect NovaFlow with your favorite tools and APIs to streamline your workflow effortlessly."
  },
  {
    id: 6,
    icon: FiShield,
    title: "Secure Cloud Platform",
    desc: "Enterprise-grade security and reliable cloud infrastructure to keep your data safe and accessible."
  }
];

export const imageCards = [
  {
    id: 1,
    title: "Task Management",
    img: Image1
  },
  {
    id: 2,
    title: "WorkFlow Automation",
    img: Image2
  },
  {
    id: 3,
    title: "Team Collaboration",
    img: Image3
  },
];

export const pricingData = [
  {
    id: 1,
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Best for individuals getting started.",
    features: [
      "Up to 3 projects",
      "Basic task management",
      "Basic Automation support",
      "Limited workflow automation",
      "Upto One Teams workspace",
      "Community support"
    ],
    ctaText: "Get Started",
    isPopular: false
  },
  {
    id: 2,
    name: "Pro",
    priceMonthly: 12,
    priceYearly: 120, // Calculates to $10/mo, saving 20%
    description: "Best for small teams & startups.",
    features: [
      "Unlimited projects",
      "Advanced task management",
      "Workflow automation (custom rules)",
      "Real-time collaboration",
      "Basic analytics dashboard",
      "Email support"
    ],
    ctaText: "Start Free Trial",
    isPopular: true // We will use this boolean to trigger the highlights and badges!
  },
  {
    id: 3,
    name: "Business",
    priceMonthly: 29,
    priceYearly: 290, // Roughly 2 months free
    description: "Best for growing teams & companies.",
    features: [
      "Everything in Pro",
      "Advanced analytics & reports",
      "Team roles & permissions",
      "API integrations",
      "Priority support",
      "Enhanced security"
    ],
    ctaText: "Contact Sales",
    isPopular: false
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder",
    company: "SyncTech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review: "NovaFlow completely transformed our sprint cycles. The custom automation triggers easily save my engineering team 10+ hours every week. It just works."
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Senior Product Manager",
    company: "Elevate UI",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "The onboarding is incredibly frictionless. We migrated a team of 40 over a weekend, and by Monday, cross-functional collaboration was smoother than it has been in years."
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Managing Director",
    company: "Apex Retail Group",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review: "As we scaled, tracking multiple moving parts became a nightmare. NovaFlow gives me a bird's-eye view of our entire operation without the usual enterprise software bloat."
  },
  {
    id: 4,
    name: "Daniel Lee",
    role: "Lead Frontend Developer",
    company: "Freelance",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    review: "I’ve tried Jira, Trello, and Asana. NovaFlow is the only tool that gives me the power features I need for complex API integrations without a chaotic, cluttered interface."
  },
  {
    id: 5,
    name: "Sophia Williams",
    role: "Operations Lead",
    company: "MarketScale",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "The real-time analytics dashboard is a lifesaver. Instead of manually pulling weekly progress reports, we just share the NovaFlow dashboard. It keeps the whole team perfectly aligned."
  },
  {
    id: 6,
    name: "Marcus Thorne",
    role: "Creative Director",
    company: "Lumina Agency",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    review: "Managing multiple client campaigns used to mean endless email chains and missed deadlines. NovaFlow brought all our creative workflows into one intuitive space. Our team's delivery speed has easily increased by 30%."
  }
];