import React from 'react';
import CellarWine from '../CellarWine/CellarWine.jsx'
import styles from './Cellar.module.css'

const Cellar = ({wines}) => {

  return (
    <div>
      <div className={styles.heading}>My Cellar</div>
      <div className={styles.cellarContainer}>
        {wines.map((wine, i) => {
          return (
          <div>
            <CellarWine wine={wine} key={i}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cellar;