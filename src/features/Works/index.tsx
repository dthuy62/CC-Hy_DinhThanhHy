import React, { useState, useEffect } from 'react';
import MenuTab from "./components/MenuTab";
import './Works.scss';
import { Work } from '../../utils/interface';
import {useTranslation} from "react-i18next";
import WorkCollection from "./components/WorkCollection";
import PopupDetail from "./components/PopupDetail";
import Footer from "./components/Footer";

const menus = [
    "ALL",
    "SHOWREEL",
    "COMMERCIAL",
    "MOTION",
    "OPENING TITLE",
    "MV",
    "ARTWORK",
    "DESIGN",
];

const Works = () => {
    const {t} = useTranslation();
    const data = t("works", {returnObjects: true}) as Work[];

    const [menuType, setMenuType] = useState(menus[0]);
    const [filterData, setFilterData] = useState(data);
    const [openPopup, setOpenPopup] = useState(false);
    const [idItem, setIdItem] = useState();
    const [item, setItem] = useState(data[0]);

    useEffect(() => {
        (() => {
            if (menuType === menus[0]) {
                setFilterData(data);
            } else {
                const newData = data.filter((val: any) => val.desc === menuType);
                setFilterData(newData);
            }
        })();

        (() => {
            if (idItem) {
                const newItem = data.filter((val: any) => val.id === idItem);
                setItem(newItem[0]);
            }
        })();
    }, [menuType, idItem, data]);

    return (
        <>
            <div className='wrapper-page padding'>
                <div className='works_'>
                    <div className='logo-title'>
                        <div className='title'>
                            <p className='bold'>WORKS</p>
                        </div>
                    </div>

                    <div className='card-all-wrapper'>
                        <MenuTab
                            menus={menus}
                            setMenuType={setMenuType}
                            menuType={menuType}
                        />
                        <WorkCollection
                            data={filterData}
                            setIdItem={setIdItem}
                            setOpenPopup={setOpenPopup}
                        />

                    </div>
                    <Footer />
                </div>
            </div>
            {openPopup && <PopupDetail data={item} setOpenPopup={setOpenPopup} />}
        </>

    );
};

export default Works;