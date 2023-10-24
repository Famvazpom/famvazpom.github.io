import React from 'react';
import { work_xp } from '../../constants';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';



function Experiencia() {
    return (
        <section id='work-experience' className='flex flex-col pattern'>
            <div className='mb-5'>
                <h1 className="text-center text-4xl separator-line">
                    Experiencia Laboral
                </h1>
                <h2 className='text-center text-2xl font-light'>
                    Aqui encontraras información acerca de mi experiencia laboral.
                </h2>
            </div>

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
        </section>
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
                <div className='flex justify-center items-center w-full h-full rounded-full bg-white'>
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
                         <CompanyPoint
                         key={`point-${index}-company-${company.company_name}`}
                         point={point}
                     />
                    ))}
                </ul>
            </div>
            <div>
                Tecnologias usadas:
            </div>
            <div className='flex flex-wrap'>
                {
                    company.tech.map((tech, index) => (
                        <CompanyTech
                            key={`tech-${index}-company-${company.company_name}`}
                            tech={tech}
                        />
                    ))
                }
            </div>
        </VerticalTimelineElement>
    );

}

function CompanyPoint({ point }) {
    if(Array.isArray(point))
    {
        return (
            <ul className='text-white-100 text-[14px] pl-1 tracking-wider'>
                {point.map((subpoint, index) => (
                    <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                        {subpoint}
                    </li>
                ))}
            </ul>
        );   
    }
    return (
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
        </li>
    );
}

function CompanyTech({ tech }) {
    return (
        <div
            className={`flex flex-row ${tech.bgcolor} rounded-lg m-2 p-2 items-center hover:shadow-xl cursor-pointer`}
        >
            {<tech.icon className='mr-1' />}
            {tech.name}
        </div>
    );
}

export { CompanyTech };
export default Experiencia