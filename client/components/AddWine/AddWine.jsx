import React from 'react';
import styles from './AddWine.module.css'
//import CalendarSample from '../Calendar/Calendar.jsx';

class AddWine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      name: '',
      blend: '',
      vintage: '',
      place: '',
      price: '',
      alcohol: '',
      photo: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  handleInput(e) {
    var field = e.target.name;
    this.setState({
      [field]: e.target.value
    })
  }

  onImageChange(e){
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        photo: URL.createObjectURL(img)
      });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    var params = {
      brand: this.state.brand,
      name: this.state.name,
      blend: this.state.blend,
      vintage: Number(this.state.vintage),
      place: this.state.place,
      price: Number(this.state.price),
      alcohol: Number(this.state.alcohol),
      photo: this.state.photo
    }
    this.props.handleAddWine(params);
    this.props.handleClick();
  }

  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
          <div className={styles.closeButton} onClick={this.props.handleClick}>X</div>
          <div className={styles.title}>Add a Wine</div>
          <form id='formSubmit' className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.child}>
              <label> Brand
                <textarea className={styles.text} id="brand" type="text" name="brand" maxLength="60" placeholder="ex. J. Lohr" value={this.state.brand} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Name
                <textarea className={styles.text} id="name" type="text" name="name" maxLength="60" placeholder="ex. Pinot Noir" value={this.state.name} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label > Blend
                <textarea className={styles.text} id="blend" type="text" name="blend" maxLength="60" placeholder="ex. 100% Syrah" value={this.state.blend} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Vintage
                <textarea className={styles.text} id="name" type="number" name="vintage" maxLength="4" placeholder="Ex. 2018" value={this.state.vintage} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Price
                <textarea className={styles.text} id="price" type="number" name="price" maxLength="4" placeholder="ex. 35" value={this.state.price} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Place
                <textarea className={styles.text} id="place" type="text" name="place" maxLength="60" placeholder="ex. Napa Valley" value={this.state.place} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Alcohol Content
                <textarea className={styles.text} id="alcohol" type="number" name="alcohol" maxLength="5" placeholder="ex. 13.4" value={this.state.alcohol} onChange={this.handleInput} required></textarea>
              </label>
            </div>
            <div className={styles.child}>
              <label> Upload Photo
                <input  id="alcohol" type="file" name="photo"  accept="image/*" src={this.state.photo} onChange={this.onImageChange}></input>
              </label>
            </div>
            <div className={styles.child}>
              <button className={styles.submitButton} type="submit">Add Wine</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddWine;

