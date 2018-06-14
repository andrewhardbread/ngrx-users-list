import { UserState } from './store/states/user.state';

export interface AppState {
  readonly userState: UserState;
}
