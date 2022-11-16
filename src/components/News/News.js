import './News.css';
import newsFirst from "../../images/News1.png";
import newsSecond from "../../images/News2.png";

function News() {
  return (
    <section className="news">
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
    </section>
  )
}

export default News;