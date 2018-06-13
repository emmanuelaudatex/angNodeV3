import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartService } from './../../part.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  part: any;
  angForm: FormGroup;
  title = 'Edit Part';
  constructor(private route: ActivatedRoute, private router: Router, private service: PartService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updatePart(name, price) {
    this.route.params.subscribe(params => {
    this.service.updatePart(name, price, params['id']);
    this.router.navigate(['index']);
  });
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.part = this.service.editPart(params['id']).subscribe(res => {
        this.part = res;
      });
    });
  }

}
