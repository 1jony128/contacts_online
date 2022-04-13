
import React, { FC } from 'react';
import Search from './Search';
import Sort from './Sort';

const PanelUsers: FC  = () => {

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
