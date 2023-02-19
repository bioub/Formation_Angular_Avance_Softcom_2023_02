import { Observable, Subject } from "rxjs";
import { User } from "../shared/models/user";

export const UserServiceInterface = Symbol();

export interface UserServiceInterface {
  events: Subject<string>;
  getList$(): Observable<User[]>;
}
