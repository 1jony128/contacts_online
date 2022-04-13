
export interface UsersState{
    users: IUser[],
    editing: boolean | IUser | undefined,
    filtersUsers: IUser[],
}

export interface IUser{
    id: number;
    name: string;
    email: string;
    age: number;
    position: string;
    relation: number;
}

export enum UserActionTypes {
    GET_USERS = "GET_USERS",
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER",
    UPDATE_USER = "UPDATE_USER",
    EDIT_USER = "EDIT_USER",
    FILTER_USER = "FILTER_USER",
    SORT_USER = "SORT_USER"
}


interface GetUsersAction {
    type: UserActionTypes.GET_USERS;
    payload: IUser[];
}
interface AddTodoAction {
    type: UserActionTypes.ADD_USER;
    payload: IUser;
}
interface DeleteUsersAction {
    type: UserActionTypes.DELETE_USER;
    payload: number;
}
interface UpgradeUsersAction {
    type: UserActionTypes.UPDATE_USER;
    payload: IUser;
}

interface EditUsersAction {
    type: UserActionTypes.EDIT_USER;
    payload: number;
}

interface FilterUsersAction {
    type: UserActionTypes.FILTER_USER;
    payload: IUser[];
}

interface SortUsersAction {
    type: UserActionTypes.SORT_USER;
    payload: string;
}

export type ActionType = 
GetUsersAction | 
AddTodoAction | 
DeleteUsersAction | 
UpgradeUsersAction | 
EditUsersAction | 
FilterUsersAction |
SortUsersAction


