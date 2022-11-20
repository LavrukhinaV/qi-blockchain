import "./HistoryTable.css";
import useScreenWidth from "../../utils/useScreenWidth";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import HistoryTableCell from "../HistoryTableCell/HistoryTableCell";
import { useState, useEffect } from 'react';

import {
  ISSUANCE_HISTORY_ELEMENTS,
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_MIDLE,
  DESKTOP_NUMBER_HISTORY_ELEMENTS,
  MIDLE_NUMBER_HISTORY_ELEMENTS,
  MOBILE_NUMBER_HISTORY_ELEMENTS,
  LOAD_MORE_MOBILE
} from "../../constant/constants";

function HistoryTable() {
  const elements = ISSUANCE_HISTORY_ELEMENTS;
  const size = useScreenWidth();

  const [numberElements, setNumberElemets] = useState();

  const buttonClassName = (
    `${(elements.length>numberElements) ? 'load-more-button load-more-button_page_history' : 'load-more-button_disable' }`
    )

  useEffect(() => {
    handleWindowResize();
  }, [size]);

  function handleWindowResize () {
    if(size.width > SCREEN_SIZE_DESKTOP) {
      setNumberElemets(DESKTOP_NUMBER_HISTORY_ELEMENTS)
    }
    else if (size.width > SCREEN_SIZE_MIDLE) {
      setNumberElemets(MIDLE_NUMBER_HISTORY_ELEMENTS)
    } else {
    setNumberElemets(MOBILE_NUMBER_HISTORY_ELEMENTS)}
  }

  function handleClick() {
      setNumberElemets(numberElements+LOAD_MORE_MOBILE)
  }

  return (
    <>
    <ul className="history-table">
      {elements.slice(0, numberElements).map((element) => (
        <HistoryTableCell element={element} />
      ))}
    </ul>
    <LoadMoreButton buttonClassName={buttonClassName} onClick={handleClick}/>
    </>
  );
}

export default HistoryTable;