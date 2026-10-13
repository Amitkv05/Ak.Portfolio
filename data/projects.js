export const projects = [
  {
    id: "shopvibe",
    index: "01",

    title: "SHOPVIBE E-COMMERCE",
    short: "SHOPVIBE",
    eyebrow: "MERN E-Commerce Platform",

    year: "2026",
    projectType: "Independent Project",

    stack: ["React.js", "Node.js", "MongoDB Atlas", "Zustand", "Cloudinary"],

    objective:
      "Build a production-oriented e-commerce platform with secure authentication, inventory-aware shopping flows, server-authoritative pricing, transaction-safe checkout, cloud media management and complete customer/admin experiences.",

    details:
      "A full-stack MERN e-commerce platform covering customer storefront, categories, products and variants, persistent cart and wishlist, addresses, coupons, reviews, inventory, COD checkout, orders, analytics and administrative operations.",

    approach:
      "Separated frontend presentation, API communication and backend business logic while keeping critical pricing, stock and checkout rules on the server. MongoDB transactions, idempotency and concurrency-safe inventory workflows help prevent duplicate orders and inconsistent stock.",

    metrics: [
      ["63 PASS", "Backend Tests"],
      ["ATOMIC", "Checkout"],
      ["97", "Performance"],
      ["FULL-STACK", "Delivery"],
    ],

    accent: "case-orange",

    screens: [
      "Home",
      "Products",
      "Product Details",
      "Cart",
      "Checkout",
      "Admin",
      "Orders",
      "Inventory",
    ],

    images: {
      cover: "/images/projects/ShopVibe/ShopVibe.webp",
      background: "/images/background.webp",

      gallery: [
        "/images/projects/ShopVibe/ShopVibe01.webp",
        "/images/projects/ShopVibe/ShopVibe02.webp",
        "/images/projects/ShopVibe/ShopVibe03.webp",
        "/images/projects/ShopVibe/ShopVibe04.webp",
      ],
    },

    githubUrl: "https://github.com/Amitkv05/ShopVibe-MERN-Ecommerce",

    liveUrl: "https://shopvibe-mern-ecommerce-frontend.onrender.com",

    apiHealthUrl: "https://shopvibe-mern-ecommerce.onrender.com/api/v1/health",
  },

  {
    id: "dartcrm",
    index: "02",

    title: "DARTCRM PLATFORM",
    short: "DARTCRM",
    eyebrow: "Full-Stack Web & Mobile CRM",

    year: "2026",
    projectType: "Independent Project",

    stack: ["React.js", "Flutter", "Node.js", "MySQL", "Redux Toolkit"],

    objective:
      "Create a shared CRM ecosystem across web and mobile where both clients use the same backend, authentication rules, business workflows and relational data while remaining optimized for their respective platforms.",

    details:
      "A multi-client CRM platform consisting of a React.js web application, Flutter mobile application and shared Node.js/Express.js REST API backed by MySQL. The platform covers customer operations, field workflows, attendance, sampling, stock requests, approvals, notifications and administrative management.",

    approach:
      "Designed the system around a shared API-first backend so React and Flutter clients follow consistent authentication, authorization and business rules. Structured complex CRM workflows into reusable modules with role-based access and CI validation across backend, web and mobile applications.",

    metrics: [
      ["WEB + APP", "Platforms"],
      ["SHARED API", "Architecture"],
      ["RBAC", "Access Control"],
      ["CI/CD", "Validation"],
    ],

    accent: "case-blue",

    screens: [
      "Dashboard",
      "Customers",
      "Contacts",
      "DSR",
      "Attendance",
      "Sampling",
      "Approvals",
      "Mobile App",
    ],

    images: {
      cover: "/images/projects/DartCRM/DartCRM.webp",
      background: "/images/background.webp",

      gallery: [
        "/images/projects/DartCRM/DartCrm01.webp",
        "/images/projects/DartCRM/DartCrm02.webp",
        "/images/projects/DartCRM/DartCrm03.webp",
        "/images/projects/DartCRM/DartCrm04.webp",
      ],
    },

    githubUrl: "https://github.com/Amitkv05/DartCRM-Platform",

    liveUrl: "",
  },

  {
    id: "multivendor",
    index: "03",

    title: "MULTI-VENDOR E-COMMERCE",
    short: "MULTI-VENDOR",
    eyebrow: "Full-Stack Multi-Vendor E-Commerce",

    year: "2025",
    projectType: "Professional Project · WebRoj",

    stack: ["Flutter", "Dart", "Riverpod", "Node.js", "MongoDB", "Firebase"],

    objective:
      "Build a multi-role e-commerce platform supporting customers, vendors and administrators through dedicated interfaces connected to shared backend services and commerce workflows.",

    details:
      "A full-stack multi-vendor e-commerce platform with a Flutter customer application, Flutter vendor application, Flutter Web admin interface and backend services supporting authentication, products, inventory, orders and platform operations.",

    approach:
      "Separated customer, vendor and admin experiences while keeping commerce data and backend workflows consistent. Riverpod-based state management, REST communication, Firebase authentication, product media workflows and CI/CD support were used across the platform.",

    metrics: [
      ["3 ROLES", "Platform"],
      ["2 MOBILE", "Applications"],
      ["WEB ADMIN", "Operations"],
      ["CI/CD", "Delivery"],
    ],

    accent: "case-pink",

    screens: [
      "Customer App",
      "Vendor App",
      "Admin Web",
      "Products",
      "Cart",
      "Orders",
      "Inventory",
      "Analytics",
    ],

    images: {
      cover: "/images/projects/MultiVendor/multiVendor.webp",
      background: "/images/background.webp",

      gallery: [
        "/images/projects/MultiVendor/firstScreen.webp",
        "/images/projects/MultiVendor/secondScreen.webp",
        "/images/projects/MultiVendor/thirdScreen.webp",
        "/images/projects/MultiVendor/forthScreen.webp",
      ],
    },

    githubUrl: "https://github.com/Amitkv05/E_Commerce_Platform",

    liveUrl: "",
  },
];
