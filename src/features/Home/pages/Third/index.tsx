import React from 'react';
import './Third.scss'
import Card from "../../components/Card/Card";
import {images} from "../../../../constants/images";
import {useTranslation} from "react-i18next";

interface ThirdPageTranslateProps {
    gameDev: string;
    uiDes: string;
    si: string;
    gameMark: string;
}

const ThirdPage = () => {
    const { t } = useTranslation();
    const dataList =t("third", { returnObjects: true }) as ThirdPageTranslateProps;
    return (
        <div className='third-page'>
            <div className='third-page-container'>
                <div className='third-content'>
                    <Card
                        image={images.BG_GAME_DEV}
                        frontImage={images.BG_GAME_DEV_HOVER}
                        title="Game Development"
                        desc={dataList.gameDev}
                        status="first"
                    />
                    <Card
                        image={images.BG_UI_DES}
                        frontImage={images.BG_UI_DES_HOVER}
                        title="UI <br/>design"
                        desc={dataList.uiDes}
                        status="second"
                    />
                    <Card
                        image={images.BG_SI}
                        frontImage={images.BG_SI_HOVER}
                        title="SI"
                        desc={dataList.si}
                        status={"third"}
                    />
                    <Card
                        image={images.BG_GAME_MARK}
                        frontImage={images.BG_GAME_MARK_HOVER}
                        title="Game Marketing"
                        desc={dataList.gameMark}
                        status={"fourth"}
                    />

                </div>
            </div>
        </div>

    );
};

export default ThirdPage;