import {Action} from "@ngrx/store";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKET = 'SET_TOKET';


export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKET;
}

export type AuthActions = Signup | Login | Logout | SetToken;
