import React from 'react'
import axios from 'axios'
import WineList from '../WineList/WineList.jsx'
import Cellar from '../Cellar/Cellar.jsx'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import AddWine from '../AddWine/AddWine.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: []
    }
    this.handleMoved = this.handleMoved.bind(this);
  }

  componentDidMount() {
    axios.get('/wines')
    .then((res) => {
      console.log(res)
     this.setState({
       wines: res.data
     })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleMoved(id) {
    var currentWines = this.state.wines;
    currentWines.forEach((wine) => {
      if (wine.id === Number(id)) {
        wine.inCellar = true
      }
    })
    this.setState({
      wines: currentWines
    })
  }


  render() {
    var wineList = [];
    var cellar = [];
    var wines = this.state.wines
    wines.forEach((wine) => {
      console.log(wine)
      if (wine.inCellar !== undefined) {
        cellar.push(wine);
      } else {
        wineList.push(wine);
      }
    })


    return (
      <div className={styles.container}>
        <div className={styles.header}>Cellar Tracker</div>
        <div className={styles.columns}>
          <div className={styles.cellarContainer}>
            <div className={styles.cellar}>
              <Cellar wines={cellar} />
            </div>
          </div>
          <div className={styles.wineListContainer}>
            <div className={styles.buttons}>
              <button className={styles.button}>Add Wine</button>
              {/* <div>
                {this.state.clicked ? <AddWine /> : null}
              </div> */}
              <div className={styles.search}>
                <SearchBar wines={wineList} handleMoved={this.handleMoved}/>
              </div>
            </div>
            <div className={styles.wineList}>
              <WineList wines={wineList} handleMoved={this.handleMoved}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;