import React, {useState} from 'react';
import './App.css';
import Table from './components/Table';
import ViewTrade from './components/ViewTrade';
import ProfitBox from "./components/ProfitBox/ProfitBox";
import SellTradeForm from "./components/SellTradeForm/SellTradeForm";
import AddPurchaseForm from "./components/AddPurchaseForm/AddPurchaseForm";

const App = () => {

  const [view, updateView]  = useState(0);
  const [records, updateRecord] = useState([]);
  const [sellTradeForm, updateSellTradeForm] = useState(false);
  const [selectedTrade, updateSelectedTrade] = useState({});
  const handleFormSubmit = (e) => {
    const record = {...e};
    record.id = records.length + 1;
    record.date = new Date();
    records.push(record);
    updateRecord([...records]);
  };

  // Sell previous purchased share
  const sellShare = (id) => {
    const getTrade = records.find((record) => record.id === id);
    if (!getTrade) return;
    updateSellTradeForm(true)
    updateSelectedTrade({...getTrade});
  }

  // sell trade form update
  const handleSellTrade = (record) => {

    if (!selectedTrade) return ;

    selectedTrade.action = "Traded";
    selectedTrade.profit = record.amount - selectedTrade.amount;
    records[selectedTrade.id - 1] = {...selectedTrade};
    updateRecord([...records]);
    updateSellTradeForm(false);
  }
  return (
      <div className="App">
        <header className="App-header">
          {view !== 2 && <button onClick={() => updateView(2)}>Add New Data</button>}
          {view === 0 && (
              <>
                <ProfitBox profit="7900.43" />
              <Table view={() => updateView(1)} />
              </>)}
          {view === 1 && (<div>
            <ProfitBox />
                <button onClick={() => updateView(0)}>Go Back</button>
                <ViewTrade />
              </div>)}
          {view === 2 && (<div>

            <div>
              <button onClick={() => updateView(0)}>Go Back</button>
            </div>
            {sellTradeForm && <SellTradeForm submit={handleSellTrade} />}
            <AddPurchaseForm onSubmit={handleFormSubmit} />
            <div>
              <Table view={() => updateView(1)} data={records} sellShare={sellShare} />
            </div>
          </div>)}
        </header>
      </div>
  )
}


export default App;
