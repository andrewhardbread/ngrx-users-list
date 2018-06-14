import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { UserService } from '../../services/user.service';

import * as UserAction from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user.model';



@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
    loadUsers$ = this.actions$.ofType(UserAction.REQUEST_USERS)
      .pipe(
        switchMap( () => this.userService.getUsers()),
        map( (users: User[]) => new UserAction.LoadUsers(users))
      );
}
