import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const ADD_USER = '[USER] Add';
export const REMOVE_USER = '[USER] Remove';
export const UPDATE_USER = '[USER] Update';
export const LOAD_USERS = '[USER] Load';
export const REQUEST_USERS = '[USER] Request';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: number) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: number) {}
}

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: User[]) {}
}

export class RequestUsers implements Action {
  readonly type = REQUEST_USERS;

  constructor() {}
}

export type Action = AddUser | RemoveUser | RequestUsers | LoadUsers | UpdateUser;
