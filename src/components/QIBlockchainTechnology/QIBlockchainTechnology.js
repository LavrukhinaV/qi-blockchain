import './QIBlockchainTechnology.css';
import RocksAnimation from "../RocksAnimation/RocksAnimation"

function QIBlockchainTechnology() {
  return (
    <section className="technology">
      <h2 className="technology__title"><span className="technology__title_pink">Utilize QI </span>Blockchain Technology</h2>
      <div className="technology__text-container">
        <p className="technology__text technology__text_paragraph_first">
          Qi proposed to utilize blockchain technology not only for maintaining a decentralized payment network but also for storing computer code that can be used to power tamper-proof decentralized financial contracts and applications.
        </p>
        <p className="technology__text technology__text_paragraph_second">
        Blockchain helps in the verification and traceability of multi-step transactions needing verification and traceability. It can provide secure transactions, reduce compliance costs, and speed up data transfer processing. Blockchain technology can help contract management and audit the origin of a product.
        </p>
        <p className="technology__text technology__text_paragraph_third">
        If your goal is to provide the highest security level of data/transactions. A shared database is required. There is no trust between future network participants (employees, organizations, customers)</p>
      </div>
      <div className="technology__image">
        <RocksAnimation />
      </div>
    </section>
  )
}

export default QIBlockchainTechnology;