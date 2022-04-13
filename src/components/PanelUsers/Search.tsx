import { Button, Input } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { filterUserAction } from '../../store/action-creators/user-action';

export interface ISearchProps {
}


const Search: FC<ISearchProps>  = () => {

    const { users  } = useTypedSelector(state => state.users);

    const search = useInput('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(search.value !== ""){
            const filtersUser = users.filter(user => user.name.includes(search.value))
            dispatch(filterUserAction(filtersUser))
        } else {
            dispatch(filterUserAction([]))
        }

    }, [search.value])

    return (
            <Input
             placeholder='Поиск контактов'
             value={search.value} 
             onChange={search.onChange}
             />
      );
}

export default Search; 
