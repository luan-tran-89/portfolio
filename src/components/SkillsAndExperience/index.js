import React from "react";
import { experiences, skills } from "../../common/constants";
import { layout } from "../style";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col skill-group">
      <span className="text-[30px] skill-icon">
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-dimblack text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 border-l line mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {props.items.map((item, index) => (
          <SkillIcon key={index} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <div key={text}>
      <p className="font-poppins font-normal text-[14px] text-dimblack mt-2">
        - {text}{" "}
        {link ? (
          <a href={link} target="_blank">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      key={props.index}
    >
      <div className="flex flex-row items-center mb-6">
        <a href={props.link} target="_blank">
          <img
            src={props.logo}
            alt={props.organisation}
            className="w-[52px] h-[52px] rounded-full z-[2]"
          />
        </a>
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l line ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.duration}
            </time>
            <br/>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Business domain: {position.domain}
            </time>
            {position.content.map((info, index) => (
              <Content key={index} index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12">
      <div className="container">
        <div className="box-shadow-full">
          <div className="title-box-2">
            <h5 className="title title-left">Skills & Experience</h5>
          </div>
          {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-black ss:leading-[80px] leading-[80px]">
            Skills & Experience
          </h1> */}
          <div
            className={layout.section}
            // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            // transition={{ duration: 0.5 }}
          >
            {/* Skills */}
            <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
              {skills.map((skill, index) => (
                <SkillCard key={index} index={index} {...skill} />
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div className="flex flex-1 items-center justify-start flex-col">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} index={index} {...exp} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
