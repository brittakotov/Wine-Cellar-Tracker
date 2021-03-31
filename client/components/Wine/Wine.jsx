import React from 'react';
import styles from './Wine.module.css'

class Wine extends React.Component {
  constructor(props) {
    super(props);
    this.moveWine = this.moveWine.bind(this);
  }

  moveWine(e) {
   e.preventDefault();
   var id = e.target.getAttribute('id');
   this.props.handleMoved(id)
  }

  render() {
    return (
      <div className={styles.container} id={this.props.wine.id} onClick={this.moveWine}>
        <div className={styles.vintage} id={this.props.wine.id}>{this.props.wine.vintage}</div>
        <div className={styles.brand} id={this.props.wine.id}>{this.props.wine.brand}</div>
        <div className={styles.name} id={this.props.wine.id}>{this.props.wine.name}</div>
      </div>
    )
  }
}

export default Wine;