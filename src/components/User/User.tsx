import React, { FC } from 'react';
import { avatars } from '../../helpers/avatars';
import { IUser } from '../../types/user-type';
import Score from './Score';
import Toolbox from './Toolbox';

export interface IUserProps {
    user: IUser
    editing: boolean | IUser | undefined
}

const User: FC<IUserProps>  = ({user, editing}) => {

    const { id, name, email, age, position, relation} = user;


  return (
        <div className={`list_item ${editing ? "disabled" : ""}`}>
          <div className="info">
            <div className='avatar'>
              <img 
                alt="Travis Howard" 
                src={avatars[id] ? avatars[id] : avatars[0]}
              />
            </div>   
            <div className='text'>
              <h3>{name}</h3>
              <div>
                <span className='key'>Возраст:</span>
                <span className='value'>{age}</span>
              </div>
              <div>
                <span className='key'>E-mail:</span>
                <span className='value'>{email}</span>
              </div>
              <div>
                <span className='key'>Должность:</span>
                <span className='value'>{position}</span>
              </div>
            </div>
          </div>        
          <div className='tools'>
            <Toolbox id={id}/>
            <Score relation={relation} editing={editing}/>
          </div>
        </div>
  );
}

export default User; 
