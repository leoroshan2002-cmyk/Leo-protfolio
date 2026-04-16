export const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
];

export const MERN_STACK = [
  { name: 'MongoDB',    color: '#00ed64', icon: 'M', desc: 'NoSQL Database' },
  { name: 'Express.js', color: '#f0a500', icon: 'E', desc: 'Backend Framework' },
  { name: 'React',      color: '#61dafb', icon: 'R', desc: 'Frontend Library' },
  { name: 'Node.js',    color: '#68a063', icon: 'N', desc: 'Runtime Environment' },
];

export const SKILLS = [
  { category: 'Frontend', color: '#61dafb', items: [
    { name: 'React.js',     pct: 95 },
    { name: 'Next.js',      pct: 88 },
    { name: 'TypeScript',   pct: 85 },
    { name: 'Tailwind CSS', pct: 92 },
    { name: 'Redux',        pct: 80 },
  ]},
  { category: 'Backend', color: '#68a063', items: [
    { name: 'Node.js',     pct: 92 },
    { name: 'Express.js',  pct: 90 },
    { name: 'REST APIs',   pct: 95 },
 
  ]},
  { category: 'Database', color: '#00ed64', items: [
    { name: 'MongoDB',     pct: 93 },
    { name: 'Mongoose',    pct: 90 },
    { name: 'PostgreSQL',  pct: 75 },

  ]},
  { category: 'DevOps', color: '#f0a500', items: [
    { name: 'Docker',       pct: 78 },
    { name: 'AWS / EC2',    pct: 72 },
    { name: 'CI/CD',        pct: 80 },
    { name: 'Git / GitHub', pct: 95 },
    
  ]},
];

export const PROJECTS = [
   {
    id: 1,
    title: 'IRONCORE: GYM MANAGEMENT SYSTEM',
    subtitle: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce platform with Stripe payments, inventory management, admin panel, and order tracking with real-time updates.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Cloudinary'],
    features: ['Payment gateway', 'Admin dashboard', 'Order tracking', 'Product reviews'],
    demo: '#', repo: '#', featured: true,
    color: '#00ed64',
  },

  {
    id: 2,
    title: 'E-LEARNING PLATFORM',
    subtitle: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce platform with Stripe payments, inventory management, admin panel, and order tracking with real-time updates.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Cloudinary'],
    features: ['Payment gateway', 'Admin dashboard', 'Order tracking', 'Product reviews'],
    demo: '#', repo: '#', featured: true,
    color: '#00ed64',
  },

   


];

export const SERVICES = [
  { icon: '', title: 'React Development', color: '#61dafb', desc: 'Building blazing-fast, scalable SPAs and SSR apps with React, Next.js, hooks, and modern state management.' },
  { icon: '', title: 'REST & GraphQL APIs', color: '#68a063', desc: 'Designing clean, documented REST and GraphQL APIs with Express.js, proper auth, rate-limiting, and error handling.' },
  { icon: '', title: 'MongoDB Architecture', color: '#00ed64', desc: 'Schema design, indexing strategies, aggregation pipelines, and cloud deployments on MongoDB Atlas.' },
];

export const STATS = [
  { num: '2+',  label: 'Years MERN Experience' },
  { num: '10+', label: 'Projects Delivered'    },
  { num: '15+', label: 'Happy Clients'         },
  { num: '8',   label: 'OSS Contributions'     },
];

export const TESTIMONIALS = [
  { name: 'Sarah Chen', role: 'CTO at TechVentures', text: 'Alex built our entire platform from scratch. Incredible MERN expertise, clean code, and always delivered on time.', avatar: 'SC' },
  { name: 'Marcus Reid', role: 'Founder at LaunchPad', text: 'Our e-commerce app handles 50k+ users with zero downtime. Alex architected everything perfectly.', avatar: 'MR' },
  { name: 'Priya Sharma', role: 'Lead Dev at Finstack', text: 'Best MERN developer we have worked with. Deep knowledge of MongoDB optimization and React performance.', avatar: 'PS' },
];
