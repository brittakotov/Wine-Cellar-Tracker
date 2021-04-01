import React from 'react';
import styles from './CellarWine.module.css'
import DetailView from '../DetailView/DetailView.jsx'

class CellarWine extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    }
    this.selected = this.selected.bind(this);
  }

  selected(e) {
    e.preventDefault();
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const {wine} = this.props;
    return (
      <div className={styles.container} onClick={this.selected}>
        <img className={styles.image} src={wine.photo}></img>
        <div>{wine.vintage} {wine.name}</div>
        <div>{wine.brand}</div>
        {this.state.selected ? <DetailView wine={wine} selected={this.selected}/> : null}
      </div>
    )
  }
}

export default CellarWine;