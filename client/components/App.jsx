import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wines: []
    }
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


  render() {
    var photo = [];
    if (this.state.wines.length > 0) {
      photo = this.state.wines[1].photo
    }
    return (
      <div>
        <img src={photo}/>
      </div>
    )
  }
}

export default App;



// {/* <RelatedItems productId={this.state.productId} viewNewProduct={this.viewNewProduct}/>
//         <Questions productId={this.state.productId} />
//         <Reviews productId={this.state.productId} /> */}