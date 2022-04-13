import { Button } from '@mui/material';
import React, { FC } from 'react';
import User from '../components/User/User';
import { useTypedSelector } from '../hooks/useTypedSelector';

export interface IListUsersProps {
}


const ListUsers: FC<IListUsersProps>  = () => {

  const { users, editing, filtersUsers } = useTypedSelector(state => state.users);

if(filtersUsers && filtersUsers.length > 0){

    return (
        <div className="container">
            {
                filtersUsers.map(user => {
                    return <User key={user.id} user={user} editing={editing}/>
                })
            }                 
        </div>     
      );
}


if(users && users.length > 0){
    return (
        <div className="container">
            {
                users.map(user => {
                    return <User key={user.id} user={user} editing={editing}/>
                })
            }                 
        </div>     
      );
}


return (
    <>
        <div>
            <h2>Список контактов пуст</h2>
            <Button 
                variant="contained"
            >
                Подгрузить контакты с базы?
            </Button>
        </div>   
    </>
    );
  
}

export default ListUsers; 
