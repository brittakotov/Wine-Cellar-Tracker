import React from 'react';
import styles from './DetailView.module.css'
import axios from 'axios'

class DetailView extends React.Component {
  constructor() {
    super();
    this.state = {
      pairings: ''
    }
  }

  componentDidMount() {
    axios.get('/pairings/', {
      params: {
        wineName: this.props.wine.searchName
      }
    })
    .then((res) => {
      this.setState({
        pairings: res.data.text
      })
      if (!res.data.text) {
        this.setState({
          pairings: 'N/A'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const {wine, selected} = this.props;
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
        <div className={styles.closeButton} onClick={selected}>X</div>
        <div className={styles.brand}>{wine.brand}</div>
        <div className={styles.vintage}>{wine.vintage} {wine.name}</div>
        <div className={styles.columns}>
          <img className={styles.image} src={wine.photo}></img>
          <div className={styles.info}>
            <div className={styles.appContainer}>
              <div className={styles.app}>Appellation:</div>
              <div>{wine.place}</div>
            </div>
            <div className={styles.blendContainer}>
              <div className={styles.blendTitle}>Blend:</div>
              <div className={styles.blend}>{wine.blend}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>Price:</div>
              <div>${wine.price}</div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>Alcohol Content:</div>
              <div>{wine.alcohol}%</div>
            </div>
            <div className={styles.pairingsContainer}>
              <div className={styles.pairingsTitle}>Food Pairings:</div>
              <div className={styles.pairings}>{this.state.pairings}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default DetailView;

