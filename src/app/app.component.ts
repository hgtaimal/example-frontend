import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "./rest-api/resources.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example-frontend';
  resourceList= {};
  constructor(private _resourcesService: ResourcesService) {
  }

  async ngOnInit() {
    /* this._resourcesService
       .getResources()
       .subscribe(response => {
       console.log("respnse", response);
       this.resourceList = response;

     })*/
    const response = await this._resourcesService
      .getResources()
      .toPromise();
    this.resourceList = response;
  }
}
