import React from 'react';
import './WorkCard.scss';

interface Props {
    item: any;
    setIdItem: any;
    setOpenPopup: any;
}


const WorkCard: React.FC<Props> = ({item, setIdItem, setOpenPopup}) => {
    const { img, desc, partners, video, id } = item;

    const handleSetId = (id: any) => {
        setIdItem(id);
        setOpenPopup(true);
    };
    return (
        <div className="card-pd" onClick={() => handleSetId(id)}>
            <div className="card">
                <div className="contents-hide">
                    <div className="inner-flex">
                        <div>
                            <p className="desc">{desc}</p>
                        </div>
                        <div>
                            <p className="partners">{partners}</p>
                        </div>
                    </div>
                </div>
                <div
                    className="contents-img"
                    style={{ backgroundImage: `url(${img})` }}
                />
            </div>
        </div>
    );
};

export default WorkCard;