import React from 'react';
import styles from './AddWine.module.css'

class AddWine extends React.Component {
  constructor() {
    super();
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
    handleAddWine(params);
    handleClick();
  }

  render() {
    console.log(this.state)
    const {handleAddWine, handleClick} = this.props;
    const inputs = ['brand', 'name', 'blend', 'vintage', 'price', 'place', 'alcohol']
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
          <div className={styles.closeButton} onClick={handleClick}>X</div>
          <div className={styles.title}>Add a Wine</div>
          <form id='formSubmit' className={styles.form} onSubmit={this.handleSubmit}>
            {inputs.map((input) => {
              return (
                <div className={styles.child}>
                  <label> {input}:
                    <textarea className={styles.text} type="text" name={input} maxLength="60" value={this.state.input} onChange={this.handleInput} required></textarea>
                  </label>
                </div>
              )
            })}
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

