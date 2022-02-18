import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Second.scss';


interface ImageListProps {
    id: number;
    source: string;
}


const SecondPage = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // centerMode: true,
        arrows: false,
        speed: 1,
        infinite: true,
        autoplaySpeed: 1000,
        centerPadding: 0,
        autoplay: true,
        cssEase: "linear"

    }

    const imageList = [
        {
            "id": 1,
            "source": "console-img-1.png"
        },
        {
            "id": 2,
            "source": "console-img-2.png"
        },
        {
            "id": 3,
            "source": "console-img-3.png"
        },
        {
            "id": 4,
            "source": "console-img-4.png"
        },
        {
            "id": 5,
            "source": "console-img-5.png"
        },
        {
            "id": 6,
            "source": "console-img-6.png"
        }

    ]

    const renderImageList = imageList.map((item: ImageListProps) => (
        <div className='box-image'>
            <img style={{width: "100%"}} src={require(`../../../../assets/images/${item.source}`)} alt="hihi" />
        </div>
    ))

    return (
        <div className='second-page'>
            <div className='second-container'>
                <div className='second-full-text'>
                    Creative, <br/>
                    Fun and- <br/>
                    Enjoyable <br/>
                    work <br/>
                    Impressive <br/>
                </div>
                <div className='list-image'>
                    <Slider {...settings}>
                        {renderImageList}
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default SecondPage;