import { GoldService } from './../../services/gold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  location: number;
  constructor(private goldService: GoldService) { }
  ngOnInit() {
}
  GetGold(sender: string, min, max) {
    this.location = this.goldService.Gold(sender, min, max);
  }
}
