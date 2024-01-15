import { Information } from "../informations";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class TabInfoService {

  
   TabInfo: Information[] = [
    {
        id: 1,
        titre: "Prompt Engineering",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1", image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 3", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 4", niveau: "Débutant", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 5", niveau: "Expérimenté", contenu: "Contenu du module 2" ,image:"./assets/img_1.jpg"},
            { titre: "Module 6", niveau: "Expérimenté", contenu: "Contenu du module 2" ,image:"./assets/img_1.jpg"},
        ]
    },
    {
        id: 2,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1" ,image:"./assets/img_1.jpg"},
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 3", niveau: "Débutant", contenu: "Contenu du module 1" ,image:"./assets/img_1.jpg"},
            { titre: "Module 4", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 5", niveau: "Débutant", contenu: "Contenu du module 1" ,image:"./assets/img_1.jpg"},
            { titre: "Module 6", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 3,
        titre: "Usages",
        image: "./assets/ai_3.png",
        texte: "Comprendre les futurs usages de l'I.A",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 3", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 4", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 5", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 6", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 4,
        titre: "Enjeux",
        image: "./assets/ai_4.png",
        texte: "Les transformations sectorielles liées à l'I.A",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 3", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 4", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 5", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 6", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 5,
        titre: "Prompt Engineering",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 3", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 4", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
            { titre: "Module 5", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 6", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 6,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Intermédiaire", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 7,
        titre: "Usages",
        image: "./assets/ai_3.png",
        texte: "Comprendre les futurs usages de l'I.A",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Débutant", contenu: "Contenu du module 2" ,image:"./assets/img_1.jpg"},
        ]
    },
    {
        id: 8,
        titre: "Enjeux",
        image: "./assets/ai_4.png",
        texte: "Les transformations sectorielles liées à l'I.A",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Débutant", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 9,
        titre: "Prompt Engineering",
        image: "./assets/ai.png",
        texte: "Comprendre le Prompt Engineering",
        course: [
            { titre: "Module 1", niveau: "Débutant", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
        ]
    },
    {
        id: 10,
        titre: "LLM",
        image: "./assets/ai_2.png",
        texte: "Comprendre les modèles de langages",
        course: [
            { titre: "Module 1", niveau: "Facile", contenu: "Contenu du module 1",image:"./assets/img_1.jpg" },
            { titre: "Module 2", niveau: "Intermédiaire", contenu: "Contenu du module 2",image:"./assets/img_1.jpg" },
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