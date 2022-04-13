import { ActionType, IUser, UserActionTypes, UsersState } from "../../types/user-type"
const initialState: UsersState = {
    users: [{
        id: 1,
        name: "Евгений Бахмутский",
        email: "1jony12031@gmila.com",
        age: 20,
        position: "Frontend-developer",
        relation: 5
      },
      {
        id: 2,
        name: "Алена Лапшева",
        email: "jony12031@gmila.com",
        age: 18,
        position: "Frontend-developer",
        relation: 2
      },
      {
        id: 3,
        name: "Бакланов Иван",
        email: "ony12031@gmila.com",
        age: 30,
        position: "Frontend-developer",
        relation: 1
      },
      {
        id: 4,
        name: "Вениамин Хорев",
        email: "91jony12031@gmila.com",
        age: 43,
        position: "Frontend-developer",
        relation: 0
      },
      {
        id: 5,
        name: "Кристина Литс",
        email: "y12031@gmila.com",
        age: 52,
        position: "Frontend-developer",
        relation: 3
      }
      ,
      {
        id: 6,
        name: "Степан Артуров",
        email: "S1jony12031@gmila.com",
        age: 39,
        position: "Frontend-developer",
        relation: 5
      },
      {
        id: 7,
        name: "Влад Зюзин",
        email: "a1jony12031@gmila.com",
        age: 16,
        position: "Frontend-developer",
        relation: 4
      },
      {
        id: 8,
        name: "Мария Сорокина",
        email: "b1jony12031@gmila.com",
        age: 27,
        position: "Frontend-developer",
        relation: 2
      }],
    filtersUsers: [],
    editing: false
}


const updateUser = (users: IUser[], currentUser: IUser) => {
    return users.map(user => {
        if(user.id === currentUser.id){
            return currentUser
        } else {
            return user
        }
    })
}

const editUser = (users: IUser[], id: number) => {
  return users.find((user:IUser) => user.id === id)
}
 
const sortUser = (users: IUser[], sort: string) => {
  if(sort === ("name" || "email" || "position")){
    return [...users.sort((a: IUser, b: IUser) => a[sort].localeCompare(b[sort]))]
  } else if(sort === "email"){
    return [...users.sort((a: IUser, b: IUser) => a[sort].localeCompare(b[sort]))]
  } else if(sort === "position"){
    return [...users.sort((a: IUser, b: IUser) => a[sort].localeCompare(b[sort]))]
  } else if(sort === ("relation")){
    return [...users.sort((a: IUser, b: IUser) => b[sort] - a[sort])]
  } else if(sort === ("age")){
    return [...users.sort((a: IUser, b: IUser) => b[sort] - a[sort])]
  }
  return users
}


export const userReducer = (state = initialState, action:ActionType):UsersState => {
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {...state, users: action.payload}
        case UserActionTypes.ADD_USER:
            return {...state, users: [ action.payload, ...state.users]}
        case UserActionTypes.DELETE_USER:
            return {...state, users: state.users.filter(todo => todo.id !== action.payload)}
        case UserActionTypes.UPDATE_USER:
            return {...state, users: updateUser(state.users, action.payload), editing: false}
        case UserActionTypes.EDIT_USER:
            return {...state, users: state.users, editing: editUser(state.users, action.payload)}
        case UserActionTypes.FILTER_USER:
          return {...state, filtersUsers: action.payload}
        case UserActionTypes.SORT_USER:
          return {...state, users: sortUser(state.users, action.payload)}
        default:
            return state
    }
}