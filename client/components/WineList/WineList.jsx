import React from 'react';
import Wine from '../Wine/Wine.jsx'
import styles from './WineList.module.css'

const WineList = (props) => {

  return (
    <div>
      <div className={styles.header}>Wine List:</div>
      {props.wines.map(wine => {
        return (
         <div>
           <Wine wine={wine} wines={props.wines} handleMoved={props.handleMoved}/>
         </div>
        )
      })}
    </div>
  )
}

export default WineList;