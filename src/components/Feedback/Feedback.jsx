import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClick = ({ target: { name } }) => {
    this.setState(prevState =>       
      ({ [name]: prevState[name] + 1 })      
    );
  
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return '0'
    }
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }


  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <button type="button" name="good" onClick={this.hendleClick}>
          good
        </button>
        <button type="button" name="neutral" onClick={this.hendleClick}>
          neutral
        </button>
        <button type="button" name="bad" onClick={this.hendleClick}>
          bad
        </button>
        <div>
          <h3>Statistics</h3>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: { this.countPositiveFeedbackPercentage()}</p>
        </div>
      </div>
    );
  }
}
