import {LinkObject, ProjectType, TechStack} from "./types"

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "CRM app",
        desc: [
          "This is a simple CRM app where you can add new tasks...",
          "This is a second paragraph",
          "And this is another one"
        ],
        img: "/testimg.jpg",
        tech: [TechStack.HTML, TechStack.CSS, TechStack.JavaScript, TechStack.React],
        gitLink: "link to github",
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
      title: "projects",
      path: "/projects"
    },
  ]