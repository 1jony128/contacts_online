import React, { FC } from 'react';
import CreateUser from '../components/CreateUser/CreateUser';
import ListUsers from '../components/ListUsers';
import PanelUsers from '../components/PanelUsers/PanelUsers';

export interface IContactsProps {
}


const Contacts: FC<IContactsProps>  = () => {

  return (
    <div >
      <h1>Контакты</h1>
      <div className='contacts'>
        <CreateUser />
        <div className='list'>
          <PanelUsers />
          <ListUsers />
        </div>

      </div>
      
    </div>
  );
}

export default Contacts; 
