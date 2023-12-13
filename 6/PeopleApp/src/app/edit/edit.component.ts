import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { PeopleListComponent } from '../people-list/people-list.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  form: FormGroup;
  peopleArray: any[];
  //need to be able to edit the person
  constructor(private ps: PeopleService, private rs: Router) {
    this.peopleArray = ps.get();
    let formControls = {
      name: new FormControl('', Validators.required),
    };
    this.form = new FormGroup(formControls);
  }

  onSubmit() {
    let arr = this.form.value;
    
    // this.ps.edit(arr.name);
  }
}
