import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold
         bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark 
         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
         xs:text-dark xs:dark:text-light xs:font-bold
         "
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x, y, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-16 w-full text-center md:text-6xl md:mt-12">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight  dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg dark:lg:bg-circularDarkLg
        md:bg-circularLightMd dark:md:bg-circularDarkMd
        sm:bg-circularLightSm dark:sm:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
         bg-dark text-light p-4 shadow-dark cursor-pointer dark:bg-light 
         dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
         "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={"Angular"} x={"10vw"} y={"-6vw"} />
        <Skill name={"HTML"} x={"-16w"} y={"8vw"} />
        <Skill name={"CSS"} x={"-12vw"} y={"-3vw"} />
        <Skill name={"ReactJs"} x={"-23vw"} y={"6vw"} />
        <Skill name={"NextJs"} x={"9vw"} y={"-15vw"} />
        <Skill name={"Tailwind"} x={"23vw"} y={"6vw"} />
        <Skill name={"Javascript"} x={"-15vw"} y={"-13vw"} />
        <Skill name={"Queue"} x={"-10vw"} y={"18vw"} />
        <Skill name={"Java"} x={"30vw"} y={"-8vw"} />
        <Skill name={".Net"} x={"10vw"} y={"18vw"} />
        <Skill name={"Kafka"} x={"-30vw"} y={"-8vw"} />
        <Skill name={"C#"} x={"-3vw"} y={"-19vw"} />
      </div>
    </>
  );
};

export default Skills;
