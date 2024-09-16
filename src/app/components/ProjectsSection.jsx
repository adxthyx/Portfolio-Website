"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "Developed a NextJS portfolio website and deployed it using Vercel ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adxthyx/Portfolio-Website/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Multicity Vehicle Routing",
    description: "Implemented and optimized multicity vehicle routing solution resulting in  reduction in overall travel costs and carbon footprint.Utilized advanced data structures and algorithms resulting in  decrease in travel time across multiple cities.Integrated real-time traffic analysis data leading to improvement in route accuracy and time saving",
    image: "/images/projects/2.png",
    tag: ["All", "Algorithms"],
    gitUrl: "https://github.com/gowdavidwan2003/Efficient-Vehicle-Routing",
    previewUrl: "https://smart-route.streamlit.app/",
  },
  {
    id: 3,
    title: "PaaS Product for NGO",
    description: "Built a full-stack Next.js PaaS for NGOs to find investors using semantic search.Integrated a SaaS tool with OpenAI and Python-PPTX to create dynamic pitch presentations.Added a dashboard to track activities and connect NGOs with investors.",
    image: "/images/projects/3.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Parth-G27/Tortoise",
    previewUrl: "https://drive.google.com/file/d/1Bgy8FTlgvbzOXpSJBbGGJ7JNdJG8s_Hj/view?usp=sharing",
  },
  {
    id: 4,
    title: "Assistive Device for Blind using VLM",
    description: "Finetuned a VLM model named MoonDream and BLIP and utilized this model to a mobile architecture incluing webam,earphone to assist blind in realtime ",
    image: "/images/projects/4.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/gowdavidwan2003/Blind-Assist-AI-Mayhem",
    previewUrl: "https://drive.google.com/file/d/1aiipy1nlBRCUTv2ltG9uRYtgdqylTlJU/view",
  },
  {
    id: 5,
    title: "Regional Language Character Recognition",
    description: "Coordinated with my classmates to build a model to recognize handwritten kannada languauge character and developed a interactive website for children to learn the languauge with gamified experience",
    image: "/images/projects/5.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/adxthyx/Frontend",
    previewUrl: ["/images/projects/extra5_1.png","/images/projects/extra5_2.png","/images/projects/extra5_3.png"],
  },
  {
    id: 6,
    title: "Attendance Tracker/Face Recognition",
    description: "Built a face recognition ML model using VGGFace and utilized HaarCascade to recognize every single person in the image and keep track of attendance of the class dynamically",
    image: "/images/projects/6.png",
    tag: ["All", "Web","ML"],
    gitUrl: "https://github.com/adxthyx/Attendance--Face_Recognition",
    previewUrl: ["/images/projects/6.png"],
  },
  {
    id: 7,
    title: "Minimalistic Protal for RIT student with integrated Chatbot",
    description: "Developed a Minimalist student portal for RIT students with integrated Chatbot.The portal utilizes data extraction using BeautifulSoup and auto logins using Selenium.The chatbot is connected to Database and can be used to get relevant information about grades,attendance,events and timetables.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adxthyx/CHAT_MSRIT",
    previewUrl: ["/images/projects/7.png"],
  },
  
  {
    id: 8,
    title: "PPT Generator",
    description: "Created a project of automatic PPT generation which takes user input like Topic,No of slides and additional content and generate a PPT using Python-PPTX and Open AI API",
    image: "/images/projects/8.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/adxthyx/PPT_Generator",
    previewUrl: ["/images/projects/extra8.png","/images/projects/extra8_1.png","/images/projects/extra8_2.png","/images/projects/extra8_3.png"],
  },
  
  {
    id: 9,
    title: "Emergency Fire Protocol",
    description: "Created a webapp for systamatic protocol to follow in fire hazard situation in urban areas,Used YOLO v5 and MoonDream 2.0 to accurately recognize fire and then used",
    image: "/images/projects/9.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/adxthyx/Emergency_Fire_Protocol",
    previewUrl: ["/images/projects/9.png","/images/projects/extra9_1.png","/images/projects/extra9_2.png"],
  },
  
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
