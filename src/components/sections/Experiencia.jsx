import React, { useContext } from 'react';
import { work_xp } from '../../constants';
import { LanguageContext } from '../../context/LanguageContext';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdLocationOn } from "react-icons/md";



function Experiencia() {
    const { t } = useContext(LanguageContext);
    return (
        <section id='work-experience' className='section-shell flex flex-col pattern'>
            <div className='mb-5'>
                <p className='section-kicker'>{t('experience.kicker')}</p>
                <h1 className="section-title">
                    {t('experience.title')}
                </h1>
                <h2 className='text-center text-xl font-light text-muted'>
                    {t('experience.subtitle')}
                </h2>
            </div>

            <div className='mt-14 flex flex-col'>
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
    const { t } = useContext(LanguageContext);
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgba(16, 19, 33, 0.88)",
                color: "#fff",
                border: "1px solid rgba(20, 241, 255, 0.22)",
                borderRadius: "24px",
                boxShadow: "0 0 36px rgba(20, 241, 255, 0.12)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(20, 241, 255, 0.35)" }}
            date={company.date}
            iconStyle={{ background: company.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full rounded-full bg-white'>
                    <img
                        src={company.image}
                        alt={company.company_name}
                        className='rounded-full object-contain'
                    />
                </div>
            }
        >
            <div className='border-b border-white/10 pb-4'>
                <h3 className='text-neutral text-[24px] font-bold '>{company.title}</h3>
                <p
                    className='text-cyber text-[16px] font-semibold'
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
            <div className='pb-4 border-b border-white/10'>
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

            <span className='p-2 font-bold capitalize text-cyber'>
                {t('experience.usedTechs')}
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
            <li className='text-muted text-[14px] text-justify pl-1 tracking-wider'>
                <strong className='capitalize'><a href={point.url} target='_blank' rel='noreferrer' className='text-cyber hover:text-neutral'>{point.title}</a></strong> {point.description}
            </li>
        )
    return (
        <li className='text-muted text-[14px] text-justify pl-1 tracking-wider'>
            <strong className='capitalize'>{point.title}</strong> {point.description}
        </li>
    );
}

function CompanyTech({ tech }) {
    return (
        <div
            className={`tech-pill ${tech.bgcolor} m-1`}
        >
            {<tech.icon className='mr-1' />}
            {tech.name}
        </div>
    );
}

function CompanyProject({company}){
    const { t } = useContext(LanguageContext);
    if(company.projects)
    {
        return (
            <div className='pb-4 border-b border-white/10 flex flex-col p-2'>
                <span
                    className='text-cyber text-[16px] font-semibold mb-2'
                >
                    {t('experience.relevantProjects')}
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
            <li className='text-muted text-[14px] text-justify pl-1 mb-2 tracking-wider'>
                <a className='font-bold text-cyber hover:text-neutral' target='_blank' rel='noreferrer' href={project.url}> {project.title}</a> {project.description}
            </li>
        );
    return (
        <li className='text-muted text-[14px] text-justify pl-1 mb-2 tracking-wider'>
            <strong className='capitalize'>{project.title}</strong> {project.description}
        </li>
    );
}

export { CompanyTech };
export default Experiencia
