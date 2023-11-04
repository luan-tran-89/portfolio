import {
  tdt, maharishi 
} from "./assets";

const StaticData = {
  getExperience: function () {
    return [
      {
        "title": "Senior Software Engineer",
        "contain": "Code88 Limited Company",
        "years": "May 2018 - July 2022",
        "type": "work",
        "mainBadges": [
          "Java - Reactjs - MySQL"
        ],
        "badges": [
          "REST API",
          "Java",
          "Microservices",
          "Redis",
          "CDN",
          "Elastic Search",
          "JavaScript",
          "Bootstrap",
          "Reactjs",
          "MySQL"
        ]
      },
      {
        "title": "Software Engineer",
        "contain": "TMA Solutions Company",
        "years": "Sep 2014 - May 2018",
        "type": "work",
        "mainBadges": [
          "Java - Reactjs - Sysbase/Oracle/PostgreSQL"
        ],
        "badges": [
          "REST API",
          "Java",
          "Microservices",
          "JavaScript",
          "Bootstrap",
          "Reactjs",
          "Oracle",
          "Sysbase",
          "PostgreSQL"
        ]
      }
    ];
  },

  getEducation: function () {
    return [
      {
        "title": "Maharish International University",
        "contain": "1000 N 4th St, Fairfield, IA 52557",
        "years": "Aug 2022 - present",
        "logo": maharishi,
        "link": "https://www.miu.edu/",
        "mainBadges": ["Master's in Computer Science"],
        "badges": [
          "Modern Programming Practices", "Web Programming", 
          "Big Data Technology", "Enterprise Architecture",
          "Cloud Computing", "Big Data Analytics",
          "Algorithms", "Project Management"
        ]
      },
      {
        "title": "Ton Duc Thang University",
        "contain": "Ho Chi Minh City",
        "years": "2009 - 2014",
        "logo": tdt,
        "link": "https://www.tdtu.edu.vn/en",
        "mainBadges": ["Bachelor's in Computer Science"],
        "badges": []
      }
    ]
  },

  getSkills: function () {
    return [
      { id: "JAVA_skill", content: "JAVA", porcentage: "90%", value: "90" },
      { id: "AWS_skill", content: "AWS", porcentage: "80%", value: "80" },
      { id: "HTML5_skill", content: "HTML5/CSS/SCSS/BootStrap", porcentage: "90%", value: "90" },
      { id: "FrontEnd_skill", content: "JavaScript/jQuery/ReactJS", porcentage: "90%", value: "90"},
      { id: "ReactJS_skill", content: "Redis/Kafka/RabbitMQ/Nginx", porcentage: "80%", value: "80"},
      { id: "DB_skill", content: "MySQL/PostgreSQL", porcentage: "80%", value: "80"}
    ]
  },

  getSkills1: function () {
    return [
      { id: "Microservices_skill", content: "Microservices", porcentage: "80%", value: "80" },
      { id: "HTML5_skill", content: "Docker/Kubernates", porcentage: "70%", value: "70" },
      { id: "DP_skill", content: "Design Patterns: MVC/Singleton/Factory..", porcentage: "80%", value: "80" },
      { id: "SDLC_skill", content: "Agile / Scrum, Waterfall", porcentage: "80%", value: "80"},
      { id: "BD_skill", content: "Spark, Hive, HBase", porcentage: "80%", value: "80"},
      { id: "Platforms_skill", content: "Windows/MacOS", porcentage: "90%", value: "90"}
    ]
  },

  getAboutMe: function () {
    return [
      {
        id: "first-p-about",
        content: "Knowledgeable Senior Software developer with 8 years of extensive experience developing enterprise applications in professional, international environments using Java 11, Spring MVC, Spring Boot, Spring Cloud, Microservices, JUnit, Mockito, AWS, React, Redux, JavaScript and MySQL/PostgreSQL in high-performance, secure environments."
      },
      {
        id: "second-p-about",
        content: "Advanced expertise spanning Object-Oriented Programming, dependency injection, database development, and design patterns."
      },
      {
        id: "third-p-about",
        content: "Technically adept team member with history of success researching and applying emerging technologies to improve software performance."
          
      },
      {
        id: "four-p-about",
        content: "Deployed several applications through complete Software Development Life Cycle (SDLC) using Web services, Design patterns, and advanced frameworks for Front End and Back End modules."
          
      }
    ]
  }
}

export default StaticData;