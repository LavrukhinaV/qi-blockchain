import './Transparency.css';
import { NavLink } from 'react-router-dom';
import {ROUTES} from "../../constant/index";


function Transparency() {
  return (
    <section className="transparency">
      <div className="transparency__container transparency__container_position_top">
        <h2 className="transparency__title">Transparency</h2>
        <ul className="transparency__table transparency__table_position_top">
          <li className="transparency__table__cell">
            <h3 className="transparency__table-cell-title title_size_big">Total QiUSD Supply</h3>
            <p className="transparency__table-cell-subtitle subtitle_size_big">$ 725,332,0</p>
          </li>
          <li className="transparency__table__cell">
            <h3 className="transparency__table-cell-title">Authorized</h3>
            <p className="transparency__table-cell-subtitle">$ 2,000,000,000</p>
          </li>
          <li className="transparency__table__cell">
            <h3 className="transparency__table-cell-title">Authorized but not issued</h3>
            <p className="transparency__table-cell-subtitle">$ 725,332,043</p>
          </li>
        </ul>
        <div className="diagram">
          <ul className="diagram__values">
            <li className="diagram__value">2kk</li>
            <li className="diagram__value">1,5kk</li>
            <li className="diagram__value">1kk</li>
            <li className="diagram__value">0.5kk</li>
            <li className="diagram__value">0</li>
          </ul>
          <div className="diagram__graph"></div>
          <div className="diagram__links">
            <NavLink to="/" className="diagram__link link_color_pink">
              <span className="diagram__link-img diagram__link-img_type_gitdiff"></span>
              <p className="diagram__link-text">Issuance Process</p>
            </NavLink>
            <NavLink to={ROUTES.ISSUANCE_HISTORY} className="diagram__link link_color_pink">
              <span className="diagram__link-img diagram__link-img_type_clock"></span>
              <p className="diagram__link-text">Issuance History</p>
            </NavLink>
            <NavLink to="/" className="diagram__link link_color_pink">
              <span className="diagram__link-img diagram__link-img_type_brackets"></span>
              <p className="diagram__link-text">Token Addresses</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="transparency__container transparency__container_position_bottom">
        <h3 className="transparency__total title_size_big">Total Collateral</h3>
        <p className="transparency__total-value subtitle_size_big">$ 1,498,504,165</p>
        <ul className="transparency__table transparency__table_position_bottom">
          <li className="transparency__table__cell transparency__table__cell_position_bottom">
            <h3 className="transparency__table-cell-title">TRX</h3>
            <p className="transparency__table-cell-subtitle">10,911,994,074</p>
          </li>
          <li className="transparency__table__cell transparency__table__cell_position_bottom">
            <h3 className="transparency__table-cell-title">BTC</h3>
            <p className="transparency__table-cell-subtitle">14,040.6</p>
          </li>
          <li className="transparency__table__cell transparency__table__cell_position_bottom">
            <h3 className="transparency__table-cell-title">USDT</h3>
            <p className="transparency__table-cell-subtitle">14,040.6</p>
          </li>
          <li className="transparency__table__cell transparency__table__cell_position_bottom">
            <h3 className="transparency__table-cell-title">USDJ</h3>
            <p className="transparency__table-cell-subtitle">14,040.6</p>
          </li>
          <li className="transparency__table__cell transparency__table__cell_position_bottom">
            <h3 className="transparency__table-cell-title">TUSD</h3>
            <p className="transparency__table-cell-subtitle">14,040.6</p>
          </li>
        </ul>
        <NavLink to="/" className="transparency__link link_color_pink">
          <span className="transparency__link-img"></span>
          <p className="transparency__link-text">Collateral Details</p>
        </NavLink>
        <div className="transparency__ratio">
          <h3 className="transparency__ratio-title">Collat. Ratio</h3>
          <p className="transparency__ratio-value">206.6%</p>
          <p className="transparency__ratio-text">The stability and security of QiUSD 
          are ensured by the over-collateralization of multiple mainstream cryptocurrencies.</p>
        </div>
      </div>
    </section>
  )
}

export default Transparency;