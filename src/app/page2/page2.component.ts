import { Component, OnInit } from '@angular/core';
import { TouridService } from '../services/tourid.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  tourids: string[];

  constructor(private tourServ: TouridService) { }

  ngOnInit() {
    this.tourServ.getTourId().subscribe(data => this.tourids = data);
  }
  onSelect() {
    // this.tourServ.getTourId().subscribe(data => this.tourid = data);
  }
}
