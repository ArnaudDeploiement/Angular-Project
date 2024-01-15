import { Component } from "@angular/core";
import { MenuComponent } from "../../components/menu/menu.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsComponent } from "./forms/forms.component";
import { CardComponent } from "../../components/card/card.component";


@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [MenuComponent,FooterComponent,FormsComponent, MenuComponent, CardComponent],
    styleUrls:['./contact.component.css'],
    templateUrl:'./contact.component.html',
  })
  export class ContactComponent {

    

  
  }