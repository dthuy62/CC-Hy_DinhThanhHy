import React from 'react';
import {Work} from "../../../../utils/interface";
import WorkCard from "../WorkCard";
import './WorkCollection.scss';

interface Props {
    data: Work[];
    setIdItem: any;
    setOpenPopup: any;
}

const WorkCollection: React.FC<Props> = (props) => {
    const {data, setIdItem, setOpenPopup} = props;
    return (
        <div className={"card-wr"}>
            <div className="scroll">
                {
                   data.map((item, key) => (
                        <WorkCard
                            setIdItem={setIdItem}
                            setOpenPopup={setOpenPopup}
                            item={item}
                            key={key}
                        />

                   ))
                }
            </div>
        </div>
    );
};

export default WorkCollection;