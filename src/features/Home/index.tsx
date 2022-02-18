import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import FirstPage from "./pages/First";
import SecondPage from "./pages/Second";
import ThirdPage from "./pages/Third";
import FourthPage from "./pages/Fourth";
import FifthPage from "./pages/Fifth";
import onLeave from "../../amimation/onLeave";
import afterLoad from "../../amimation/afterLoad";

const Home = () => {

    const fullpageOption = {
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"]
    };

    return (
        <ReactFullpage
            scrollingSpeed={700}
            {...fullpageOption}
            navigation={true}
            navigationPosition={'right'}
            normalScrollElements='.item-history, .desc'
            onLeave={onLeave}
            afterLoad={afterLoad}
            render={() => (
                <>
                    <div className='section'>
                        <FirstPage />
                    </div>
                    <div className='section'>
                        <SecondPage />
                    </div>
                    <div className='section'>
                        <ThirdPage />
                    </div>
                    <div className='section'>
                        <FourthPage />
                    </div>
                    <div className='section'>
                        <FifthPage />
                    </div>
                </>
            )}

        />
    );
};

export default Home;