export interface Information{
    id:number;
    image : string;
    titre : string;
    texte : string;
    course?: Module[];
}

export interface Module{
    titre:string;
    niveau:string;
    contenu:string;
    image:string;
}