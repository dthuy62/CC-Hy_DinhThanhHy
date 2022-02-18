import React from 'react';
import './First.scss';
import {images} from "../../../../constants/images";

const FirstPage = () => {
    return (
        <div className='first-page'>
            <div className='first-container'>
                <div className='logo-header'>
                    <img src={images.LOGO_IC} alt="logo" />
                    <span>About The Project</span>
                </div>
                <div className='first-title'>
                    everything <br/>
                    is in the <br/>
                    conceptcube <br/>
                </div>
                <div className='bg-object-1'>
                    <img src={images.BG_OBJECT_1} alt="bg-object-1" />
                </div>
                <div className='bg-object-2'>
                    <img src={images.BG_OBJECT_2} alt="bg-object-2" />
                </div>
                <div className='bg-object-3'>
                    <img src={images.BG_OBJECT_3} alt="bg-object-3" />
                </div>
                <div className='bg-object-4'>
                    <img src={images.BG_OBJECT_4} alt="bg-object-4" />
                </div>
                <div className='bg-object-5'>
                    <img src={images.BG_OBJECT_5} alt="bg-object-5" />
                </div>
                <div className='first-intro-company'>
                    ConceptCube Company Introduction
                </div>
            </div>
        </div>

    );
};

export default FirstPage;