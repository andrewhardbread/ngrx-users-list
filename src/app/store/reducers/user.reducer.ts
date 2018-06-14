import { User } from '../../models/user.model';

import * as UserActions from '../actions/user.actions';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

export function reducer(state: UserState = initialState, action: UserActions.Action): UserState {

  switch (action.type) {

    case UserActions.ADD_USER:
      return {...state, users: [ ...state.users, action.payload ]};

    case UserActions.REMOVE_USER: {
      const users = [ ...state.users ];

      users.splice(action.payload, 1);

      return { ...state, users};
    }

    case UserActions.UPDATE_USER: {
      const users = [ ...state.users ];

      users[action.payload].age++;

      return { ...state, users };
    }

    case UserActions.LOAD_USERS:
      return { ...state, users: [ ...action.payload ] };

    default:
      return state;
  }

}


