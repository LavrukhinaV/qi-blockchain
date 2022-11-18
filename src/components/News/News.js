import './News.css';
import newsFirst from "../../images/News1.png";
import newsSecond from "../../images/News2.png";

function News() {
  return (
    <section className="news">
      <div className="news__checkbox">
        <div className="news__checkbox-item">
          <input className="news__checkbox-input" id="news" type="radio" name="radio" value="news" onChange={console.log('change')} defaultChecked/>
          <label className="news__checkbox-label" htmlFor="news">NEWS</label>
        </div>
        <div className="news__checkbox-item">
          <input className="news__checkbox-input" id="videos" type="radio" name="radio" value="videos" onChange={console.log('change')}/>
          <label className="news__checkbox-label" htmlFor="videos">VIDEOS</label>
        </div>
      </div>
      <div className="news__sliders">
        <button className="news__sliders-button news__sliders-button_left" type="button"></button>
        <ul className="news__list">
          <li className="news__item">
            <img className="news__image" src={newsFirst} alt="news"></img>
            <p className="news__data">12 April 2022</p>
            <h2 className="news__title">Citi Predicts 5 Billion Users</h2>
            <p className="news__text">Citi has predicted that the total market for the metaverse economy could grow to between 
            $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...</p>
          </li>
          <li className="news__item">
            <img className="news__image" src={newsSecond} alt="news"></img>
            <p className="news__data">12 April 2022</p>
            <h2 className="news__title">Blockchain’s biggest innovations are saving billions each year for the world’s largest companies</h2>
            <p className="news__text">Citi has predicted that the total market for the metaverse economy could grow to between 
            $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...</p>
          </li>
        </ul>
        <button className="news__sliders-button news__sliders-button_right" type="button"></button>
      </div>
    </section>
  )
}

export default News;