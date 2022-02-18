import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Fourth.scss';

interface FourthPageProps {
    history: {
        id: number;
        title: number;
        children: {
            id: number;
            title: string;
            subTitle: string;
        }[]


    }[]

}

const FourthPage = () => {

    const { t } = useTranslation();
    const dataList = t('fourth', { returnObjects: true }) as any;

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            }
        ]
    };

    const renderList = dataList.history.map((item: any) => (
        <div className={`item-history item-${item.title}`} key={item.id}>
            <p className={`title title-${item.title}`}>{item.title}</p>

            <div className="item-box">
                {
                    item.children.map((child: any) => (
                        <div className="item-box-item" key={child.id}>
                            <h2 dangerouslySetInnerHTML={{__html: child.title}} />
                            <p>{child.subTitle}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ))

    return (
        <div className='fourth-page'>
            <div className='fourth-page-container'>
                <h1 className='fourth-title'>History</h1>
                <div className='list-history'>
                    <Slider {...settings}>
                        {renderList}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;