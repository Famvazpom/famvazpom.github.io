import {
    BiLogoPython, 
    BiLogoDjango, 
    BiLogoHtml5, 
    BiLogoBootstrap, 
    BiLogoJavascript, 
    BiLogoCss3, 
    BiLogoJquery,
    BiLogoLinkedinSquare,
    BiLogoDiscord,
    BiLogoGithub,
    BiLogoTailwindCss,
    BiLogoReact,
    BiLogoUnity


} from 'react-icons/bi'

import {
    MdOutlineWebAsset
} from 'react-icons/md'

const work_xp = [
    {
        title: "Asistente de Ingenieria",
        company_name: "AV ELECTRONIC SERVICES",
        image: 'assets/images/avservices.png',
        date: "Enero 2020 - Actualidad",
        tech: [
            {
                name: "Python",
                icon: BiLogoPython,
                bgcolor: "bg-green-500",
            },
            {
                name: "Django",
                icon: BiLogoDjango,
                bgcolor: "bg-green-700",
            },
            {
                name: "HTML",
                icon: BiLogoHtml5,
                bgcolor: "bg-orange-700",
            },
            {
                name: "CSS",
                icon: BiLogoCss3,
                bgcolor: "bg-blue-700",
            },
            {
                name: "Bootstrap",
                icon: BiLogoBootstrap,
                bgcolor: "bg-purple-800",
            },
            {
                name: "Javascript",
                icon: BiLogoJavascript,
                bgcolor: "bg-yellow-600",
            },
            {
                name: "Jquery",
                icon: BiLogoJquery,
                bgcolor: "bg-blue-500",
            },
        ],
        points: [
            "Desarrollo de sistema para control de gimnasios.",
            "Mantenimiento de sistema.",
            "Montaje de instancias.",
            "Desarrollo de aplicaciones de Punto de Venta.",
            "Soporte Técnico en:",
            "Equipo de Computo",
            "Equipo de Gimnasio",
            "Reparación y Mantenimiento de equipo electrónico."
        ],
    },
    {
        title: "Lider de Proyecto",
        company_name: "Riviera Movil",
        image: 'assets/images/rivieramovil.jpeg',
        date: "Mayo 2022 - Enero 2023",
        tech: [
            {
                name: "Python",
                icon: BiLogoPython,
                bgcolor: "bg-green-500",
            },
            {
                name: "Django",
                icon: BiLogoDjango,
                bgcolor: "bg-green-700",
            },
            {
                name: "HTML",
                icon: BiLogoHtml5,
                bgcolor: "bg-orange-700",
            },
            {
                name: "CSS",
                icon: BiLogoCss3,
                bgcolor: "bg-blue-700",
            },
            {
                name: "Bootstrap",
                icon: BiLogoBootstrap,
                bgcolor: "bg-purple-800",
            },
            {
                name: "Javascript",
                icon: BiLogoJavascript,
                bgcolor: "bg-yellow-600",
            },
            {
                name: "Jquery",
                icon: BiLogoJquery,
                bgcolor: "bg-blue-500",
            },
        ],
        points: [
            "Desarrollo de sistema para control de reparaciones.",
            "Gestión de licencias.",
            "Gestión de servidores.",
            "Montaje de instancias.",
            "Capacitación en uso de sistema.",
        ],
    },
    {
        title: "Lider de Proyecto",
        company_name: "Playacel",
        image: 'assets/images/playacel.jpg',
        date: "Enero 2021 - Junio 2022",
        tech: [
            {
                name: "Python",
                icon: BiLogoPython,
                bgcolor: "bg-green-500",
            },
            {
                name: "Django",
                icon: BiLogoDjango,
                bgcolor: "bg-green-700",
            },
            {
                name: "HTML",
                icon: BiLogoHtml5,
                bgcolor: "bg-orange-700",
            },
            {
                name: "CSS",
                icon: BiLogoCss3,
                bgcolor: "bg-blue-700",
            },
            {
                name: "Bootstrap",
                icon: BiLogoBootstrap,
                bgcolor: "bg-purple-800",
            },
            {
                name: "Javascript",
                icon: BiLogoJavascript,
                bgcolor: "bg-yellow-600",
            },
            {
                name: "Jquery",
                icon: BiLogoJquery,
                bgcolor: "bg-blue-500",
            },
        ],
        points: [
            "Diseño y desarrollo de sistema para control de tiendas de reparación de telefonía.",
            "Capacitacion de sistema.",
            "Soporte técnico.",
            "Mantenimiento de equipo de computo:",
            "Creación de imagenes de S.O.",
            "Mantenimiento y restauración de Equipos."
        ],
    },

];

const socials = [
    {
        icon: BiLogoLinkedinSquare,
        url: "https://www.linkedin.com/in/famvazpom",
        text: "LinkedIn",
    },
    {
        icon: BiLogoGithub,
        url: "https://github.com/Famvazpom",
        text: "Github",
    },
    {
        icon: BiLogoDiscord,
        url: "https://discordapp.com/users/322555089996742658",
        text: "Discord",
    },

];

