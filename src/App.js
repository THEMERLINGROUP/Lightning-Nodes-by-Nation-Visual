import './App.css';
import btc from './btc.png';
import Stats from './Stats';
import React, { Component } from 'react';
class App extends React.Component {
//Node activity in random percentage (Fictional stat)
constructor(props) {
  super(props);
  this.state = {
    nodeInfo: [
      {
        rank:1,
        country:'USA',
        nodes:1176
      },
      {
        rank:2,
        country:'Germany',
        nodes:1729
      },
      {
        rank:3,
        country:"France",
        nodes:547
      },
      {
        rank:4,
        country:"Netherlands",
        nodes:383
      },
      {
        rank:5,
        country:"Canada",
        nodes:285
      },
      {
        rank:6,
        country:"United Kingdom",
        nodes:216
      },
      {
        rank:7,
        country:"Finland",
        nodes:200
      },
      {
        rank:8,
        country:"Russia",
        nodes:167
      },
      {
        rank:9,
        country:"Switzerland",
        nodes:120
      },
      {
        rank:10,
        country:"Singapore",
        nodes:120
      },
      {
        rank:11,
        country:"Japan",
        nodes:112
      },
      {
        rank:12,
        country:"China",
        nodes:107
      }
    ]
  }
}
render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={btc} className="App-logo" alt="logo" />
       <h1>Lightning Nodes</h1>
      </header>
      <table class="lightning-table">
      <thead>
      <tr>
      <th>Rank</th>
      <th>Country</th>
      <th>Node Volume</th>
      </tr>
      </thead>
      <tbody>
      {
        this.state.nodeInfo.map(({rank, country, nodes}) => 
          <Stats rank={rank} country={country} nodes={nodes}  />)
      }
      </tbody>
      </table>
       </div>
  
   

  );

  } 
}

export default App;
