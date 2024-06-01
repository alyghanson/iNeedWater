import './App.css';
// images:
import 'semantic-ui-css/semantic.min.css'

import { Plant } from './models/plant';
import PlantCard from './components/homepage/plantcard';
import AddPlantCard from './components/homepage/addcard';
import useModal from './hooks/useModal';
import Modal from './components/common/modal';
import AddPlantForm from './components/homepage/addplantform';
import { useState } from 'react';
import PlantDetails from './components/homepage/plantdetails';

// const plants = [new Plant('Jason', 5), new Plant('Marge', 10)]


function App() {
  // const [modalContent, setModalContent] = useState<JSX.Element>()
  // const { isOpen, toggle } = useModal();
  const [modalContent, setModalContent] = useState<JSX.Element>()

  const [plants, setPlants] = useState<Plant[]>([]);

  function renderPlants(){
    return plants.map(p => <PlantCard key={p.name} plant={p} openModal={() => setModalContent(<PlantDetails plant={p}/>)}></PlantCard>)
  }
  function addNewPlant(name: string, weeks: number, notes: string){
    /** Creates new plant to add to master list */
    console.log("added a new plant => ")
    console.log("name:", name)
    console.log("weeks:", weeks)
    console.log("notes:", notes)

    setPlants([... plants, new Plant(name, weeks, notes)])

    //Toggle the modal once new plant is added
    setModalContent(undefined);
  }

  console.log('isOpen:', !!modalContent)

  return (
    <div className="App">
      <div className='App-header'>iNeedWater: a place to set Watering Schedules for your plant friends. </div>
      <div className="App-card">
        {renderPlants()}
        <AddPlantCard openModal={() => setModalContent(<AddPlantForm addPlant={addNewPlant}/>)}/>
      </div>
      <Modal isOpen={!!modalContent} onClose={() => setModalContent(undefined)}>
        {modalContent}
      </Modal>
      
    </div>
  );
}

export default App;
