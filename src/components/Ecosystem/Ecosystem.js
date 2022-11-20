import './Ecosystem.css';
import { useState, useEffect } from 'react';
import Switch from "../Switch/Switch";
import Blockchain from "../Blockchain/Blockchain";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import useScreenWidth from "../../utils/useScreenWidth";

import {
  ISSUANCE_ECOSYSTEM_ELEMENTS,
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_MIDLE,
  DESKTOP_NUMBER_ECOSYSTEM_ELEMENTS,
  MIDLE_NUMBER_ECOSYSTEM_ELEMENTS,
  MOBILE_NUMBER_ECOSYSTEM_ELEMENTS,
  LOAD_MORE_DESKTOP,
  LOAD_MORE_MIDLE,
  LOAD_MORE_MOBILE
} from "../../constant/constants";

function Ecosystem() {
  const elements = ISSUANCE_ECOSYSTEM_ELEMENTS;

  const [numberElemets, setNumberElemets] = useState();
  const buttonClassName = (
    `${(elements.length>numberElemets) ? 'load-more-button' : 'load-more-button_disable' }`
    )


  const size =  useScreenWidth();
  useEffect(() => {
    handleWindowResize();
  }, [size]);

  function handleWindowResize () {
    if(size.width > SCREEN_SIZE_DESKTOP) {
      setNumberElemets(DESKTOP_NUMBER_ECOSYSTEM_ELEMENTS)
    }
    else if (size.width > SCREEN_SIZE_MIDLE) {
      setNumberElemets(MIDLE_NUMBER_ECOSYSTEM_ELEMENTS)
    } else {
    setNumberElemets(MOBILE_NUMBER_ECOSYSTEM_ELEMENTS)}
  };

  function handleClick() {
    if(size.width > SCREEN_SIZE_DESKTOP) {
      setNumberElemets(numberElemets+LOAD_MORE_DESKTOP)
    } else if(size.width > SCREEN_SIZE_MIDLE) {
      setNumberElemets(numberElemets+LOAD_MORE_MIDLE)}
    else {
    setNumberElemets(numberElemets+LOAD_MORE_MOBILE)}
  };

  return (
    <section className="ecosystem">
      <h2 className="ecosystem__title">Ecosystem</h2>
      <h3 className="ecosystem__subtitle">
        QiUSD Staking
        <span className="ecosystem__subtitle_pink"> APY 30%+</span>
      </h3>
      <div className="ecosystem__switch">
        <Switch />
        <div className="ecosystem__filter">
          <div className="ecosystem__filter-item">
            <input className="ecosystem__filter-input" id="news" type="radio" name="filter" value="Sort by" defaultChecked/>
            <label className="ecosystem__filter-label" htmlFor="news">Sort by</label>
          </div>
          <div className="ecosystem__filter-item">
            <input className="ecosystem__filter-input" id="videos" type="radio" name="filter" value="Api" />
            <label className="ecosystem__filter-label" htmlFor="videos">Api</label>
          </div>
        </div>
      </div>
      <ul className="ecosystem__table">
        {elements.slice(0, numberElemets).map((element) => (
          <Blockchain element={element} />
        ))}
      </ul>
      <LoadMoreButton onClick={handleClick} buttonClassName={buttonClassName}/>
    </section>
  )
}

export default Ecosystem;