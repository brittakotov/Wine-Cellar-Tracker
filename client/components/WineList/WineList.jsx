import React from 'react';
import Wine from '../Wine/Wine.jsx'
import styles from './WineList.module.css'

const WineList = ({wines, handleMoved}) => {

  return (
    <div>
      <div className={styles.header}>Wine List:</div>
      {wines.map((wine, i) => {
        return (
         <div>
           <Wine  wine={wine} wines={wines} handleMoved={handleMoved} key={i}/>
         </div>
        )
      })}
    </div>
  )
}

export default WineList;