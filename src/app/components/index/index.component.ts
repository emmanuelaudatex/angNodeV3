import { PartService } from '../../part.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  parts: any;

  constructor(private http: HttpClient, private service: PartService) {}
  ngOnInit() 
  {
setTimeout(() => {
  this.getParts();
}, 500);

    }

  getParts() {
    this.service.getParts().subscribe(res => {
      this.parts = res;
    });
  }
  deletePart(id) {
    this.service.deletePart(id).subscribe(res => {
      console.log('Deleted');
    });
          this.getParts();
  }
}
