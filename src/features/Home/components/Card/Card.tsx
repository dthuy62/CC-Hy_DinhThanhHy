import React, {useState} from 'react';
import './Card.scss';
import i18n from "../../../../i18n";

interface Props {
    image: string;
    frontImage: string;
    title: string;
    desc: string;
    status: string;
}

const Card: React.FC<Props> = (props) => {
    const { image, frontImage, title, desc, status } = props;

    const initialValue = image
    const [img, setImg] = useState(initialValue);

    // const imgMouseOverHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    //     const img: HTMLImageElement = event.currentTarget;
    //     img.src = images.BG_GAME_DEV_HOVER
    // }
    //
    // const imgMouseOutHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    //     const img: HTMLImageElement = event.currentTarget;
    //     img.src = images.BG_GAME_DEV
    // }

    const handleMouseOver = () => {
        // if(val === 0) {
            setImg(frontImage);
        // }
    }

    const handleMouseOut = () => {
        setImg(initialValue)
    }

    return (
        <div className={`item item-${status}`} onMouseOver={() => handleMouseOver()} onMouseOut={handleMouseOut}>
            <div className="item-content" >
                <p className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <img src={img} alt="" />
                <p className="title-hide" dangerouslySetInnerHTML={{ __html: title }} />
                {
                    i18n.language === "en" ? (
                        <div className="desc en" dangerouslySetInnerHTML={{ __html: desc }}  />
                    ) : (
                        <div className="desc ko" dangerouslySetInnerHTML={{ __html: desc }}  />
                    )
                }

            </div>
        </div>
    );
};

export default Card;