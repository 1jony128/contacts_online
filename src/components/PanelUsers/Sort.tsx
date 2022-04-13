import { MenuItem, Select } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSelect from '../../hooks/useSelect';
import { sortUserAction } from '../../store/action-creators/user-action';

const Sort: FC  = () => {

    const sort = useSelect('name');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortUserAction(sort.value))
    }, [sort.value])

    return (
            <Select
                defaultValue={sort.value}
                value={sort.value}
                onChange={event => {
                    sort.onChange(event.target.value)}
                }
            >
                <MenuItem value={"name"}>По имени</MenuItem>
                <MenuItem value={"email"}>По почте</MenuItem>
                <MenuItem value={"position"}>По должности</MenuItem>
                <MenuItem value={"age"}>По возрасту</MenuItem>
                <MenuItem value={"relation"}>По рейтингу</MenuItem>
            </Select>
      );
}

export default Sort; 
