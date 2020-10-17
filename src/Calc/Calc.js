import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0
    }
    this.calcRate = this.calcRate.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate }
  }

  calcRate(e) {
    e.preventDefault()
    let elements = e.target.elements
    let currencyValue = elements['currency-value'].value
    let currencyType = elements['currency-type'].value
    this.setState({ result: (currencyValue / this.state.rate[currencyType]) })
  }


  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="currency-value" />
              <select id="" name="currency-type">
                {Object.keys(this.props.rate).map((key) => {
                  return <option key={key} value={key}>{key}</option>
                })}
              </select>
              <input type="submit" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>{this.state.result.toFixed(2)} USD</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Calc;
