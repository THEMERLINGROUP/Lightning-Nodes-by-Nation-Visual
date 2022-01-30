import React, { Component } from 'react'
import './Stats.css';
import PropTypes from 'prop-types';
export default class Stats extends Component {
  constructor(props) {
      super(props);
      this.state = {
          activity:this.props.activity
      }
  }
  componentDidMount() {
      const callback = () => {
      const randomPercentage = 0.9999 + Math.random() / 0.01;
      this.setState(function(oldState) {
          return {
          activity: oldState.activity * randomPercentage
          };
      }) 
    }

  setInterval(callback, 10000);
}
    render() {
    return (
        <tr class="stats-row">
        <td>{this.props.rank}</td>
        <td>{this.props.country}</td>
        <td>{this.props.nodes}</td>
      </tr>
    );
  }
}
Stats.propTypes = {
rank: PropTypes.number.isRequired,
country: PropTypes.string.isRequired,
nodes: PropTypes.number.isRequired,
}