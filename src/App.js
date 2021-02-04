import React, {useState} from 'react';
import './App.css';
import Table from './components/Table';
import ViewTrade from './components/ViewTrade';

const App = () => {

  const [view, updateView]  = useState(0);
  const [records, updateRecord] = useState([]);
  const handleFormSubmit = (e) => {

    e.preventDefault();
    const record = {};
    record.id = records.length + 1;
    record.shareName = e.target[1].value;
    record.action = e.target[2].value;
    record.amount = e.target[3].value;
    record.quantity = e.target[4].value;
    record.date = new Date();
    console.log(record);
    records.push(record);
    updateRecord([...records]);


  };
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => updateView(2)}>Add New Data</button>
          {view === 0 && <Table view={() => updateView(1)} />}
          {view === 1 && (<div>
                <button onClick={() => updateView(0)}>Go Back</button>
                <ViewTrade />
              </div>)}
          {view === 2 && (<div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <button onClick={() => updateView(0)}>Go Back</button>
              </div>
              <input
                  type="text"
                  placeholder="Share Name"
                  name="shareName"
                  className="inputField"
              />
              <select
                  name="action"
                  className="inputField"
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
              <input
                  type="text"
                  placeholder="Amount"
                  name="amount"
                  className="inputField"
              />
              <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  className="inputField"
              />
              <button type="submit">Submit</button>
              <div>
                <Table view={() => updateView(1)} data={records} />
              </div>
            </form>
          </div>)}
        </header>
      </div>
  )
}


export default App;
