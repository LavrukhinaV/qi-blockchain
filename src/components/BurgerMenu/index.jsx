import React from 'react';
import {useRecoilState} from "recoil";
import NavBlock from "./navBlock";
import MentionLinks from "../MentionLinks/MentionLinks";

import {burgerState} from "../../store/burger";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Copyright from "../Copyright/Copyright"
import classes from './styles.module.scss';
import {ReactComponent as BurgerClosedIcon} from "../../images/supporting-elements/MobileMenuButton.svg";
import {ReactComponent as BurgerOpenedIcon} from "../../images/supporting-elements/MobileMenuButtonClose.svg";

const BurgerMenu = () => {
    const [isActive, setIsActive] = useRecoilState(burgerState);

    return (
        <div className={classes.wrapper}>
            <div onClick={() => setIsActive(!isActive)} className={classes.iconwrapper}>
                {isActive?
                    <BurgerOpenedIcon/>
                    :
                    <BurgerClosedIcon/>
                }
            </div>
            {isActive &&
                <div className={classes.menu}>
                    <NavBlock stateChanger={setIsActive}/>
                    <div className={classes.footer}>
                        <MentionLinks className="mention-links mention-links_footer-mobile"/>
                        <SocialNetworks/>
                        <Copyright />
                    </div>
                </div>
            }
        </div>
    );
};

export default BurgerMenu;