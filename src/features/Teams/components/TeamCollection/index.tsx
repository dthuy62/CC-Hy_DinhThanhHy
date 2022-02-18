import React from 'react';
import {TeamDataType} from "../../../../utils/interface";



interface ITeamListProps {
    item: {
        id: number;
        title: string;
        list: TeamDataType[];
    }
}

const TeamCollection = ({ item }: ITeamListProps) => {
    const { id, title, list } = item;

    return (
        <div className='list-all'>
            <p className='list-name'>{title}</p>
            <div className='list_'>
                {
                    list.map((alo) => (
                        <ul className='list-scroll'>
                            <li>
                                <p className='name'>{alo.name}</p>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamCollection;