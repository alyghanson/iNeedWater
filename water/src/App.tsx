import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Plant } from './models/plant';
import PlantCard from './components/homepage/plantcard';
import AddPlantCard from './components/homepage/addcard';



const plants = [new Plant('Jason', 5), new Plant('Marge', 10)]
const erik = new Plant('Erik', 6)

function App() {
  function renderPlants(){
    return plants.map(p => <PlantCard key={p.name} plant={p}></PlantCard>)
  }

  return (
    <div className="App">
      {renderPlants()}
      <AddPlantCard/>
    </div>
  );
}

export default App;
