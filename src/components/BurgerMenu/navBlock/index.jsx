import React from 'react';
import classes from './styles.module.scss';
import {Link} from "react-router-dom";
// import {ROUTES} from "constant";

const NavBlock = ({stateChanger}) => {
    return (
        <div className={classes.wrapper}>
            <a href={'https://docs.qiblockchain.online/'} className={classes.link} rel="noopener noreferrer" target="_blank">
                Docs
            </a>
            <Link to="/" className={classes.link} onClick={() => stateChanger()}>
                FAQ
            </Link>
            <Link to="/" className={classes.link} onClick={() => stateChanger()}>
                Terms of Service
            </Link>
        </div>
    );
};

export default NavBlock;