import './Ecosystem.css';
import Switch from "../Switch/Switch";
import Blockchain from "../Blockchain/Blockchain";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton"

function Ecosystem() {
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
            <input className="ecosystem__filter-input" id="news" type="radio" name="radio" value="Sort by" onChange={console.log('change')} defaultChecked/>
            <label className="ecosystem__filter-label" htmlFor="news">Sort by</label>
          </div>
          <div className="ecosystem__filter-item">
            <input className="ecosystem__filter-input" id="videos" type="radio" name="radio" value="Api" onChange={console.log('change')}/>
            <label className="ecosystem__filter-label" htmlFor="videos">Api</label>
          </div>
        </div>
      </div>
      <ul className="ecosystem__table">
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
        <Blockchain />
      </ul>
      <LoadMoreButton />
    </section>
  )
}

export default Ecosystem;