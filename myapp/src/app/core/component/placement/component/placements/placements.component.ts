import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements OnInit {
  isTable = true;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

  }
}
