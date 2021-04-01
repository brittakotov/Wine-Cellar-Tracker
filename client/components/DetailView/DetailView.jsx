import React from 'react';
import styles from './DetailView.module.css'
import axios from 'axios'
//import CalendarSample from '../Calendar/Calendar.jsx';

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairings: 'Sample text as a placeholder to test the pairings. maybe add a bit more text to have more to say.'
    }
  }

  // componentDidMount() {
  //   axios.get('/pairings/', {
  //     params: {
  //       wineName: this.props.wine.searchName
  //     }
  //   })
  //   .then((res) => {
  //     this.setState({
  //       pairings: res.data.text
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
        <div className={styles.closeButton} onClick={this.props.selected}>X</div>
        <div className={styles.brand}>{this.props.wine.brand}</div>
        <div className={styles.vintage}>{this.props.wine.vintage} {this.props.wine.name}</div>
        <div className={styles.columns}>
          <img className={styles.image} src={this.props.wine.photo}></img>
          <div className={styles.info}>
            <div className={styles.appContainer}>
              <div className={styles.app}>Appellation:</div>
              <div>{this.props.wine.place}</div>
            </div>
            <div className={styles.blendContainer}>
              <div className={styles.blendTitle}>Blend:</div>
              <div className={styles.blend}>{this.props.wine.blend}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>Price:</div>
              <div>${this.props.wine.price}</div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>Alcohol Content:</div>
              <div>{this.props.wine.alcohol}%</div>
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

