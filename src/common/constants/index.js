import {
  tma,
  code88
} from "../assets";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiNetlify,
  SiJava,
  SiSpringboot,
  SiSpringsecurity,
  SiAntdesign,
  SiWebpack,
  SiFirebase,
  SiAmazonaws,
  SiPostgresql,
  SiOracle,
  SiApachehive,
  SiDocker,
  SiEclipseide,
  SiIntellijidea,
  SiSubversion,
  SiJenkins,
  SiAmazondynamodb
} from "react-icons/si";

import {
  AiFillGithub,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  GrServices,
  GrMysql,
  GrHadoop
} from "react-icons/gr";

import {
  DiDatabase,
  DiSpark,
  DiNetbeans
} from "react-icons/di";

import {
  GiDatabase
} from "react-icons/gi";

import { DiCss3, DiMsqlServer, DiRuby } from "react-icons/di";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-0",
        icon: SiSpringboot,
        name: "SpringBoot",
      },
      {
        id: "f-0-1",
        icon: SiSpringsecurity,
        name: "Spring Security",
      },
      {
        id: "f-0-2",
        icon: GrServices,
        name: "MicroServices",
      },
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiAntdesign,
        name: "Ant Design",
      },
      {
        id: "f-2-1",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-5",
        icon: SiWebpack,
        name: "Webpack",
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        id: "c-1",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "c-2",
        icon: SiFirebase,
        name: "Firebase",
      }
    ],
  },
  {
    title: "Database",
    items: [
      {
        id: "db-1",
        icon: GrMysql,
        name: "MySQL",
      },
      {
        id: "db-2",
        icon: SiPostgresql,
        name: "Postgresql",
        
      },
      {
        id: "db-3",
        icon: SiOracle,
        name: "Oracle",
      },
      {
        id: "db-4",
        icon: DiDatabase,
        name: "Sysbase",
      }
    ],
  },
  {
    title: "Big Data",
    items: [
      {
        id: "bd-1",
        icon: GrHadoop,
        name: "Hadoop",
      },
      {
        id: "bd-2",
        icon: DiSpark,
        name: "Spark",
        
      },
      {
        id: "bd-3",
        icon: SiApachehive,
        name: "Hive",
      },
      {
        id: "bd-4",
        icon: GiDatabase,
        name: "HBase",
      },
      {
        id: "bd-5",
        icon: SiAmazondynamodb,
        name: "DynamoDB",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "t-4.0",
        icon: SiSubversion,
        name: "SVN",
      },
      {
        id: "t-4.1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-9",
        icon: SiEclipseide,
        name: "Eclipse",
      },
      {
        id: "t-10",
        icon: SiIntellijidea,
        name: "Intellij",
      },
      {
        id: "t-11",
        icon: DiNetbeans,
        name: "Netbeans",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "CODE88 Company Limited",
    logo: code88,
    link: "https://www.code88.asia/v1/index.php",
    positions: [
      {
        title: "Senior Java Developer",
        duration: "May 2018 - July 2022",
        content: [
          {
            text: "Built RESTful API to consume user or UI requests and 3rd-party using Java 11, Spring Boot, Spring Security and wrote unit tests using JUnit, Mockito and code reviews while mentoring team members.",
            link: "",
          },
          {
            text: "Built web applications from the scratch and applied responsive websites, dynamic layouts, and multiple themes using React, React Hooks, Redux, React Bootstrap, SASS, Gulp.",
            link: "",
          },
          {
            text: "Implemented local caching in Redis for Java applications.",
            link: "",
          },
          {
            text: "Implemented file transfers by using SFTP in Java (JSch).",
            link: "",
          },
          {
            text: "Implemented messaging services for asynchronous communication between services using Kafka.",
            link: "",
          },
          {
            text: "Migrated services to AWS using IAM, API Gateway, Lambda, S3, EC2, CloudFront, CloudWatch.",
            link: "",
          },
          {
            text: "Developed common functions for team members by using coding convention and Design Patterns.",
            link: "",
          },
          {
            text: "Participated in discussions regarding task estimations and new features at daily Scrum meetings.",
            link: "",
          },
          {
            text: "Checked and solved problems related to staging and production environments using Elasticsearch.",
            link: "",
          },
          {
            text: "Produced new system diagrams, designs, and documentation to company's Wiki site.",
            link: "",
          },
          {
            text: "Developed backend system administration capabilities allowing more efficient data management.",
            link: "",
          }
        ],
      },
    ],
  },
  {
    organisation: "TMA Solutions",
    logo: tma,
    link: "https://www.tmasolutions.com/about-us",
    positions: [
      {
        title: "Senior Java Developer",
        duration: "Aug 2017 - May 2018",
        content: [
          {
            text: "Conducted Front-end and Back-end programming using Reactjs and Java",
            link: "",
          },
          {
            text: "Developed high-performance React application using React Context, and Redux",
            link: "",
          },
          {
            text: "Maximized software performance by researching and identifying emerging technologies and libraries to implement in new solutions",
            link: "",
          },
          {
            text: "Developed large-scale complex applications",
            link: "",
          },
          {
            text: "Customized and improved API performance",
            link: "",
          },
          {
            text: "Plan and complete the release on time",
            link: "",
          },
          {
            text: "TMA Quarterly Star Performers - 1st Quarter 2018",
            link: "https://www.facebook.com/tmasolutions/photos/a.1788952404494896/1788953014494835/?type=3",
          },
        ],
      },
      {
        title: "Java Developer",
        duration: "Sep 2014 - Aug 2017",
        content: [
          {
            text: "Analyzed business requirements with team lead and determined technical solutions",
            link: "",
          },
          {
            text: "Maximized software performance by researching and identifying emerging technologies and libraries to implement in new solutions",
            link: "",
          },
          {
            text: "Enhanced backend performance by refactoring code and database",
            link: "",
          },
          {
            text: "Researched and implemented new technologies in web application",
            link: "",
          },
          {
            text: "Resolve and deliver hotfix to customers on time",
            link: "",
          }
        ],
      },
    ],
  },
  
];