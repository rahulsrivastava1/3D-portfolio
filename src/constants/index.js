import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  sphinx,
  innomatics,
  celebal,
  airbnb,
  memories,
  newsapp,
  mern,
  azure_devops_p,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer (React)",
    icon: web,
  },
  {
    title: "Backend Developer (Node)",
    icon: backend,
  },
  {
    title: "Sphinx Developer (rtd)",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "sphinx",
    icon: sphinx,
  },
  {
    name: "Azure Devops",
    icon: azure_devops_p,
  },
];

const technologies_phone = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "sphinx",
    icon: sphinx,
  },
  {
    name: "Azure Devops",
    icon: azure_devops_p,
  },
];

const experiences = [
  {
    title: "MERN Developer",
    company_name: "Innomatics Research Labs",
    icon: innomatics,
    iconBg: "#E6DEDD",
    date: "November 2021 - February 2022",
    points: [
      "Developing and maintaining web applications using MERN technology and other related technologies.",
      "Developed a clone of the Airbnb web app, where users can find their accommodation and also property dealers rent out their spaces after the successful authentication.",
      "This app uses two types of authentications, one is through email and password and the other is using Google authentication.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sphinx Developer",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using rtd theme of Sphinx Framework and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing a project called Celebal Gyan Platform based on Databricks department.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React, Node and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing a project called CoE Landing Zone, and Parikshak based on Databricks department.",
      "Developing a project called CoE Report using D3 library which will show all graphs such as piechart, bargraph etc. based on backend data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rahul proved me wrong.",
    name: "Kumar Shashank",
    designation: "Software Developer",
    company: "CloudKaptaan",
    image: "https://avatars.githubusercontent.com/u/34642119?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rahul does.",
    name: "Shivansh Jaitly",
    designation: "Advanced Application Engineering Analyst",
    company: "Accenture",
    image: "https://avatars.githubusercontent.com/u/61774851?v=4",
  },
  {
    testimonial:
      "After Rahul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rahul Raj",
    designation: "Developer",
    company: "XenonStack",
    image: "https://avatars.githubusercontent.com/u/73031072?v=4",
  },
];

const projects = [
  {
    name: "AirBnb Clone",
    description:
      "Web-based platform that allows users to search, and book space from various providers, providing a convenient and efficient for accomodation needs. Property dealers can rent out their spaces after the successful authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://rahul-airbnb-clone.netlify.app/",
  },
  {
    name: "Memories",
    description:
      "Web application that enables users to create their memories with timestamps and tags. They can update, delete after successfull authentication. They can also search, like and comment on the posts. Posts will suggested if users open any memories description.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://rahul-memories.netlify.app/posts",
  },
  {
    name: "News App",
    description:
      "Web application that enables users to see the news from different sections like sports, technology, health, IT, science etc. It uses NEWS API to fetch the latest news. There is also a Navbar for getting desired section's result",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/rahulsrivastava1/News-App",
  },
];

const blogs = [
  {
    title:
      "Simple and Concise Git Commands That Every Software Developer Should know",
    date: "23rd September 2021",
    image: git,
    description:
      "It is a simple article based on Git Commands. We have git commands that become very crucial that one should.",
    link: "https://www.geeksforgeeks.org/simple-and-concise-git-commands-that-every-software-developer-should-know/",
  },
  {
    title: "Deploying MERN Stack Application",
    date: "26th February 2022",
    image: mern,
    description: "Netlify for Frontend and Heroku for Backend.",
    link: "https://medium.com/@srivastavar433/deploying-mern-stack-application-70539a7ac397",
  },
  {
    title: "Deploying React Application on GitHub",
    date: "19th January 2022",
    image: reactjs,
    description: "GitHub Pages for React App Deployment.",
    link: "https://medium.com/@srivastavar433/deploying-react-app-on-github-ed7cb3993f41",
  },
];

export {
  services,
  technologies,
  technologies_phone,
  experiences,
  testimonials,
  projects,
  blogs,
};
