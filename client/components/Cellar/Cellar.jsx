import React from 'react';
import CellarWine from '../CellarWine/CellarWine.jsx'
import styles from './Cellar.module.css'

const Cellar = (props) => {

  return (
    <div>
      <div className={styles.heading}>My Cellar</div>
      <div className={styles.cellarContainer}>
        {props.wines.map(wine => {
          return (
          <div>
            <CellarWine wine={wine}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cellar;