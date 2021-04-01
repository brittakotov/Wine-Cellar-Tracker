import React from 'react';
import styles from './CellarWine.module.css'
import DetailView from '../DetailView/DetailView.jsx'

class CellarWine extends React.Component {
  constructor(props) {
    super(props);
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
    console.log(this.state.selected)
    return (
      <div className={styles.container} onClick={this.selected}>
        <img className={styles.image} src={this.props.wine.photo}></img>
        <div>{this.props.wine.vintage} {this.props.wine.name}</div>
        <div>{this.props.wine.brand}</div>
        {this.state.selected ? <DetailView wine={this.props.wine} selected={this.selected}/> : null}
      </div>
    )
  }
}

export default CellarWine;