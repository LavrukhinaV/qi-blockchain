import React from 'react';
import TabSelect from "./tabSelect";
import SliderBlock from "./sliderBlock";
import classes from './styles.module.scss';
import useScreenWidth from "../../utils/useScreenWidth";
import SliderBlockMobile from "./sliderBlockMobile";
import {useRecoilValue} from "recoil";
import {newsTabState} from "../../store/newTab";
import SliderVideoBlock from "./sliderVideoBlock";
import SliderVideoBlockMobile from "./sliderVideoBlockMobile";

const SliderSection = () => {
    const screen = useScreenWidth();

    const activeTab = useRecoilValue(newsTabState);

    return (
    <div>
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <TabSelect/>
                {screen.width > 1025 ?
                    activeTab === 'news' ?
                    <SliderBlock/>
                    :
                    <SliderVideoBlock/>
                    :
                    activeTab === 'news' ?
                    <SliderBlockMobile/>
                    :
                    <SliderVideoBlockMobile/>
                }
            </section>
        </div>
    </div>
    );
};

export default SliderSection;