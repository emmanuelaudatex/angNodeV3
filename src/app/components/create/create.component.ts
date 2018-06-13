import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PartService } from '../../part.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Part';
  angForm: FormGroup;
  constructor(private partservice: PartService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addPart(name, price) {
      this.partservice.addPart(name, price);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }

}