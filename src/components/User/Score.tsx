import React, { FC } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';
import { IUser } from '../../types/user-type';

export interface IScoreProps {
    relation: number,
    editing: boolean | IUser | undefined

}

const Score: FC<IScoreProps>  = ({relation, editing}) => {

    const starIcon = [];
    for(let i = 0; i < relation; i++){
        starIcon.push(<StarIcon />)
    }
    for(let i = 0; i < 5 - relation; i++){
        starIcon.push(<StarBorderIcon />)
    }

if(editing){
    return (
    <div className='score'>
        <Rating 
            readOnly
            disabled
            name="half-rating" 
            value={relation}
        />
    </div>
    );
}

return (
    <div className='score'>
        <Rating 
            readOnly
            name="half-rating" 
            value={relation}
        />
    </div>
    );
}

export default Score; 
