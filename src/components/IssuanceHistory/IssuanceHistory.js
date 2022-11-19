import { useHistory } from 'react-router-dom';
import "./IssuanceHistory.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HistoryTable from "../HistoryTable/HistoryTable";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import useScreenWidth from "../../utils/useScreenWidth";
import SliderSection from "../SliderSection"

function IssuanceHistory() {
  const history = useHistory();
  const size = useScreenWidth();

  return (
    <div className="issuance-history">
      <Header />
      <div className="issuance-history__content">
        <button className="issuance-history__button" onClick={() => history.goBack()}>
          <div className="issuance-history__button-arrow"></div>
          <p className="issuance-history__button-text">Back</p>
        </button>
        <h1 className="issuance-history__title">Issuance History</h1>
        <p className="issuance-history__subtitle">QiUSD transaction records of the issuance contract, 
        authorized contract, and circulation account (PSM transaction records are not included)</p>
        <HistoryTable />
        {size.width<576 ? <LoadMoreButton /> : ""}
      </div>
      {size.width<576 ? <SliderSection /> : ""}
      <Footer />
    </div>
  );
}

export default IssuanceHistory;