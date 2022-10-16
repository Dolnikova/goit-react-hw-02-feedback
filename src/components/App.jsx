import React, { Component } from 'react';
import { Styled, ButtonStyled } from './Feedback/FeedbackStyled';
import FeedbackStats from './Feedback/FeedbackStats';
// import Notification from 'Notify'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = evt => {
    const key = evt.target.dataset.type;
    const stateObj = {};
    stateObj[key] = this.state[key] + 1;
    this.setState(stateObj);
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Styled>
        <h2>Please leave feedback</h2>
        <ButtonStyled data-type="good" onClick={this.changeState}>
          Good
        </ButtonStyled>
        <ButtonStyled data-type="neutral" onClick={this.changeState}>
          Neural
        </ButtonStyled>
        <ButtonStyled data-type="bad" onClick={this.changeState}>
          Bad
        </ButtonStyled>
        <FeedbackStats good={good} neutral={neutral} bad={bad}></FeedbackStats>
        {/* {!good ? <Notification message="No feedback given" /> : ''} */}
      </Styled>
    );
  }
}
export default App;
