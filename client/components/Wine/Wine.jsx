import React from 'react';
import styles from './Wine.module.css'

class Wine extends React.Component {
  constructor() {
    super();
    this.moveWine = this.moveWine.bind(this);
  }

  moveWine(e) {
    e.preventDefault();
    var id = e.target.getAttribute('id');
    this.props.handleMoved(id);
  }

  render() {
    const {wine} = this.props;

    return (
      <div className={styles.container} id={wine.id} onClick={this.moveWine}>
        <div className={styles.vintage} id={wine.id}>{wine.vintage}</div>
        <div className={styles.brand} id={wine.id}>{wine.brand}</div>
        <div className={styles.name} id={wine.id}>{wine.name}</div>
      </div>
    )
  }
}

export default Wine;

