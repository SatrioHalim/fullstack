import './App.css';
import Heading from './components/Heading'; 
import React,{useState} from 'react';

function App() {

  // profile sama setProfile disini mirip2 kaya setter getter di oop
  const [profiles, setProfiles] = useState([
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
    },{
      id: 4,
      name: "Udin Sedunia",
      age: 20
    },{
      id: 5,
      name: "Jamal Sopir Angkot",
      age: 21
    }
  ])

  return (
    <div className="App">
      {/* .map ngembalikan array baru */}
     
      {profiles.map(profile => {

        return(
          <Heading profile={profile}></Heading>
        )
      })}
      
    </div>
  );
}

export default App;
