export type LinkObject = {
    title: string;
    path: string;
}

export type ProjectType = {
    id: number;
    title: string;
    desc: string;
    img: string;
    tech: string[]; //TODO: change to enum?
    gitLink: string; 
    url: string;
}