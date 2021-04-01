import React from 'react';
import styles from './AddWine.module.css'
//import CalendarSample from '../Calendar/Calendar.jsx';

class AddWine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
          <div className={styles.closeButton} onClick={this.props.handleClick}>X</div>
          <div className={styles.title}>Add a Wine</div>
          <form id='formSubmit' className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.child}>
                  <label>
                    Vintage
                    <textarea className={styles.nickname} id="name" type="text" name="name" maxLength="60" placeholder="Example: jackson11!" value={this.state.name} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
                <div className={styles.child}>
                  <label>
                    Price
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
                <div className={styles.child}>
                  <label>
                    Brand
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
                <div className={styles.child}>
                  <label>
                    Name
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
                <div className={styles.child}>
                  <label>
                    Blend
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
                <div className={styles.child}>
                  <label>
                    Alcohol Content
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
              <div className={styles.footer}>
                <button className={styles.submitButton}>Add </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddWine;

