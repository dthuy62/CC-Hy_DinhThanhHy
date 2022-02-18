import React from 'react';
import './Fifth.scss';

const FifthPage = () => {
    return (
        <div className='fifth-page'>
            <div className='fifth-page-container'>
                <div className='inner-content'>
                    <div className='big-title'>
                        Let's <br/>
                        Make the world <br/>
                        Together. <br/>
                    </div>
                    <div className='info-wrapper'>
                        <div className='block-item'>
                            <h3 className='block-item-name'>Partnership</h3>
                            <p className='block-item-contact'>looc.tzlee@gmail.com</p>
                        </div>
                        <div className='block-item'>
                            <h3 className='block-item-name'>Recruiting</h3>
                            <p className='block-item-contact'>looc.tzlee@gmail.com</p>
                        </div>
                        <div className='block-item'>
                            <h3 className='block-item-name'>Learn more.</h3>
                            <p className='block-item-contact'>Learn more about us { '>' }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthPage;