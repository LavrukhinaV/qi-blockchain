import classes from './styles.module.scss';

import rocksCenter from '../../images/Animation-image/rock-blockchain.png'
import rocksLeft from '../../images/Animation-image/rock-left.png'
import rocksRight from '../../images/Animation-image/rock-right.png'
import rocksBottom from '../../images/Animation-image/rock-bottom.png'


function RocksAnimation() {

  return (
    <>
      <div className={classes.rocksWrapper}>
        <div className={classes.rocksCenter}>
            <img src={rocksCenter} alt="rocks blockchain center" className={'spinner'}/>
        </div>
        <div className={classes.rocksLeft}>
            <img src={rocksLeft} alt="rocks blockchain center" className={'rotation'}/>
        </div>
        <div className={classes.rocksRight}>
            <img src={rocksRight} alt="rocks blockchain center" className={'rotation'}/>
        </div>
        <div className={classes.rocksBottom}>
            <img src={rocksBottom} alt="rocks blockchain center" className={'rotation'}/>
        </div>
      </div>
    </>
  );
}

export default RocksAnimation;