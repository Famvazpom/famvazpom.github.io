import React, { useContext } from 'react'
import { techs } from '../../constants'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../context/LanguageContext';

const techCategoryOrder = [
  'programmingLanguages',
  'backendFrameworks',
  'frontend',
  'aiData',
  'cloud',
  'devops',
  'databases',
  'architecture',
  'gameDevelopment',
];



function Descripcion() {
  const { t } = useContext(LanguageContext);
  const groupedTechs = techCategoryOrder
    .map((category) => ({
      category,
      techs: techs.filter((tech) => tech.category === category),
    }))
    .filter((group) => group.techs.length > 0);

  return (
    <section id='about-me' className='section-shell bg-primary'>
      <div className='mb-12'>
        <p className='section-kicker'>{t('about.kicker')}</p>
        <h1 className="section-title">
          {t('about.title')}
        </h1>
      </div>
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='glass-card p-6 leading-loose text-muted sm:p-8'>
          {t('about.paragraphs').map((paragraph, index) => (
            <p key={`about-paragraph-${index}`} className={index === 0 ? 'mb-5 text-lg text-neutral' : 'mb-5'}>
              {paragraph}
            </p>
          ))}
          <p>
            {t('about.offer')} <span className='font-bold'>
              <HashLink smooth to="#contact" className='text-cyber hover:text-neutral' >
                {t('about.getInTouch')}
              </HashLink>
            </span>
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <div>
              <HashLink smooth to="#contact" className='danger-button' >
                {t('about.contact')}
              </HashLink>
            </div>
            <div>
              <Link to="https://drive.google.com/file/d/1D0GfzlTJxpNX0ksoFJZwpYyRptDBQkbz/view?usp=sharing" target="_blank" download className='glow-button' >
                {t('about.resume')}
              </Link>
            </div>
          </div>
        </div>
        <div className='glass-card flex flex-col p-6 sm:p-8'>
          <h2 className='text-2xl font-black text-neutral' >
            {t('about.stackTitle')}
          </h2>
          <p className='mt-2 text-muted'>{t('about.stackDescription')}</p>
          <div className='mt-6 flex flex-col gap-5'>
            {groupedTechs.map((group) => (
              <div key={`tech-category-${group.category}`}>
                <h3 className='mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyber'>
                  {t(`techCategories.${group.category}`)}
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {group.techs.map((tech, index) => <TechBullet key={`tech-${group.category}-${index}`} tech={tech} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

function TechBullet({ tech }) {
  return (
    <div>
      <div
        className={`tech-pill ${tech.bgcolor}`}
      >
        {<tech.icon className='mr-1' />}
        {tech.name}
      </div>
    </div>
  )
}

export default Descripcion
