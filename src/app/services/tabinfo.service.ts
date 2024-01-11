import { Information } from "../informations";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class TabInfoService {

  
   TabInfo: Information[] = [
    {
        id: 1,
        titre: "Le prompt",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Débutant", contenu: "Contenu du module 2" },
            { titre: "Module 3", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
            { titre: "Module 4", niveau: "intermédaire", contenu: "Contenu du module 2" },
            { titre: "Module 5", niveau: "Expérimenté", contenu: "Contenu du module 2" },
            { titre: "Module 6", niveau: "Expérimenté", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 2,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 3,
        titre: "Usages",
        image: "./assets/ai_3.png",
        texte: "Comprendre les futurs usages de l'I.A",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 4,
        titre: "Enjeux",
        image: "./assets/ai_4.png",
        texte: "Les transformations sectorielles liées à l'I.A",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 5,
        titre: "Prompt Engineering",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 6,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 7,
        titre: "Usages",
        image: "./assets/ai_3.png",
        texte: "Comprendre les futurs usages de l'I.A",
        course: [
            { titre: "Module 1", niveau: "Facile", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Moyen", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 8,
        titre: "Enjeux",
        image: "./assets/ai_4.png",
        texte: "Les transformations sectorielles liées à l'I.A",
        course: [
            { titre: "Module 1", niveau: "Facile", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Moyen", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 9,
        titre: "Prompt Engineering",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Facile", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Moyen", contenu: "Contenu du module 2" },
        ]
    },
    {
        id: 10,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Facile", contenu: "Contenu du module 1" },
            { titre: "Module 2", niveau: "Moyen", contenu: "Contenu du module 2" },
        ]
    },
];



      getAllTabInfo():Information[] {
        return this.TabInfo;
      }

      getTabInfobyId(id:number): Information|undefined{
        return this.TabInfo.find(element => element.id === id)
      }
    
}