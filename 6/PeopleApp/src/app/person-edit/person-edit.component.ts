import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { PeopleService } from '../people.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent {
  // activedRoute: ActivatedRoute
  personsName: string;
  form: FormGroup;

  constructor(
    private activedRoute: ActivatedRoute,
    private ps: PeopleService,
    private rs: Router
  ) {
    let formControls = {
      name: new FormControl('', Validators.required),
      inst: new FormControl('', Validators.required),
    };
    this.personsName = activedRoute.snapshot.params['name'];
    this.form = new FormGroup(formControls);
  }

  onSubmit() {
    this.ps.edit(this.personsName, this.form.value.name, this.form.value.inst);
  }

  back() {
    this.rs.navigate(['/people']);
  }
}
