import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0, head: 0, tail: 0}

  onButtonToss = () => {
    let {head, tail} = this.state
    const {count} = this.state
    if (count === 0) {
      head += 1 //head is a state key variable directly changed without using the setStatemethod how it will be possible ?
    } else {
      tail += 1 //even tail also same
    }

    this.setState({
      count: Math.floor(Math.random() * 2),
      head,
      tail,
    })
  }

  render() {
    const {count, head, tail} = this.state
    const image =
      count === 0 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="headimage"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="headimage"
        />
      )

    return (
      <div className="background-details">
        <div className="white-container">
          <h1 className="firstheadingone">Coin Toss Game</h1>
          <p className="firstparagraph">Heads(or)Tails</p>
          {image}
          <br />
          <button
            type="button"
            className="buttonrelated"
            onClick={this.onButtonToss}
          >
            Toss Coin
          </button>
          <div className="finalcontainer">
            <p className="paragraph">Total:{head + tail}</p>
            <p className="paragraph">Heads:{head}</p>
            <p className="paragraph">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
