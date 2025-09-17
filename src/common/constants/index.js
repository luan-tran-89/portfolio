import {
  tma,
  code88,
  oclc,
  cem,
  zustand
} from "../assets";

import {
  SiJavascript,
  SiBootstrap,
  SiMaterialui,
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
  SiAmazondynamodb,
  SiMongodb,
  SiAngular,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiCloudflare,
  SiFigma,
  SiRedux
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
      },
      {
        id: "pl-3",
        icon: SiTypescript,
        name: "Typescript",
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
        id: "f-1-0",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-1-1",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-1",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-1-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-1-1-1",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-1-1-2",
        icon: zustand,
        name: "Zustand",
      },
      {
        id: "f-1-2",
        icon: SiAntdesign,
        name: "Ant Design",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-2-0",
        icon: SiMaterialui,
        name: "Material UI",
      },
      {
        id: "f-2-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-2-2",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-3",
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
      },
      {
        id: "db-5",
        icon: SiAmazondynamodb,
        name: "DynamoDB",
      },
      {
        id: "db-5",
        icon: SiMongodb,
        name: "Mongodb",
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
      }
    ],
  },
  {
    title: "Caching",
    items: [
      {
        id: "c-1",
        icon: SiRedis,
        name: "Redis",
      },
      {
        id: "c-2",
        icon: SiCloudflare,
        name: "CDN",
      }
    ]
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
      {
        id: "t-12",
        icon: SiFigma,
        name: "Figma",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "OCLC Inc.",
    logo: oclc,
    link: "https://www.oclc.org/en/home.html",
    positions: [
      {
        title: "Senior Software Engineer ",
        duration: "July 2024 - now",
        domain: "Online Computer Library Center",
        content: [
          {
            text: "Design, develop, and maintain enterprise identity management solutions for authentication and authorization.",
            link: "",
          },
          {
            text: "Implement secure authentication mechanisms using Spring Security, OAuth 2.0, and JWT",
            link: "",
          },
          {
            text: "Develop scalable front-end applications using ReactJS, Redux, Zustand, and Material UI.",
            link: "",
          },
          {
            text: "Build and enhance user management and authorization management systems for enterprise application.",
            link: "",
          },
          {
            text: "Migrate legacy Thymeleaf to modern ReactJS applications for improved performance and user experience.",
            link: "",
          },
          {
            text: "Manage and optimize relational databases including MySQL, Postgres  for identity and access management data.",
            link: "",
          },
          {
            text: "Collaborate with cross-functional teams to integrate identity services with various applications.",
            link: "",
          },
          {
            text: "Ensure security best practices, compliance, and high availability of authentication systems.",
            link: "",
          },
          {
            text: "Modernized Authentication UI by migrating the Managed Authentication UI (MAUI) and Managed User Service UI (MUS) from Thymeleaf to ReactJS, improving UI performance and maintainability",
            link: "",
          },
          {
            text: "Developed an Authorization Management System that centralizes role-based access control (RBAC), managing user permissions and roles across all applications",
            link: "",
          },
          {
            text: "Optimized authentication workflows, reducing login failures and improving system resilience",
            link: "",
          },
          {
            text: "Enhanced security measures by implementing multi-factor authentication (MFA) and fine-grained access controls",
            link: "",
          },
          {
            text: "Improved system performance by optimizing API calls and database queries, reducing authorization response time",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "CEM Technology Inc.",
    logo: cem,
    link: "https://cemtechinc.com/",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Jan 2024 - Jun 2024",
        domain: "Online Computer Library Center",
        content: [
          {
            text: "Contributed to the development of software and features for multiple data centers.",
            link: "",
          },
          {
            text: "Attended Sprint meetings and contributed to discussions regarding task estimations and new features.",
            link: "",
          },
          {
            text: "Built RESTful APIs to consume internal services or UI requests, and 3rd-party using Spring, Spring Security, JWT.",
            link: "",
          },
          {
            text: "Enhanced and troubleshoot existing APIs to improve efficiency and meet new business needs.",
            link: "",
          },
          {
            text: "Make sure the Hessian migration does not affect existing functions.",
            link: "",
          },
          {
            text: "Implemented unit tests and integration tests using JUnit, Mockito to ensure the functionalities.",
            link: "",
          },
          {
            text: "Performed code reviews for team members to ensure code quality.",
            link: "",
          },
          {
            text: "Produced system diagrams, designs, and documentation for the company's confluence site.",
            link: "",
          },
          {
            text: "Migrated Java 11 to Java 17 for some modules of Acquisition project.",
            link: "",
          },
          {
            text: "Implemented Spring Security, OAuth 2.0 and JWT.",
            link: "",
          },
          {
            text: "Replaced the Hessian service to Spring RPC services.",
            link: "",
          },
          {
            text: "Migrated internal services to call Spring RPC services using REST template, Webflux.",
            link: "",
          },
          {
            text: "Migrated the current server infrastructure from Node.js to a Java-based server",
            link: "",
          },
          {
            text: "Implemented the IRProxy client that is a midware between ACQ modules and IRProxy REST service.",
            link: "",
          }
        ],
      },
    ],
  },
  {
    organisation: "CODE88 Company Limited",
    logo: code88,
    link: "https://www.code88.asia/v1/index.php",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "May 2018 - July 2022",
        client: "Pinnacle",
        domain: "Entertainment platform",
        content: [
          {
            text: "Contributed to the development of software and features while providing multi-client support.",
            link: "",
          },
          {
            text: "Attended Sprint meetings and contributed to discussions regarding task estimations and new features.",
            link: "",
          },
          {
            text: "Built RESTful APIs to consume user or UI requests and 3rd-party using Java 11, Spring Boot, Spring Security.",
            link: "",
          },
          {
            text: "Implemented unit tests and integration tests using JUnit, Mockito to ensure the functionalities.",
            link: "",
          },
          {
            text: "Developed common functions for team members by using coding convention and Design Patterns.",
            link: "",
          },
          {
            text: "Enhanced and troubleshoot existing APIs to improve efficiency and meet new business needs.",
            link: "",
          },
          {
            text: "Performed code reviews for team members to ensure code quality.",
            link: "",
          },
          {
            text: "Participated on-call, analyzed, and fixed issues in staging and production environments.",
            link: "",
          },
          {
            text: "Produced new system diagrams, designs, and documentation to company's Wiki site.",
            link: "",
          },
          {
            text: "Designed and developed backend system administration capabilities allowing more efficient data management.",
            link: "",
          },
          {
            text: "Designed and developed backend system administration capabilities allowing more efficient data management.",
            link: "",
          },
          {
            text: "Improved APIs performance by using local caching in Redis and refactoring codes.",
            link: "",
          },
          {
            text: "Implemented file transfers using SFTP in Java (JSch) to manage files via the Back Office site.",
            link: "",
          },
          {
            text: "Applied new technologies such as API Gateway, Discovery Server, Configuration Server, OAuth, Circuit Breaker, Swagger, and Kafka to build Back Office microservices.",
            link: "",
          },
          {
            text: "Migrated images and files from the server to AWS using IAM, S3, CloudWatch and created API Gateway, Lambda, CloudFront to load images and deployed some services to EC2.",
            link: "",
          },
          {
            text: "Built web applications from scratch to easily apply responsive websites, dynamic layouts, and multiple themes to provide client’s requirements using Angular, React, Redux, Bootstrap, SASS, and Gulp.",
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
        title: "Senior Software Engineer",
        duration: "Aug 2017 - May 2018",
        client: "Nokia",
        domain: "Networking Management",
        content: [
          {
            text: "Conducted Front-end and Back-end programming using Angular, Reactjs and Java.",
            link: "",
          },
          {
            text: "Developed high-performance React application using React Context, and Redux.",
            link: "",
          },
          {
            text: "Maximized software performance by researching and identifying emerging technologies and libraries to implement in new solutions.",
            link: "",
          },
          {
            text: "Developed large-scale complex applications.",
            link: "",
          },
          {
            text: "Customized and improved API performance.",
            link: "",
          },
          {
            text: "Plan and complete the release on time.",
            link: "",
          },
          {
            text: "Optimized SQL query to reduce the execution time of the report from one hour to some minutes and received good feedback from big customers like NASA, Goldman Sack, AT&T, and so on.",
            link: "",
          },
          {
            text: "Maximized software performance by researching and identifying emerging technologies and libraries to implement in new solutions using Java 8, Spring Framework, Angular, React, Redux.",
            link: "",
          },
          {
            text: "TMA Quarterly Star Performers - 1st Quarter 2018",
            link: "https://www.facebook.com/tmasolutions/photos/a.1788952404494896/1788953014494835/?type=3",
          },
        ],
      },
      {
        title: "Software Developer",
        duration: "Sep 2014 - Aug 2017",
        client: "GBST, Alcatel Lucent",
        domain: "Networking Management",
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