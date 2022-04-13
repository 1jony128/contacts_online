import {UserActionTypes, IUser} from "../../types/user-type";

export const getUserAction = (payload: IUser[]) => ({type: UserActionTypes.GET_USERS, payload});
export const addUserAction = (payload: IUser) => ({type: UserActionTypes.ADD_USER, payload});
export const deleteUserAction = (payload: number) => ({type: UserActionTypes.DELETE_USER, payload});
export const updateUserAction = (payload: IUser) => ({type: UserActionTypes.UPDATE_USER, payload});
export const editUserAction = (payload: number) => ({type: UserActionTypes.EDIT_USER, payload}); 
export const filterUserAction = (payload: IUser[]) => ({type: UserActionTypes.FILTER_USER, payload}); 
export const sortUserAction = (payload: string) => ({type: UserActionTypes.SORT_USER, payload}); 