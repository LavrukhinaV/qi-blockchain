import "./HistoryTableCell.css";

function HistoryTableCell({element}) {
  return (
    <li className="history-table__cell">
      <div className="history-table__cell-container">
        <h2 className="history-table__cell-title">{element.title}</h2>
        <div className="history-table__cell-arrow"></div>
      </div>
      <p className="history-table__cell-value">{element.value}</p>
      <p className="history-table__cell-date">{element.date}</p>
    </li>
  )
}

export default HistoryTableCell;