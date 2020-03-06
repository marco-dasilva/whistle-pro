import { Application } from './../../../interface/application.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() application: Application;

  constructor() { }

  ngOnInit(): void {
  }

}
