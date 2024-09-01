export type LinkObject = {
    title: string;
    path: string;
}

export type ProjectType = {
    id: number;
    title: string;
    desc: string[];
    img: string;
    tech: TechStack[];
    gitLink: string; 
    url: string;
}

export enum TechStack {
    JavaScript = "JavaScript",
    HTML = "HTML",
    CSS = "CSS",
    React = "React",
}