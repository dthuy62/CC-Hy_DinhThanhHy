import React from 'react';

import './Teams.scss';
import {dataTeam} from "../../utils/fakeData";
import TeamCollection from "./components/TeamCollection";
import {images} from "../../constants/images";


function Teams() {
    return (
        <div className='team'>
            <div className='team-container'>
                <div className='image-background' style={{backgroundImage: `url(${images.BG_TEAMS})`}} />
                <div className='black-back black'>
                    <div className='wrapper-main padding'>
                        <div className='team-content'>
                            <div className='title-header'>

                            </div>
                            <div className='list-wrapper'>
                                <div className='wrap'>
                                    {
                                        dataTeam.map((item) => (
                                            <TeamCollection key={item.id} item={item} />
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teams;