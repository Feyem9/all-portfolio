import { Injectable } from "@nestjs/common";

@Injectable()
export class PortfolioService {
  getAbout() {
    return {
      name: "Christian Dongueu Feyem",
      title: "Développeur Fullstack Web",
      description:
        "Je suis Christian Dongueu Feyem, développeur Fullstack passionné par la création d'expériences web et mobiles modernes. Depuis plus de 3 ans, je conçois des applications performantes et intuitives, allant du frontend élégant au backend robuste, avec des projets innovants comme Museschool et Clefcloud.",
      location: "Douala, Cameroun",
      email: "feyemlionel@gmail.com",
      phone: "+237 683 845 543 / 698 193 695",
      cvUrl: "#",
      status: "Disponible",
      formation: "CQP Fullstack",
    };
  }

  getFormation() {
    return [
      {
        id: 1,
        icon: "🎓",
        title: "Baccalauréat D",
        school: "Collège Progressif Ngounou",
        year: "2018",
      },
      {
        id: 2,
        icon: "🏆",
        title: "CQP Développement Web Fullstack",
        school: "Seven Advanced Academy",
        year: "2025",
      },
      {
        id: 3,
        icon: "📜",
        title: "Attestation de Fin de Formation",
        school: "Seven Advanced Academy",
        year: "2025",
      },
    ];
  }

  getExperience() {
    return [
      {
        id: 1,
        title: "Stage Professionnel",
        company: "Common Factor",
        period: "Juin 2025 - Décembre 2025",
        description:
          "Réalisations diverses (PayUnit Admin Dashboard, Urbany, Arsy Mission, refactoring). Responsable du développement de ces réalisations côté backend.",
        technologies: [
          "NestJS",
          "RabbitMQ",
          "MailDev",
          "Redis",
          "AWS",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        id: 2,
        title: "Stagiaire Académique",
        company: "Common Factor",
        period: "Septembre 2024 - Mars 2025",
        description:
          "Réalisations diverses (Admin Dashboard, Currency Converter, Algo Test, TodoList).",
        technologies: [
          "React Vite",
          "NestJS",
          "PostgreSQL",
          "Material UI",
          "Chakra UI",
        ],
      },
    ];
  }

  getProjects() {
    return [
      {
        id: 1,
        title: "Museschool",
        description:
          "Une école de musique en ligne - plateforme d'apprentissage moderne avec gestion complète des utilisateurs (admin, professeurs, élèves), calendrier interactif, messagerie en temps réel, appels vidéo et système de paiement intégré.",
        technologies: [
          "React 18",
          "NestJS",
          "MongoDB",
          "Socket.IO",
          "WebRTC",
          "Material UI",
          "Auth0",
          "PayUnit API",
        ],
        github: "https://github.com/Feyem9?utm_source=chatgpt.com",
        live: "https://final-project-rhl2-git-main-christians-projects-9c9bef59.vercel.app/home",
        image: "🎵",
      },
    ];
  }

  getSkills() {
    return {
      technical: [
        {
          id: 1,
          category: "Frontend",
          skills: [
            "React 18",
            "Angular 18",
            "TypeScript",
            "JavaScript ES6+",
            "HTML5 / CSS3",
            "Material UI",
            "Tailwind CSS",
            "React Admin",
            "Framer Motion",
          ],
          level: "Avancé",
        },
        {
          id: 2,
          category: "Backend",
          skills: [
            "NestJS",
            "Node.js",
            "Express",
            "Flask (Python)",
            "Socket.IO",
            "WebRTC",
            "JWT Auth",
            "Auth0",
            "RabbitMQ",
          ],
          level: "Avancé",
        },
        {
          id: 3,
          category: "Bases de Données",
          skills: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Mongoose",
            "SQLAlchemy",
            "Redis",
          ],
          level: "Intermédiaire",
        },
        {
          id: 4,
          category: "Cloud & DevOps",
          skills: [
            "AWS (EC2, S3, ALB)",
            "Terraform",
            "Docker",
            "GitHub Actions",
            "Vercel",
            "NGINX",
            "PM2",
            "Linux/Ubuntu",
          ],
          level: "Avancé",
        },
        {
          id: 5,
          category: "Outils",
          skills: [
            "Git / GitHub",
            "Postman",
            "VS Code",
            "Figma",
            "Nodemailer",
            "MailDev",
            "PayUnit API",
          ],
          level: "Expert",
        },
        {
          id: 6,
          category: "Langages",
          skills: [
            "JavaScript",
            "TypeScript",
            "Python",
            "SQL",
            "HTML5",
            "CSS3 / SCSS",
            "Bash",
          ],
          level: "Avancé",
        },
      ],
      soft: [
        {
          id: 1,
          skill: "Communication claire",
          description:
            "Capacité à expliquer des concepts techniques simplement et à collaborer efficacement.",
        },
        {
          id: 2,
          skill: "Rigueur et organisation",
          description:
            "Méthodique dans la structuration du code et la gestion des tâches.",
        },
        {
          id: 3,
          skill: "Esprit d'initiative",
          description:
            "Proactif dans la résolution de problèmes et l'intégration de nouvelles technologies.",
        },
        {
          id: 4,
          skill: "Travail en équipe",
          description:
            "Excellente collaboration dans des environnements Agile avec Git et code reviews.",
        },
        {
          id: 5,
          skill: "Résolution de problèmes",
          description:
            "Analyse et débogage rapide des erreurs complexes (backend, cloud, sécurité).",
        },
        {
          id: 6,
          skill: "Créativité",
          description:
            "Transformation d'idées artistiques en projets technologiques cohérents.",
        },
        {
          id: 7,
          skill: "Autonomie",
          description:
            "Forte capacité d'apprentissage autodidacte, notamment dans le cloud et fullstack.",
        },
        {
          id: 8,
          skill: "Curiosité technique",
          description:
            "Veille active sur les technologies modernes (NestJS, AWS, Auth0, etc.).",
        },
      ],
    };
  }

  getContact() {
    return {
      email: "feyemlionel@gmail.com",
      location: "Douala, Cameroun",
      availability: "Freelance / CDI",
      social: {
        github: "https://github.com/Feyem9",
        linkedin:
          "https://www.linkedin.com/in/christian-dongueu-feyem-9b9b9b9b/",
        twitter: "https://twitter.com/feyemlionel",
        portfolio: "https://portfolio-christian.vercel.app/",
      },
    };
  }
}
