import './Switch.css';

function Switch() {
  return (
    <div className="switch">
      <div className="switch__item">
        <input className="switch__input" id="fid-1" type="radio" name="radio" value="All" onChange={console.log('change')} defaultChecked/>
        <label className="switch__label" htmlFor="fid-1">All</label>
      </div>
      <div className="switch__item">
        <input className="switch__input" id="fid-2" type="radio" name="radio" value="TRON" onChange={console.log('change')}/>
        <label className="switch__label" htmlFor="fid-2">TRON</label>
      </div>
      <div className="switch__item">
        <input className="switch__input" id="fid-3" type="radio" name="radio" value="Etherium" onChange={console.log('change')}/>
        <label className="switch__label" htmlFor="fid-3">Etherium</label>
      </div>
      <div className="switch__item">
        <input className="switch__input" id="fid-4" type="radio" name="radio" value="BNB Chain" onChange={console.log('change')}/>
        <label className="switch__label" htmlFor="fid-4">BNB Chain</label>
      </div>
    </div>
  )
}

export default Switch;