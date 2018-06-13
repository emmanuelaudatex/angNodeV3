import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PartService {

  result: any;
  constructor(private http: HttpClient) {}
  addPart(name, price) {
      const uri = 'http://localhost/parts/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }
  getParts() {
      const uri = 'http://localhost/parts';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  editPart(id) {
      const uri = 'http://10.11.18.43:4000/parts/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  updatePart(name, price, id) {
      const uri = 'http://10.11.18.43:4000/parts/update/' + id;
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deletePart(id) {
      const uri = 'http://10.11.18.43:4000/parts/delete/' + id;
        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
