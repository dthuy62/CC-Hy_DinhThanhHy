import React from 'react';
import {Work} from "../../../../utils/interface";
import './PopupDetail.scss'

interface Props {
    data: Work;
    setOpenPopup: any;
}
const PopupDetail: React.FC<Props> = ({ data, setOpenPopup }) => {
    const { video, detailImg, desc, partners } = data;
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <div className="btn-close" onClick={() => setOpenPopup(false)}>
                        <span>X</span>
                    </div>
                </div>

                <div className="popup-contents">
                    <div className="scroll-inners">
                        {video ? (
                            <div className="mainVideo">
                                <iframe
                                    id="iMovie"
                                    title="mainVideo"
                                    name="movieFrame"
                                    width={"100%"}
                                    height={"100%"}
                                    src={video}
                                    frameBorder="0"
                                />
                            </div>
                        ) : null}

                        {detailImg ? (
                            <div className="mainDesign">
                                <img src={detailImg} alt="" />
                            </div>
                        ) : null}

                        <div className="overView">
                            <div className="overViewWrap">
                                <div className="left-title">
                                    <div className="type">{desc}</div>
                                    <div className="company">{partners}</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-works">
                            <a href="mailto:loocreative@playlooc.com" title="">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupDetail;