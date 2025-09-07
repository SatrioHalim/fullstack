import './App.css';
import Heading from './components/Heading'; 

function App() {

  const profile = [
    {
      id: 1,
      name: "Halim",
      age: 22
    },
    {
      id: 2,
      name: "Asep Tambal Ban",
      age: 34 
    },{
      id: 3,
      name: "Rizky Galon",
      age: 19
    }
  ]

  return (
    <div className="App">

      {profile.forEach((item)=>{
        <Heading name={item.name} age={item.age}></Heading>
      })}
      
      <Heading name="Halim" age="22"></Heading>
      <Heading name="Asep Tambal Ban" age="34"></Heading>
      <Heading name="Rizky Galon" age="19"></Heading>
    </div>
  );
}

export default App;
