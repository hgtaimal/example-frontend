import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private httpClient: HttpClient) {
  }


  public getResources() {
    const url = `api/resource`;
    return this.httpClient.get<any>(url);
  }
}
