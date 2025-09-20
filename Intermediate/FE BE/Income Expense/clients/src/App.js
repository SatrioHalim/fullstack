import React from 'react';
import './App.css';
import { 
  Title, 
  InputForm, 
  Income
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
          <hr />
        </div>
        <Income />
      </div>
    </div>
  );
}

export default App;
