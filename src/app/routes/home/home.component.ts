import { Component, inject } from "@angular/core";
import {CardComponent} from "../../components/card/card.component";
import {MenuComponent} from "../../components/menu/menu.component";
import { Information } from "../../informations";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "../../components/footer/footer.component";
import { TabInfoService } from "../../services/tabinfo.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MenuComponent, MenuComponent, CommonModule,FooterComponent],
  styleUrls:['./home.component.css'],
  templateUrl:'./home.component.html'
   
})


export class HomeComponent {
  TabInfo : Information[] = [];
  TabInfoService : TabInfoService = inject(TabInfoService)

  constructor(){
    this.TabInfo = this.TabInfoService.getAllTabInfo();
  }



  }

