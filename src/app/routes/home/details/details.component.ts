import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabInfoService } from '../../../services/tabinfo.service';
import { Information } from '../../../informations';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FooterComponent } from '../../../components/footer/footer.component';


@Component({
  selector: 'app-details',
  standalone:true,
  imports:[CommonModule,MenuComponent,FooterComponent, NgClass],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
route : ActivatedRoute = inject(ActivatedRoute);
TabInfoId = 0;
TabInfoService : TabInfoService = inject (TabInfoService);
TabInfo : Information | undefined;


constructor(){
  this.TabInfoId = Number(this.route.snapshot.params['id']);
  this.TabInfo=
  this.TabInfoService.getTabInfobyId(this.TabInfoId);
}


}
