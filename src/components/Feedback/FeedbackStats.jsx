import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledStats } from './FeedbackStyled';
class FeedbackStats extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad } = this.props;
    let total = good + neutral + bad;
    return (
      <StyledStats>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {total ? Math.ceil((good * 100) / total) : 0}%</p>
      </StyledStats>
    );
  }
}
export default FeedbackStats;
