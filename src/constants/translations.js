const translations = {
    en: {
        sidebar: {
            about: 'About me',
            experience: 'Work Experience',
            certificates: 'Certifications',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            greeting: "HI, I'm",
            description: 'I build scalable cloud products, AI-powered workflows and full-stack systems with a clean architecture mindset.',
            projects: 'View Projects',
            contact: 'Contact Me',
            resume: 'Resume',
            scroll: 'Scroll to explore',
            words: ['Python Developer', 'Fullstack Developer', 'Django', 'Game Dev', 'AI'],
        },
        about: {
            kicker: 'Player profile',
            title: 'About Me',
            paragraphs: [
                'I’m a Software Engineer and Tech Lead',
                'I have solid experience in software architecture, microservices, AI/LLM integration, and full-stack development.',
                'Over the years, I’ve worked on designing and building scalable, cloud-based solutions that are reliable, maintainable, and aligned with real business needs.',
                'I enjoy working across the entire stack, from backend services and system architecture to frontend applications and integrations. I’m especially motivated by optimizing end-to-end systems, improving performance, and turning complex technical challenges into clean, well-structured solutions that teams can easily evolve over time.',
                'Beyond my professional work, I’m deeply passionate about game development and continuous learning. I’m always exploring new technologies, tools, and ideas, driven by curiosity and the desire to keep improving both my technical skills and the quality of the products I build.',
            ],
            offer: 'If you have an offer that aligns with my skills and experience, please do not hesitate to',
            getInTouch: 'Get in touch.',
            contact: 'Contact',
            resume: 'Download resume',
            stackTitle: 'Known Tech Stack',
            stackDescription: 'Tools and languages I use to ship production systems.',
        },
        techCategories: {
            programmingLanguages: 'Programming Languages',
            backendFrameworks: 'Backend Frameworks',
            frontend: 'Frontend',
            aiData: 'AI / Data',
            cloud: 'Cloud',
            devops: 'DevOps',
            databases: 'Databases',
            architecture: 'Architecture',
            gameDevelopment: 'Game Development',
        },
        experience: {
            kicker: 'Quest log',
            title: 'Work Experience',
            subtitle: 'What have I done so far?',
            usedTechs: 'Used techs:',
            relevantProjects: 'Relevant Projects',
            jobs: [{
                    title: 'Tech Lead',
                    location: 'Remote',
                    date: 'Sept 2024 - Present',
                    points: [{
                            title: 'Architecture & Technical Leadership:',
                            description: 'Led the architectural design of scalable, modular, cloud-based systems using FastAPI, Django, NestJS, React, Next.js, PostgreSQL, and Firestore. Defined technical roadmaps, estimations, sprint planning, and coordinated multidisciplinary teams.',
                        },
                        {
                            title: 'Code Quality & Engineering Standards:',
                            description: 'Conducted code reviews ensuring compliance with SOLID principles, Clean Architecture, design patterns, and coding standards.',
                        },
                        {
                            title: 'Backend & Frontend Development:',
                            description: 'Developed backend services with NestJS, TypeORM, and PostgreSQL, including authentication with JWT, OAuth2, and Azure SSO. Built frontend applications using React, Next.js, Vite, Redux, TailwindCSS, and Material-UI.',
                        },
                        {
                            title: 'Enterprise Integrations & ETL:',
                            description: 'Created ETL processes in C#/.NET for SAP integrations, three-way matching workflows, user and permission management, and notifications.',
                        },
                        {
                            title: 'DevOps & Delivery:',
                            description: 'Implemented Git Flow, CI/CD pipelines, code quality rules, and documentation standards. Standardized version control and release management, improving software stability and traceability.',
                        },
                    ],
                },
                {
                    title: 'Python AI Developer',
                    location: 'Remote',
                    date: 'Mar 2024 - Aug 2024',
                    points: [{
                            title: 'AI / LLM & RAG Systems:',
                            description: 'Developed and integrated AI/LLM solutions using Python with OpenAI, Llama, Hugging Face, and open-source models for classification, information extraction, OCR, and RAG pipelines.',
                        },
                        {
                            title: 'RAG Monitoring & Optimization:',
                            description: 'Implemented monitoring KPIs for RAG systems, including hallucination rate, response latency, and token consumption.',
                        },
                        {
                            title: 'OCR & Intelligent Data Pipelines:',
                            description: 'Built OCR + AI pipelines using Python, Azure OpenAI, and TypeScript for structured data extraction.',
                        },
                        {
                            title: 'AI Orchestration & Cost Optimization:',
                            description: 'Integrated an AI Orchestrator for dynamic model selection, intelligent routing, and fallback logic, reducing operational costs and optimizing token usage across multiple AI providers.',
                        },
                        {
                            title: 'Key Achievements:',
                            description: 'Improved ML model accuracy from 12% to 85% and detected unauthorized usage, significantly reducing recurring cloud costs.',
                        },
                    ],
                },
                {
                    title: 'Software Engineer',
                    location: 'Playa del Carmen, Mexico',
                    date: 'January 2020 - Now',
                    points: [{
                            title: 'Backend Systems Development:',
                            description: 'Designed and developed backend systems using Python, Django, and Django Rest Framework for POS applications and administrative management platforms.',
                        },
                        {
                            title: 'Cloud Deployment & Infrastructure:',
                            description: 'Deployed and managed workloads on Azure App Service, Azure Virtual Machines, and PythonAnywhere, ensuring system availability and scalability.',
                        },
                        {
                            title: 'AI & Automation Solutions:',
                            description: 'Built AI-driven solutions using NLTK, Transformers, and supervised Machine Learning models for customer support automation and inventory demand prediction.',
                        },
                        {
                            title: 'Multi-Branch Business Modules:',
                            description: 'Implemented multi-branch modules including reporting, invoicing, permissions management, auditing, and service order tracking.',
                        },
                    ],
                },
                {
                    title: 'Project Leader and Main Developer',
                    location: 'Playa del Carmen, Mexico',
                    date: 'May 2022 - Jan 2023',
                    points: [{
                            title: 'Repair Shop & Inventory System:',
                            description: 'Developed a repair shop and inventory management system using Django, Django Rest Framework, PostgreSQL, HTML, CSS, and JavaScript.',
                        },
                        {
                            title: 'Core Business Modules:',
                            description: 'Built key modules including service orders, spare parts inventory, commissions, reporting, and role-based access control (RBAC).',
                        },
                        {
                            title: 'Cloud Deployment & Databases:',
                            description: 'Deployed system instances using MySQL and cloud infrastructure on Azure and PythonAnywhere.',
                        },
                        {
                            title: 'Multi-Tenant Architecture:',
                            description: 'Implemented a multi-tenant architecture enabling licensed, isolated environments per customer.',
                        },
                    ],
                },
                {
                    title: 'Project Leader and Main Developer',
                    location: 'Playa del Carmen, Mexico',
                    date: 'Jan 2021 - June 2022',
                    points: [{
                            title: 'Repair Shop & Inventory System:',
                            description: 'Developed a repair shop and inventory control system using Django, Django Rest Framework, PostgreSQL, HTML, CSS, and JavaScript.',
                        },
                        {
                            title: 'Functional Business Modules:',
                            description: 'Implemented core modules such as service orders, spare parts inventory, commissions, reporting, and role-based access control (RBAC).',
                        },
                        {
                            title: 'Cloud Deployment & Infrastructure:',
                            description: 'Deployed system instances using MySQL and cloud services including Azure, AWS, and PythonAnywhere.',
                        },
                        {
                            title: 'System Support & Maintenance:',
                            description: 'Provided support and maintenance for the existing system architecture, ensuring stability and operational continuity.',
                        },
                    ],
                },
            ],
        },
        certifications: {
            kicker: 'Unlocked badges',
            title: 'Certifications and Completion Badges',
            subtitle: 'Certifications and Badges I have obtained so far.',
            credential: 'View credential',
        },
        projects: {
            kicker: 'Build archive',
            title: 'Projects',
            subtitle: 'Some of my projects.',
            roles: {
                'Owner and Main Developer': 'Owner and Main Developer',
                'Backend Developer': 'Backend Developer',
                'Fullstack Engineer': 'Fullstack Engineer',
                'Main Developer': 'Main Developer',
            },
            items: {
                'Riviera Soft': {
                    description: 'Administrative system with service orders management and integrated point of sale for repair workshops.',
                    specs: [
                        'Developed an administrative and POS solution for repair workshops using Python and Django.',
                        'Implemented service orders, inventory, sales, reporting, and user management modules.',
                        'Deployed a scalable multi-tenant architecture using Azure and PythonAnywhere.',
                    ],
                },
                'MATH-IAS': {
                    description: 'Adaptive virtual mathematics tutoring platform for university-level students.',
                    specs: [
                        'Developed the backend using Python and Django for an adaptive virtual tutoring platform.',
                        'Implemented Bayesian Knowledge Tracing (BKT) to model student learning progress and dynamically adjust difficulty.',
                        'Designed LaTeX-to-Speech processing to generate spoken mathematical explanations.',
                        'Deployed the platform on Azure, ensuring scalability and reliable access.',
                    ],
                },
                'A-dike': {
                    description: 'AI-powered legal assistant for multi-state legal information retrieval and analysis.',
                    specs: [
                        'Designed and maintained RAG data pipelines using Python and Neo4j for ingestion, structuring, and retrieval of multi-state legal information.',
                        'Developed a full-stack platform with Django (backend) and React (frontend), including testing, continuous integration (CI), and a modular component-based architecture.',
                        'Integrated payment processing with Stripe, user and session management with Firebase, and document storage using Cloud Storage.',
                    ],
                },
                TUUM: {
                    description: 'Interactive vocational test using Unity',
                    specs: [
                        'Project where we use the Unity game engine to create an interactive vocational test, with the goal of allowing students to take these questionnaires in a more engaging and user-friendly manner, catering to the preferences of the newer generations.',
                    ],
                },
            },
        },
        contact: {
            kicker: 'Start co-op mode',
            title: 'Lets get in touch',
            available: 'Available for',
            mission: 'Architecture, AI and full-stack missions.',
            description: 'Send me a message if you need a tech lead, a senior engineer, or someone to turn a complex idea into a maintainable product.',
            emailButton: 'Send Email',
            name: 'Name',
            namePlaceholder: 'Your name',
            mail: 'Mail',
            message: 'Message',
            messagePlaceholder: 'Something you want to tell me?',
            sending: 'Sending...',
            send: 'Send Message',
            success: 'Thank you, I will contact you as soon as possible.',
            error: 'Something went wrong... Please try again later',
        },
    },
    es: {
        sidebar: {
            about: 'Acerca de mí',
            experience: 'Experiencia Laboral',
            certificates: 'Certificaciones',
            projects: 'Proyectos',
            contact: 'Contacto',
        },
        hero: {
            greeting: 'Hola, soy',
            description: 'Construyo productos cloud escalables, flujos impulsados por IA y sistemas full-stack con una mentalidad de arquitectura limpia.',
            projects: 'Ver Proyectos',
            contact: 'Contáctame',
            resume: 'CV',
            scroll: 'Desplázate para explorar',
            words: ['Desarrollador Python', 'Desarrollador Fullstack', 'Django', 'Game Dev', 'IA'],
        },
        about: {
            kicker: 'Perfil de jugador',
            title: 'Acerca de mi',
            paragraphs: [
                'Soy Ingeniero en Software y Tech Lead.',
                'Tengo experiencia sólida en arquitectura de software, microservicios, integración de IA/LLM y desarrollo full-stack.',
                'He trabajado diseñando y construyendo soluciones cloud escalables, confiables, mantenibles y alineadas con necesidades reales de negocio.',
                'Disfruto trabajar en todo el stack, desde servicios backend y arquitectura de sistemas hasta aplicaciones frontend e integraciones. Me motiva optimizar sistemas de punta a punta, mejorar rendimiento y convertir retos técnicos complejos en soluciones limpias y bien estructuradas.',
                'Más allá de mi trabajo profesional, me apasionan el desarrollo de videojuegos y el aprendizaje continuo. Siempre estoy explorando nuevas tecnologías, herramientas e ideas para mejorar mis habilidades y la calidad de los productos que construyo.',
            ],
            offer: 'Si tienes una oferta alineada con mis habilidades y experiencia, no dudes en',
            getInTouch: 'contactarme.',
            contact: 'Contacto',
            resume: 'Descargar CV',
            stackTitle: 'Stack Tecnológico',
            stackDescription: 'Herramientas y lenguajes que uso para construir sistemas en producción.',
        },
        techCategories: {
            programmingLanguages: 'Lenguajes de Programacion',
            backendFrameworks: 'Frameworks Backend',
            frontend: 'Frontend',
            aiData: 'IA / Datos',
            cloud: 'Cloud',
            devops: 'DevOps',
            databases: 'Bases de Datos',
            architecture: 'Arquitectura',
            gameDevelopment: 'Desarrollo de Videojuegos',
        },
        experience: {
            kicker: 'Registro de misiones',
            title: 'Experiencia Laboral',
            subtitle: 'Que he hecho hasta ahora?',
            usedTechs: 'Tecnologias usadas:',
            relevantProjects: 'Proyectos Relevantes',
            jobs: [{
                    title: 'Tech Lead',
                    location: 'Remoto',
                    date: 'Sept 2024 - Presente',
                    points: [{
                            title: 'Arquitectura y Liderazgo Técnico:',
                            description: 'Lideré el diseño arquitectónico de sistemas cloud escalables, modulares y mantenibles usando FastAPI, Django, NestJS, React, Next.js, PostgreSQL y Firestore. Definí roadmaps técnicos, estimaciones, planeación de sprints y coordinación de equipos multidisciplinarios.',
                        },
                        {
                            title: 'Calidad de Código y Estándares de Ingeniería:',
                            description: 'Realicé revisiones de código para asegurar cumplimiento de principios SOLID, Clean Architecture, patrones de diseño y estándares de desarrollo.',
                        },
                        {
                            title: 'Desarrollo Backend y Frontend:',
                            description: 'Desarrollé servicios backend con NestJS, TypeORM y PostgreSQL, incluyendo autenticación con JWT, OAuth2 y Azure SSO. Construí aplicaciones frontend con React, Next.js, Vite, Redux, TailwindCSS y Material-UI.',
                        },
                        {
                            title: 'Integraciones Empresariales y ETL:',
                            description: 'Creé procesos ETL en C#/.NET para integraciones con SAP, flujos de three-way matching, gestión de usuarios y permisos, y notificaciones.',
                        },
                        {
                            title: 'DevOps y Entrega:',
                            description: 'Implementé Git Flow, pipelines CI/CD, reglas de calidad de código y estándares de documentación. Estandaricé control de versiones y gestión de releases, mejorando estabilidad y trazabilidad.',
                        },
                    ],
                },
                {
                    title: 'Desarrollador Python AI',
                    location: 'Remoto',
                    date: 'Mar 2024 - Ago 2024',
                    points: [{
                            title: 'Sistemas IA / LLM y RAG:',
                            description: 'Desarrollé e integré soluciones IA/LLM usando Python con OpenAI, Llama, Hugging Face y modelos open-source para clasificación, extracción de información, OCR y pipelines RAG.',
                        },
                        {
                            title: 'Monitoreo y Optimización RAG:',
                            description: 'Implementé KPIs de monitoreo para sistemas RAG, incluyendo tasa de alucinación, latencia de respuesta y consumo de tokens.',
                        },
                        {
                            title: 'OCR y Pipelines Inteligentes de Datos:',
                            description: 'Construí pipelines OCR + IA usando Python, Azure OpenAI y TypeScript para extracción estructurada de datos.',
                        },
                        {
                            title: 'Orquestación de IA y Optimización de Costos:',
                            description: 'Integré un orquestador de IA para selección dinámica de modelos, ruteo inteligente y lógica de fallback, reduciendo costos operativos y optimizando uso de tokens entre proveedores.',
                        },
                        {
                            title: 'Logros Clave:',
                            description: 'Mejoré la precisión de modelos ML de 12% a 85% y detecté uso no autorizado, reduciendo significativamente costos recurrentes en cloud.',
                        },
                    ],
                },
                {
                    title: 'Ingeniero de Software',
                    location: 'Playa del Carmen, México',
                    date: 'Enero 2020 - Actualidad',
                    points: [{
                            title: 'Desarrollo de Sistemas Backend:',
                            description: 'Diseñé y desarrollé sistemas backend usando Python, Django y Django Rest Framework para aplicaciones POS y plataformas administrativas.',
                        },
                        {
                            title: 'Despliegue Cloud e Infraestructura:',
                            description: 'Desplegué y administré cargas de trabajo en Azure App Service, Azure Virtual Machines y PythonAnywhere, asegurando disponibilidad y escalabilidad.',
                        },
                        {
                            title: 'Soluciones de IA y Automatización:',
                            description: 'Construí soluciones impulsadas por IA usando NLTK, Transformers y modelos de Machine Learning supervisado para automatización de soporte y predicción de demanda de inventario.',
                        },
                        {
                            title: 'Módulos de Negocio Multi-sucursal:',
                            description: 'Implementé módulos multi-sucursal incluyendo reportes, facturación, gestión de permisos, auditoría y seguimiento de órdenes de servicio.',
                        },
                    ],
                },
                {
                    title: 'Líder de Proyecto y Desarrollador Principal',
                    location: 'Playa del Carmen, México',
                    date: 'Mayo 2022 - Ene 2023',
                    points: [{
                            title: 'Sistema para Talleres e Inventario:',
                            description: 'Desarrollé un sistema de gestión de talleres e inventario usando Django, Django Rest Framework, PostgreSQL, HTML, CSS y JavaScript.',
                        },
                        {
                            title: 'Módulos Clave de Negocio:',
                            description: 'Construí módulos clave como órdenes de servicio, inventario de refacciones, comisiones, reportes y control de acceso basado en roles (RBAC).',
                        },
                        {
                            title: 'Despliegue Cloud y Bases de Datos:',
                            description: 'Desplegué instancias del sistema usando MySQL e infraestructura cloud en Azure y PythonAnywhere.',
                        },
                        {
                            title: 'Arquitectura Multi-Tenant:',
                            description: 'Implementé una arquitectura multi-tenant que permite ambientes licenciados y aislados por cliente.',
                        },
                    ],
                },
                {
                    title: 'Líder de Proyecto y Desarrollador Principal',
                    location: 'Playa del Carmen, México',
                    date: 'Ene 2021 - Jun 2022',
                    points: [{
                            title: 'Sistema para Talleres e Inventario:',
                            description: 'Desarrollé un sistema de gestión de talleres e inventario usando Django, Django Rest Framework, PostgreSQL, HTML, CSS y JavaScript.',
                        },
                        {
                            title: 'Módulos Funcionales de Negocio:',
                            description: 'Implementé módulos centrales como órdenes de servicio, inventario de refacciones, comisiones, reportes y control de acceso basado en roles (RBAC).',
                        },
                        {
                            title: 'Despliegue Cloud e Infraestructura:',
                            description: 'Desplegué instancias del sistema usando MySQL y servicios cloud incluyendo Azure, AWS y PythonAnywhere.',
                        },
                        {
                            title: 'Soporte y Mantenimiento del Sistema:',
                            description: 'Proporcioné soporte y mantenimiento para la arquitectura existente del sistema, asegurando estabilidad y continuidad operativa.',
                        },
                    ],
                },
            ],
        },
        certifications: {
            kicker: 'Insignias desbloqueadas',
            title: 'Certificaciones e Insignias',
            subtitle: 'Certificaciones e insignias que he obtenido hasta ahora.',
            credential: 'Ver credencial',
        },
        projects: {
            kicker: 'Archivo de builds',
            title: 'Proyectos',
            subtitle: 'Algunos de mis proyectos.',
            roles: {
                'Owner and Main Developer': 'Owner y Desarrollador Principal',
                'Backend Developer': 'Desarrollador Backend',
                'Fullstack Engineer': 'Ingeniero Fullstack',
                'Main Developer': 'Desarrollador Principal',
            },
            items: {
                'Riviera Soft': {
                    description: 'Sistema administrativo con gestión de órdenes de servicio y punto de venta integrado para talleres de reparación.',
                    specs: [
                        'Desarrollé una solución administrativa y POS para talleres de reparación usando Python y Django.',
                        'Implementé módulos de órdenes de servicio, inventario, ventas, reportes y gestión de usuarios.',
                        'Desplegué una arquitectura multi-tenant escalable usando Azure y PythonAnywhere.',
                    ],
                },
                'MATH-IAS': {
                    description: 'Plataforma adaptativa de tutoría virtual de matemáticas para estudiantes universitarios.',
                    specs: [
                        'Desarrollé el backend con Python y Django para una plataforma adaptativa de tutoría virtual.',
                        'Implementé Bayesian Knowledge Tracing (BKT) para modelar el progreso del estudiante y ajustar dinámicamente la dificultad.',
                        'Diseñé procesamiento LaTeX-to-Speech para generar explicaciones matemáticas habladas.',
                        'Desplegué la plataforma en Azure, asegurando escalabilidad y acceso confiable.',
                    ],
                },
                'A-dike': {
                    description: 'Asistente legal impulsado por IA para recuperación y análisis de información legal multiestado.',
                    specs: [
                        'Diseñé y mantuve pipelines RAG usando Python y Neo4j para ingesta, estructuración y recuperación de información legal multiestado.',
                        'Desarrollé una plataforma full-stack con Django y React, incluyendo pruebas, integración continua y arquitectura modular basada en componentes.',
                        'Integré pagos con Stripe, gestión de usuarios y sesiones con Firebase, y almacenamiento documental con Cloud Storage.',
                    ],
                },
                TUUM: {
                    description: 'Test vocacional interactivo usando Unity',
                    specs: [
                        'Proyecto donde usamos Unity para crear un test vocacional interactivo, permitiendo que los estudiantes respondan cuestionarios de una forma más atractiva y amigable.',
                    ],
                },
            },
        },
        contact: {
            kicker: 'Iniciar modo cooperativo',
            title: 'Pongámonos en contacto',
            available: 'Disponible para',
            mission: 'Misiones de arquitectura, IA y full-stack.',
            description: 'Envíame un mensaje si necesitas un tech lead, un ingeniero en software o alguien que convierta una idea compleja en un producto mantenible.',
            emailButton: 'Enviar Correo',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            mail: 'Correo',
            message: 'Mensaje',
            messagePlaceholder: '¿Algo que quieras decirme?',
            sending: 'Enviando...',
            send: 'Enviar Mensaje',
            success: 'Gracias, me pondré en contacto contigo lo antes posible.',
            error: 'Algo salió mal... Por favor intenta de nuevo más tarde',
        },
    },
};

export default translations;
