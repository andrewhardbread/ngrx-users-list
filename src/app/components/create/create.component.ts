import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<AppState>
  ) {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      nickname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }


  addUser(): void {
    this.store.dispatch(new UserActions.AddUser({ ...this.form.value }));
  }

  loadUsers(): void {
    this.store.dispatch(new UserActions.RequestUsers());
  }

  ngOnInit() {
  }

}
