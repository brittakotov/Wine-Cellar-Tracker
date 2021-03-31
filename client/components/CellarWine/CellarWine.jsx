import React from 'react';
import styles from './CellarWine.module.css'

const CellarWine = (props) => {

  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.wine.photo}></img>
      <div>{props.wine.vintage} {props.wine.name}</div>
      <div>{props.wine.place}</div>
      <div>Blend: {props.wine.blend}</div>
      <div>Price: ${props.wine.price}</div>
      <div>Alcohol: {props.wine.alcohol} %</div>
    </div>
  )
}

export default CellarWine;