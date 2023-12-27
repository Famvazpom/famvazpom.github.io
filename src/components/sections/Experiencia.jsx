import React from 'react';
import { work_xp } from '../../constants';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdLocationOn } from "react-icons/md";



function Experiencia() {
    return (
        <section id='work-experience' className='flex flex-col pattern'>
            <div className='mb-5'>
                <h1 className="text-center text-4xl separator-line">
                    Work Experience
                </h1>
                <h2 className='text-center text-2xl font-light'>
                    What have I done so far?
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
            <div className='border-b-2 border-white pb-2'>
                <h3 className='text-neutral text-[24px] font-bold '>{company.title}</h3>
                <p
                    className='text-filler text-[16px] font-semibold'
                    style={{ margin: (0,0,0,0) }}
                >
                    {company.company_name}
                </p>
                <span>
                    <div className='flex flex-row items-center'>
                        <MdLocationOn className='mr-2' /> {company.location}
                    </div>
                    {company.date}
                </span>
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
            
            <CompanyProject company={company} />
            
            <span className='p-2 font-bold capitalize'>
                Used techs:
            </span>
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
    if(point.url)
        return (
            <li className='text-white-100 text-[14px] text-justify pl-1 tracking-wider'>
                <strong className='capitalize'><a href={point.url} target='_blank' className='text-blue-500'>{point.title}</a></strong> {point.description}
            </li>
        )
    return (
        <li className='text-white-100 text-[14px] text-justify pl-1 tracking-wider'>
            <strong className='capitalize'>{point.title}</strong> {point.description}
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

function CompanyProject({company}){
    if(company.projects)
    {
        return (
            <div className='pb-2 border-b-2 flex flex-col p-2'>
                <span
                    className='text-filler text-[16px] font-semibold mb-2'
                >
                    Relevant Projects
                </span>
                {
                    company.projects.map((project, index) => <ProjectPoint key={`project-${index}`} project={project} id={index} />)
                }
            </div>
        )
    }
    return (<></>);
}

function ProjectPoint({project}){
    if(project.url)
        return (
            <li className='text-white-100 text-[14px] text-justify pl-1 mb-2 tracking-wider'>
                <a className='text-bold text-blue-500' target='_blank' href={project.url}> {project.title}</a> {project.description}
            </li>
        );
    return (
        <li className='text-white-100 text-[14px] text-justify pl-1 mb-2 tracking-wider'>
            <strong className='capitalize'>{project.title}</strong> {project.description}
        </li>
    );
}

export { CompanyTech };
export default Experiencia