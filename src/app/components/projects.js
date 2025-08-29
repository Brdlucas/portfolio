import FrontendImage from "/public/img/projects/frontend-ai.webp";
import CVImage from "/public/img/projects/CV.webp";
import MiniamakerImage from "/public/img/projects/miniamake.webp";
import ActionImage from "/public/img/projects/action.webp";
import SupakarImage from "/public/img/projects/supakar.webp";
import EhubImage from "/public/img/projects/ebuyhub.webp";
import SophieImage from "/public/img/projects/portfolio-sophie.webp";
import bibliotechImage from "/public/img/projects/bibliotech.webp";
import BakkroImage from "/public/img/projects/bakkro.webp";

const projects = [
    // {
    //     id: -1,
    //     image: "",
    //     title: "",
    //     description: "",
    //     date: "",
    // }

    {
        id: 0,
        image: BakkroImage,
        title: "Bakkrô",
        link:
            "https://play.google.com/store/apps/details?id=com.anonymous.bakkro",
        description: "application immobilière avec visité en 3D",
        language: "react native",
        date: "11-03-2025",
    },

    {
        id: 1,
        image: bibliotechImage,
        title: "bibliotech",
        link: "https://github.com/Brdlucas/BiblioTech",
        description:
            "site d'emprunt, recherche de livres mais aussi il est possible d'ajouter en favoris des livres",
        language: "symfony, tailwindcss",
        date: "11-03-2025",
    },

    {
        id: 2,
        image: MiniamakerImage,
        title: "Miniamaker",
        link: "https://github.com/Brdlucas/miniamaker",
        description:
            "Permet au entreprise comme au miniamaker de se contacter par l'intermédiaire de ce site web",
        language: "symfony, bootstrap, stripe",
        date: "03-02-2025",
    },

    {
        id: 3,
        image: SophieImage,
        link: "",
        title: "portfolio",
        description: "refonte du site de sophie Bluel en reactJs",
        language: "reactJs, css",
        date: "12-11-2024",
    },

    {
        id: 4,
        image: FrontendImage,
        title: "Entrainement frontend",
        link: "",
        description: "Entrainement frontend",
        language: "html, css, javascript",
        date: "12-08-2024",
    },
    {
        id: 5,
        image: CVImage,
        title: "CV",
        link: "",
        description: "CV créer avec reactJs",
        language: "reactJs, css",
        date: "12-08-2024",
    },

    {
        id: 6,
        image: ActionImage,
        title: "Action",
        link: "",
        description: "Recréation du site action en html et css",
        language: "html, css",
        date: "14-10-2024",
    },

    {
        id: 7,
        image: SupakarImage,
        title: "Supakar",
        link: "https://github.com/Brdlucas/supakar-gta",
        description: "Entrainement reactJS (exercice de reprise)",
        language: "reactJs, javascript, css",
        date: "04-11-2024",
    },
    {
        id: 8,
        image: EhubImage,
        link: "https://github.com/Brdlucas/e-buyhub",
        title: "E-buy-hub",
        description: "site e-commerce",
        language: "nextJs, tailwindcss",
        date: "07-05-2023",
    },
];

export default projects;
