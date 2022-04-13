import React, {FC } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteUserAction, editUserAction } from '../../store/action-creators/user-action';

export interface IToolboxProps {
    id: number
}

const Toolbox: FC<IToolboxProps>  = ({id}) => {
    const dispatch = useDispatch()

    const deleteUser = (id: number) => {
        dispatch(deleteUserAction(id))
    }

    const editUser = (id: number) => {
        dispatch(editUserAction(id))
    }

  return (
    <div className='toolbox'>
        <EditIcon 
            onClick={() => editUser(id)}
        />
        <DeleteOutlineIcon
            onClick={() => deleteUser(id)}
        />
    </div>
  );
}

export default Toolbox; 
