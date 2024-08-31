import {LinkObject, ProjectType} from "./types"

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "CRM app",
        desc: "This is a simple CRM app where you can add new tasks...",
        img: "/testimg.jpg",
        tech: ["html", "css", "js", "react"],
        gitLink: "link to github",
        url: "",
    },
    {
        id: 2,
        title: "Recipair app",
        desc: "Create your own shoplists based on chosen recipes",
        img: "/testimg.jpg",
        tech: ["html", "css", "js", "react"],
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