import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'

class Rate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      currencyRate: {}
    }
    this.currency = ['USD', 'EUR', 'RUB', 'CAD']
    this.getRate = this.getRate.bind(this)
  }

  componentDidMount() {
    this.getRate()
  }

  getRate() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({ date: data.date })
        let result = {}
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]]
        }
        this.setState({ currencyRate: result })
      })
  }

  render() {
    return (
      <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.entries(this.state.currencyRate).map(([key, value]) => {
            return <div className="block flex-item" key={key}>
              <div className="currency-name">{key}</div>
              <div className="currency-in">{value.toFixed(2)}*</div>
              * Можно купить за 1 USD
            </div>
          })}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }

}

export default Rate;
