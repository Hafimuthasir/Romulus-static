import {
  bowsertruck,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  drf,
  datm,
} from "../assets";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Bowser Trucks",
    icon: bowsertruck,
    description:"Bowser trucks are vehicles that can transport 4k to 6k litres of diesel per trip. They will be filled at the Indian Oil refinery, from where they will transport diesel directly to cranes, stone crushers, generators, heavy immovable objects at the customer site ensuring uninterupted fuel supply."
  },
  {
    title: "DATMS",
    icon: datm,
    description:"DATM is an automatic (stationary) diesel dispenser placed at customer premises. It holds 2k litres of diesel at any point. Customers can refuel their trucks by driving up to the ATM. When the fuel tank level drops below 500L, Romulus is intimated and dispatches a bowser truck for a refill."
  }
];


const technologies = [
  {
    name:"Python",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name:"Django",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"PostgreSQL",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"RESTful APIs",
    icon: "https://img.icons8.com/nolan/64/api-settings.png"
  },
  {
    name:"Django Rest Framework",
    icon: drf
  },
  {
    name:"Bootstrap",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    name:"Material UI",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },

];

const familiar = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"Micro services",
    icon:"https://img.icons8.com/external-soft-fill-juicy-fish/60/null/external-microservice-microservices-soft-fill-soft-fill-juicy-fish.png"
  },
  {
    name:"Data Structures",
    icon:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-structured-data-data-analytics-flaticons-lineal-color-flat-icons.png"
  },
  {
    name:"Django Channels",
    icon:"https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-channels-digital-marketing-outline-solidglyph-m-oki-orlando.png"
  },
  {
    name:"Web Socket",
    icon:"https://img.icons8.com/ios-filled/50/null/plug-1.png"
  },
  {
    name:"JWT",
    icon:"https://img.icons8.com/color-pixels/32/null/experimental-lock-color-pixels.png"
  },
  {
    name:"Celery",
    icon:"https://img.icons8.com/fluency/48/null/celery.png"
  },
  {
    name:"AWS",
    icon:"https://img.icons8.com/color/48/null/amazon-web-services.png"
  }
]

const experiences = [
  {
    title: "Discount and Credit",
    // company_name: "Developers Community App",
    icon: "discount",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    source_code:"https://github.com/Hafimuthasir/Backend-ConnectX-.git",
    points: [
      "Current fuel market relies on any one of two options, a discount per litre or a credit period. Petrol pump owners have high fixed costs and can only afford to offer one.Romulus offers both discount and credit period to pre-selected customers with good payment history through a fuel loan card from Tata Motors Finance.",
      // "Romulus offers a discount per litre to pre-selected customers with an excellent track record history with Tata Motors Finance. These customers can also get 30 days credit on fuel purchases through a fuel loan card offered by TMF.",
    ],
    technologies:[
      ["https://img.icons8.com/color/48/null/python--v1.png","Python"],
      ["https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png","Django -Backend framework"],
      ["https://img.icons8.com/plasticine/100/null/react.png","React.js -Frontend framework"],
      ["https://img.icons8.com/color/48/null/postgreesql.png","PostgreSQL -Database."],
      ["https://img.icons8.com/fluency/48/null/api-settings.png","Django REST Framework"],
      ["https://img.icons8.com/fluency/48/null/celery.png","Celery"],
      ["https://img.icons8.com/color/48/null/stripe.png","Stripe Payment"],
      ["https://img.icons8.com/ios-filled/50/null/plug-1.png","WebSocket"],
      ["https://img.icons8.com/color/48/null/unicorn--v1.png","Gunicorn,Uvicorn"],
      ["https://img.icons8.com/color/48/null/amazon-web-services.png","AWS S3, Amplify, EC2"],
      ["https://img.icons8.com/color-pixels/32/null/experimental-lock-color-pixels.png","JWT"],
      ["https://img.icons8.com/color/48/null/tailwindcss.png","Tailwind CSS"],
      ["https://img.icons8.com/color/48/null/material-ui.png","Material UI"],
      ["https://img.icons8.com/nolan/64/m-key.png","Framer Motion"],
      ["https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-channels-digital-marketing-outline-solidglyph-m-oki-orlando.png","Channels"],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg","Redis"]
    ]
  },
  {
    title: "Higher Margin",
    // icon: "E-commerce",
    icon: "margin",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    source_code:"https://github.com/Hafimuthasir/groves2.git",
    points: [
      "Petrol pump owners currently are forced to work on smaller margins than Romulus, as the OMCs (Oil Marketing Companies e.g. HP, BP, IOCL) have direct investments in the petrol pumps, but this is not the case for Romulus. As a result, Romulus is able to obtain a higher margin from the OMCs.",
    ],
  },
  {
    title: "Cost Saving",

    icon: "save",
    points: [
      "Romulus offers diesel directly at the doorstep of the end-user, which has a cumulative effect. For example, on average our customers own 150-200 trucks each. If each truck has to travel ~5kms to a petrol pump, we save each customer 750 kms running per day, or 22,500 kms per month.",
    ],
   
  },

];





















export { services, technologies, experiences, familiar };
