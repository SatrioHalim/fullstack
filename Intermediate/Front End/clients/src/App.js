import './App.css';
import AppTitle from './components/AppTitle';
import AppTable from './components/Table';
import AppForm from './components/Form';
import React,{useState,useEffect} from 'react';

function App() {
  

  return (
    <div className="App">
      <AppTitle></AppTitle>
      <AppForm></AppForm>
      <AppTable></AppTable>
      
    </div>
  );
}

export default App;
