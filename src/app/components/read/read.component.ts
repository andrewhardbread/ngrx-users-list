import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

import * as UserActions from '../../store/actions/user.actions';
import { getUsers } from '../../store/selectors/user.selector';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = store.select(getUsers);
  }

  ngOnInit() {
  }

  deleteUser(index: number): void {
    this.store.dispatch(new UserActions.RemoveUser(index));
  }

  updateUser(index: number): void {
    this.store.dispatch(new UserActions.UpdateUser(index));
  }

}
