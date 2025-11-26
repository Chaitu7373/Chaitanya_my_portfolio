export const profile = {
  name: "Chaitanya Boddu",
  title: "Full Stack Java Developer",
  location: "Chicago, IL",
  phone: "+1(309)-314-0267",
  email: "bodduchaitanya261@gmail.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
};

export const summary = `Full Stack Java Developer with 5+ years of experience delivering enterprise-scale applications across banking, retail, and e-commerce domains. Expertise in Java (8–17), Spring Boot, Spring Cloud, Microservices, and secure API development (OAuth2, JWT, Keycloak). Skilled in system design and architecture, developing REST/GraphQL services, and building event-driven systems with Apache Kafka and RabbitMQ. Proficient in SQL/NoSQL databases (PostgreSQL, MongoDB, Cassandra, Snowflake) and cloud-native deployments on AWS, Azure, and GCP. Strong background in CI/CD automation (Jenkins, GitHub Actions, Terraform), test-driven development (JUnit, Selenium, Cypress), and Agile delivery, with proven success in reducing latency, improving reliability, and driving measurable business outcomes.`;

export const skills = {
  languages: ["Java (8/11/17)", "C#", "SQL", "JavaScript", "TypeScript", "Python"],
  backend: ["Spring Boot", "Spring Cloud", "Spring Security", "Hibernate", "REST", "GraphQL", "gRPC", "Microservices"],
  frontend: ["React", "Angular", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  cloud: ["AWS (EC2, S3, Lambda, RDS, EKS)", "Azure (Functions, Cosmos DB)", "GCP (BigQuery, Pub/Sub)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Maven", "Gradle"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis", "Snowflake"],
  messaging: ["Apache Kafka", "RabbitMQ"],
  testing: ["JUnit", "Mockito", "REST Assured", "Selenium", "Cypress", "SonarQube", "TDD", "BDD"],
  monitoring: ["Prometheus", "Grafana", "ELK", "Splunk"],
  other: ["Agile/Scrum", "API Design", "CI/CD Pipelines", "System Architecture"]
};

export const experience = [
  {
    company: "Citi Bank",
    location: "Tampa, FL",
    position: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    achievements: [
      "Architected and deployed Spring Boot 3.x microservices using Java 17, Apache Kafka, and Spring Cloud to process over 2 million SFTR trade records weekly, achieving 35% reduced latency.",
      "Designed and implemented secure REST and GraphQL APIs with OAuth2, JWT, and Keycloak, integrated with AWS API Gateway, improving compliance data access by 25%.",
      "Tuned MongoDB performance using compound indexes and optimized query design, reducing audit data retrieval time by 40%; visualized operational metrics via Angular and Webpack dashboards.",
      "Built event-driven workflows using AWS Lambda, S3, CloudWatch, and Azure Functions, streamlining hybrid cloud audit reporting and reducing processing delays by 20%.",
      "Managed CI/CD automation with Jenkins, GitHub Actions, and Terraform, maintaining 90%+ code coverage with SonarQube and TestNG, while minimizing deployment defects.",
      "Applied microservices orchestration patterns to modularize services, improving maintainability and reducing technical debt by 10%.",
      "Set up real-time monitoring with Prometheus and Grafana, reducing downtime by 15% through proactive issue detection.",
      "Optimized Cassandra database sharding and replication strategies, enhancing data availability and improving query performance by 30%.",
      "Developed Angular UI modules, enhancing user experience and reducing front-end build time by 20%.",
      "Automated infrastructure provisioning using AWS CloudFormation, reducing environment setup time by 25%."
    ]
  },
  {
    company: "Chase",
    location: "Charlotte, NC",
    position: "Java Developer",
    period: "Jan 2024 – Sep 2024",
    achievements: [
      "Developed REST and gRPC APIs using Spring Boot and Java 11, integrated with React, WebSockets, and Redis, reducing client response times by 25%.",
      "Modeled relational and NoSQL data structures with PostgreSQL, DynamoDB, and Spring Data JPA to support high-volume transactions with 30% faster query execution.",
      "Created automated testing pipelines using JUnit, REST Assured, and Postman, achieving 95% test coverage across services in an Agile sprint cadence.",
      "Configured CI/CD pipelines using Azure DevOps and Jenkins; deployed Docker containers on Kubernetes using Helm, reducing release cycle times by 20%.",
      "Built responsive React + Tailwind UI components with real-time updates, leading to a 15% increase in user engagement.",
      "Conducted performance tuning of APIs and SQL queries while mentoring junior developers, resulting in a 10% improvement in team efficiency.",
      "Integrated Snowflake for analytics, enabling real-time reporting and boosting reporting efficiency by 20%.",
      "Designed event-driven architecture using Apache Kafka, streamlining data processing pipelines and reducing latency by 15%.",
      "Secured authentication flows using Okta and Spring Security, reducing system vulnerabilities by 10%.",
      "Automated infrastructure monitoring with CloudWatch and Splunk, improving incident response time by 25%."
    ]
  },
  {
    company: "Papa John's",
    location: "Chicago, Illinois",
    position: "Software Engineer",
    period: "Jan 2021 – Jul 2022",
    achievements: [
      "Built responsive Vue.js and Bootstrap UI components integrated with Spring Boot REST APIs using Java 11, streamlining pricing and logistics workflows and enhancing vendor coordination by 20%.",
      "Designed fault-tolerant PostgreSQL and Redis architectures for order processing, enabling real-time ETA predictions and availability checks, which boosted fulfillment efficiency by 15%.",
      "Conducted front-end testing using Cypress and Jest, achieving over 90% test coverage for critical UI components and improving application reliability.",
      "Deployed applications on AWS ECS and Lambda, optimizing logistics pipelines using Apache Kafka and CloudWatch, resulting in a 10% reduction in operational costs.",
      "Secured RESTful APIs with Spring Security and Okta, enhancing user authentication and streamlining customer order placement processes by 20%.",
      "Mentored junior developers in Agile workflows and secure coding practices, leading to a 10% improvement in overall team productivity."
    ]
  },
  {
    company: "eBay",
    location: "San Jose, CA",
    position: "Junior Software Engineer",
    period: "May 2019 – Dec 2020",
    achievements: [
      "Developed and maintained Angular 7 and Bootstrap components for seller dashboards and product listing pages, ensuring responsive UI across devices.",
      "Implemented interactive features with JavaScript and HTML5/CSS3, improving page load performance and user engagement.",
      "Assisted in optimizing front-end workflows using webpack and code-splitting techniques, reducing bundle sizes by 15%.",
      "Integrated front-end modules with backend APIs, handling data retrieval and display using RESTful calls.",
      "Supported backend service development in Java 8 and Spring Boot 2.x for product catalog and cart management features.",
      "Collaborated with senior developers in Agile sprints, performing bug fixes, writing JUnit tests, and contributing to deployment on internal AWS EC2 servers."
    ]
  }
];

export const projects = [
  {
    title: "Intelligent Course Advisor Using LLMs",
    description: "AI-powered chatbot using Hugging Face Transformers and LangChain to recommend university courses, with MongoDB for context retrieval and Streamlit for deployment. Implemented semantic search with T5/Flan-T5 LLM to rank course matches and log interactions, enhancing recommendation accuracy.",
    tech: ["Hugging Face", "LangChain", "MongoDB", "Streamlit", "T5/Flan-T5", "LLM"],
    type: "Major Project - Master's"
  },
  {
    title: "Smart Waste Management System with Barcode Classification",
    description: "Full-stack application with Spring Boot, React, and MongoDB, using OpenCV for barcode/image classification and real-time recycling suggestions. Designed a React frontend for image uploads, integrated with MongoDB to display location-based recycling guidelines on a dashboard.",
    tech: ["Spring Boot", "React", "MongoDB", "OpenCV", "Barcode Classification"],
    type: "Major Project - Bachelor's"
  }
];

export const certifications = [
  {
    name: "Oracle Certified Professional – Java SE 11 Developer",
    date: "Sep 2024"
  },
  {
    name: "Generative AI with Google Cloud",
    date: "Jan 2025"
  },
  {
    name: "Apache Kafka for Java Developers",
    date: "Nov 2024"
  },
  {
    name: "AWS Certified Developer – Associate",
    date: "In Progress"
  }
];

export const education = [
  {
    institution: "Western Illinois University",
    location: "Macomb, IL",
    degree: "Master's in Computer Science",
    period: "Aug 2022 – May 2024",
    project: "Intelligent Course Advisor Using LLMs"
  },
  {
    institution: "Vignan University",
    location: "Andhra Pradesh, India",
    degree: "Bachelor's in Electronics and Computer Engineering",
    period: "Aug 2015 – May 2019",
    project: "Smart Waste Management System with Barcode Classification"
  }
];
