import { Button, Input } from '@mui/material';
import React, { FC } from 'react';
import Search from './Search';
import Sort from './Sort';

export interface IPanelUsersProps {
}


const PanelUsers: FC<IPanelUsersProps>  = () => {



    return (
        <div className='panel_users'>
            <h1>Список контактов</h1>
            <div className='panel_wrapper'>
                <Search />
                <Sort />  
            </div>        
        </div>
      );
}

export default PanelUsers; 
