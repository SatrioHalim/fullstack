import React from 'react';
import './App.css';
import { 
  Title, 
  InputForm, 
  Income,
  Expense
} from './components/Index';
    
function App() {
  return (
    <div className="App">
      <Title />
      <InputForm />
      <hr />
      <div className='transaction-list'>
        <div className='transaction-heading'>
          <h3>Transaction List</h3>
        </div>
        <div className='transactions'>
          <Income />
          <Expense />
        </div>
      </div>
    </div>
  );
}

export default App;
