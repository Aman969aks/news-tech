const newsData = [
  {
    id: 1,
    title: "Artificial Intelligence Is Changing the Future",
    description:
      "Artificial Intelligence is transforming the way people work, learn, communicate and use technology.",
    category: "Technology",
    author: "News Tech",
    date: "August 10, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },

  {
    id: 2,
    title: "New Smartphone Technology Arrives",
    description:
      "The latest smartphone technology brings better performance, improved cameras and smarter features.",
    category: "Technology",
    author: "Tech Desk",
    date: "August 9, 2026",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },

  {
    id: 3,
    title: "Global Business Market Continues to Grow",
    description:
      "Businesses are adopting modern technologies to improve productivity and create better customer experiences.",
    category: "Business",
    author: "Business Desk",
    date: "August 8, 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },

  {
    id: 4,
    title: "Technology Is Transforming Modern Sports",
    description:
      "Modern sports are using advanced technology to improve player performance and make games more accurate.",
    category: "Sports",
    author: "Sports Desk",
    date: "August 8, 2026",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  },

  {
    id: 5,
    title: "Cloud Computing Becomes More Popular",
    description:
      "Companies are increasingly using cloud computing to store data and run their digital services.",
    category: "Technology",
    author: "Tech Desk",
    date: "August 7, 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },

  {
    id: 6,
    title: "Cybersecurity Becomes a Major Priority",
    description:
      "Organizations are investing more in cybersecurity to protect important data from online threats.",
    category: "Technology",
    author: "Security Desk",
    date: "August 6, 2026",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  },

  {
    id: 7,
    title: "Electric Vehicles Continue to Gain Attention",
    description:
      "Electric vehicles are becoming increasingly popular as companies introduce new models and better battery technology.",
    category: "Technology",
    author: "Auto Desk",
    date: "August 5, 2026",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
  },

  {
    id: 8,
    title: "Startup Companies Attract New Investors",
    description:
      "Technology startups are attracting investors with innovative products and new digital business models.",
    category: "Business",
    author: "Business Desk",
    date: "August 4, 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
  },

  {
    id: 9,
    title: "The Future of Online Education",
    description:
      "Online education platforms are helping students learn new skills from anywhere using digital technology.",
    category: "Education",
    author: "Education Desk",
    date: "August 3, 2026",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
  },

  {
    id: 10,
    title: "Data Science Is Becoming an Important Career",
    description:
      "Companies are using data science and analytics to make better decisions and understand their customers.",
    category: "Technology",
    author: "Tech Desk",
    date: "August 2, 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },

  {
    id: 11,
    title: "Mobile Apps Are Changing Everyday Life",
    description:
      "Mobile applications are making communication, shopping, banking and entertainment easier for users.",
    category: "Technology",
    author: "Tech Desk",
    date: "August 1, 2026",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },

  {
    id: 12,
    title: "Digital Payments Continue to Grow",
    description:
      "Digital payment systems are becoming an important part of modern businesses and everyday transactions.",
    category: "Business",
    author: "Finance Desk",
    date: "July 31, 2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
  },

  {
    id: 13,
    title: "Robotics Is Entering New Industries",
    description:
      "Robots are increasingly being used in manufacturing, healthcare, logistics and other important industries.",
    category: "Technology",
    author: "Tech Desk",
    date: "July 30, 2026",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },

  {
    id: 14,
    title: "Social Media Continues to Influence Digital Culture",
    description:
      "Social media platforms are changing how people communicate, discover information and interact with brands.",
    category: "Digital",
    author: "Digital Desk",
    date: "July 29, 2026",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
  },

  {
    id: 15,
    title: "Renewable Energy Projects Expand Worldwide",
    description:
      "Countries and companies are investing in solar, wind and other renewable energy technologies.",
    category: "Environment",
    author: "Environment Desk",
    date: "July 28, 2026",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276"
  },

  {
    id: 16,
    title: "Smart Homes Are Becoming More Common",
    description:
      "Connected home devices are helping people automate lighting, security, entertainment and energy usage.",
    category: "Technology",
    author: "Tech Desk",
    date: "July 27, 2026",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3"
  },

  {
    id: 17,
    title: "Gaming Industry Reaches New Heights",
    description:
      "The gaming industry continues to grow with new platforms, powerful hardware and immersive experiences.",
    category: "Gaming",
    author: "Gaming Desk",
    date: "July 26, 2026",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  },

  {
    id: 18,
    title: "Space Technology Enters a New Era",
    description:
      "Private companies and space agencies are developing new technologies for exploration and satellite services.",
    category: "Science",
    author: "Science Desk",
    date: "July 25, 2026",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  },

  {
    id: 19,
    title: "5G Networks Continue to Expand",
    description:
      "Faster mobile networks are creating new opportunities for connected devices, streaming and digital services.",
    category: "Technology",
    author: "Tech Desk",
    date: "July 24, 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },

  {
    id: 20,
    title: "Digital Banking Is Changing Financial Services",
    description:
      "Digital banking services are making financial transactions faster and more accessible for customers.",
    category: "Finance",
    author: "Finance Desk",
    date: "July 23, 2026",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },

  {
    id: 21,
    title: "Artificial Intelligence Helps Modern Healthcare",
    description:
      "AI technologies are helping researchers and healthcare organizations analyze information and improve services.",
    category: "Health Tech",
    author: "Science Desk",
    date: "July 22, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
  },

  {
    id: 22,
    title: "Future Cities Will Depend on Smart Technology",
    description:
      "Smart city technologies can improve transportation, energy management, public services and urban planning.",
    category: "Technology",
    author: "Future Desk",
    date: "July 21, 2026",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
  },

  {
    id: 23,
    title: "Online Shopping Continues to Transform Retail",
    description:
      "E-commerce platforms are changing how consumers discover products, compare prices and complete purchases.",
    category: "Business",
    author: "Business Desk",
    date: "July 20, 2026",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18"
  },

  {
    id: 24,
    title: "Virtual Reality Creates New Digital Experiences",
    description:
      "Virtual reality technology is being explored across gaming, education, training and entertainment.",
    category: "Technology",
    author: "Digital Desk",
    date: "July 19, 2026",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
  },

  {
    id: 25,
    title: "The Future of Remote Work",
    description:
      "Modern communication tools and cloud platforms are making remote and hybrid work easier for organizations.",
    category: "Business",
    author: "Business Desk",
    date: "July 18, 2026",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902"
  }
];

export default newsData;