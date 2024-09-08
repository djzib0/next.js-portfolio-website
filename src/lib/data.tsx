import {LinkObject, ProjectType, TechStack} from "./types"

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "CRM app",
        desc: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae error molestias dignissimos doloribus, possimus labore quas nemo unde omnis?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit nisi animi, reprehenderit dolorem eius maxime minus, ab libero harum, voluptas veritatis laudantium saepe consequatur?",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nesciunt excepturi vitae labore atque.",
        ],
        img: "/testimg.jpg",
        tech: [TechStack.HTML, TechStack.CSS, TechStack.JavaScript, TechStack.React],
        gitLink: "https://www.google.com",
        url: "",
    },
    {
        id: 2,
        title: "Recipair app",
        desc: ["Create your own shoplists based on chosen recipes"],
        img: "/testimg.jpg",
        tech: [TechStack.HTML, TechStack.CSS, TechStack.JavaScript, TechStack.React],
        gitLink: "link to github",
        url: "http://www.google.com",
    },
]


export const links: LinkObject[] = [
    {
      title: "home",
      path: "/"
    },
    {
      title: "about",
      path: "/about"
    },
    {
      title: "projects",
      path: "/projects"
    },
    {
      title: "contact",
      path: "/contact"
    },
  ]