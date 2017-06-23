import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";

@Injectable()
export class CarsService {

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get('http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4')
      .map((response: Response) => {
        return response.json();
    });
  }

}
