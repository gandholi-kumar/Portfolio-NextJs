import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl">
            {position} &nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize "
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {address}{" "}
          </span>
          <p className="font-medium w-full">{work}</p>
        </motion.div>
      </li>
    </>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16">
      <h2 className="font-bold text-8xl mb-16 text-center"> Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Technologist 2"}
            company={"Philips"}
            companyLink={"philips.com"}
            time={"2019-Present"}
            address={"Bangalore - India"}
            work={
              "Worked on patient dashboard system in providing a web based patient detail reports and demographic details with intuitive workflow for clinicians to take decisions."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Infosys Ltd"}
            companyLink={"infosys.com"}
            time={"2016-2019"}
            address={"Bangalore - India"}
            work={
              "Worked with different domain such as Banking, Logistics and Ecommerce in building a web based scalable application"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