const techs = [
    {
        name: "Python",
        icon: BiLogoPython,
        bgcolor: "bg-green-500",
    },
    {
        name: "Django",
        icon: BiLogoDjango,
        bgcolor: "bg-green-700",
    },
    {
        name: "HTML",
        icon: BiLogoHtml5,
        bgcolor: "bg-orange-700",
    },
    {
        name: "CSS",
        icon: BiLogoCss3,
        bgcolor: "bg-blue-700",
    },
    {
        name: "Tailwind CSS",
        icon: BiLogoTailwindCss,
        bgcolor: "bg-blue-700",
    },
    {
        name: "Bootstrap",
        icon: BiLogoBootstrap,
        bgcolor: "bg-purple-800",
    },
    {
        name: "Javascript",
        icon: BiLogoJavascript,
        bgcolor: "bg-yellow-600",
    },
    {
        name: "React",
        icon: BiLogoReact,
        bgcolor: "bg-blue-400",
    },
    {
        name: "Jquery",
        icon: BiLogoJquery,
        bgcolor: "bg-blue-500",
    },
    {
        name: "Unity",
        icon: BiLogoUnity,
        bgcolor: "bg-gray-600",
    },
]

const certifications = [

    {
        name: 'Azure Fundamentals',
        code: 'AZ-900',
        url: 'https://www.credly.com/badges/67f11b22-8743-401e-9abb-c8cdf4f2470a',
        image: 'assets/images/az-900.png'
    },
]

const projects = [
    {
        name: 'Riviera Soft',
        descripcion: 'Sistema para el control de taller de reparaciones, desarrollado con Django y DRF.',
        rol: 'Creador del sistema',
        image: 'assets/images/rivierasoft.png',
        techs: [
            {
                name: "Python",
                icon: BiLogoPython,
                bgcolor: "bg-green-500",
            },
            {
                name: "Django",
                icon: BiLogoDjango,
                bgcolor: "bg-green-700",
            },
            {
                name: "HTML",
                icon: BiLogoHtml5,
                bgcolor: "bg-orange-700",
            },
            {
                name: "CSS",
                icon: BiLogoCss3,
                bgcolor: "bg-blue-700",
            },
            {
                name: "Tailwind CSS",
                icon: BiLogoTailwindCss,
                bgcolor: "bg-blue-700",
            },
            {
                name: "Bootstrap",
                icon: BiLogoBootstrap,
                bgcolor: "bg-purple-800",
            },
            {
                name: "Javascript",
                icon: BiLogoJavascript,
                bgcolor: "bg-yellow-600",
            },
            {
                name: "React",
                icon: BiLogoReact,
                bgcolor: "bg-blue-400",
            },
            {
                name: "Jquery",
                icon: BiLogoJquery,
                bgcolor: "bg-blue-500",
            },
        ],
        links: [
            {
                icon: MdOutlineWebAsset,
                link: 'https://famvazpom.github.io/rivierasoft-page',
                name: 'Página Web'
            },
        ]
    },
    {
        name: 'MATH-IAS - El tutor virtual para los estudiantes de la Universidad del Caribe',
        descripcion: 'Tutor Virtual para matemáticas implementando la técnica BKT ( Bayessian Knowledge Tracing ) para el seguimiento del aprendizaje de los alumnos.',
        rol: 'Desarrollador Backend',
        image: 'assets/images/mathias.png',
        techs: [
            {
                name: "Python",
                icon: BiLogoPython,
                bgcolor: "bg-green-500",
            },
            {
                name: "Django",
                icon: BiLogoDjango,
                bgcolor: "bg-green-700",
            },
            {
                name: "React",
                icon: BiLogoReact,
                bgcolor: "bg-blue-400",
            },
            {
                name: "Tailwind CSS",
                icon: BiLogoTailwindCss,
                bgcolor: "bg-blue-500",
            },
        ],
        links: [
            {
                icon: BiLogoGithub,
                link: 'https://github.com/famvazpom/tutor',
                name: 'Github',
            },
            {
                icon: MdOutlineWebAsset,
                link: 'https://mathias-tutor-virtual.vercel.app',
                name: 'Página Web',
            },
        ]
    },
    {
        name: 'TUUM',
        descripcion: 'Desarrollo de test vocacional interactivo en Unity.',
        rol: 'Desarrollador Principal',
        image: 'assets/images/tuum.png',
        techs: [
            {
                name: "Unity",
                icon: BiLogoUnity,
                bgcolor: "bg-gray-600",
            },
        ],
        links: [
            {
                icon: BiLogoGithub,
                link: 'https://github.com/chilacoders/TUUM',
                name: 'Github',
            },
            {
                icon: MdOutlineWebAsset,
                link: 'https://chilacoders.github.io/Tuum/',
                name: 'Página Web',
            },
        ]
    },
]

export { work_xp, socials,techs,certifications,projects };