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
    return plants.map(p => <PlantCard key={p.uuid} plant={p} openModal={() => setModalContent(<PlantDetails plant={p} deletePlant={deletePlant}/>)}></PlantCard>)
  }
  function addNewPlant(plant: Plant){
    /** Creates new plant to add to master list */

    setPlants([... plants, plant])

    //Toggle the modal once new plant is added
    setModalContent(undefined);
  }
  function deletePlant(plant: Plant){
    setPlants(plants.filter((p)=>p.uuid !== plant.uuid));
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
