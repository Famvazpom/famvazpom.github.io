import React from 'react';
import { work_xp } from '../../constants';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";



function Experiencia() {
    return (
        <div className='flex flex-col'>
            <motion.div >
                <p className={` text-center`}>
                    En que he trabajado?
                </p>
                <h2 className={` text-center`}>
                    Experiencia Laboral.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {
                        work_xp.map(
                            (experience, index) =>
                                <TimeLineObject key={`experience-${index}`}
                                    company={experience} />
                        )

                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}


function TimeLineObject({ company }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#3626a7",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={company.date}
            iconStyle={{ background: company.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={company.image}
                        alt={company.company_name}
                        className='object-contain'
                    />
                </div>
            }
        >
            <div className='border-b-2 border-white'>
                <h3 className='text-neutral text-[24px] font-bold '>{company.title}</h3>
                <p
                    className='text-filler text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {company.company_name}
                </p>
                <p>
                    {company.date}
                </p>
            </div>
            <div className='pb-2 border-b-2'>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {company.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                Tecnologias usadas:
            </div>
            <div className='flex flex-wrap'>
                {
                    company.tech.map((tech, index) => (
                        <div
                            key={`tech-${index}-company-${company.company_name}`}
                            className={`flex flex-row ${tech.bgcolor} rounded-lg m-2 p-2 items-center hover:shadow-xl cursor-pointer`}
                        >
                            {<tech.icon className='mr-1' />}
                            {tech.name}
                        </div>
                    ))
                }
            </div>
        </VerticalTimelineElement>
    );

}

export default Experiencia