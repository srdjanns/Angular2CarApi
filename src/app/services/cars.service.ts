import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";
import {Cars} from "../models/cars";
import "rxjs/add/operator/map";

@Injectable()
export class CarsService {

  constructor(private http: Http) {}

  getCars(): Observable<Cars> {
    return this.http.get('http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4')
      .map((response: Response) => {
        return response.json()
    });
  }

}
