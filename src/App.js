import React from 'react';
import './App.css';
import Table from './components/Table';
import ViewTrade from './components/ViewTrade';

class App extends React.Component {
  state = {
    balls: [1,2],
    view: true,
    
  }
  render () {
    const { view } = this.state;
    return (
      <div className="App">
      <header className="App-header">
      {view
      ? <Table view={() => this.setState({ view: !view })} />
      : <div>
        <button onClick={() => this.setState({ view: true })}>Go Back</button>
        <ViewTrade />
        </div>
        }
      </header>
      <button onClick={() => {this.setState({ step2: !this.state.step2 })}} >Update State</button>
    </div>
    )
  }
}


export default App;
