import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  @Input() public resourceList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
