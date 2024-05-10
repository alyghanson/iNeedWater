import './App.css';
// images:
import 'semantic-ui-css/semantic.min.css'

import { Plant } from './models/plant';
import PlantCard from './components/homepage/plantcard';
import AddPlantCard from './components/homepage/addcard';
import useModal from './hooks/useModal';
import Modal from './components/common/modal';



const plants = [new Plant('Jason', 5), new Plant('Marge', 10)]


function App() {
  // const [modalContent, setModalContent] = useState<JSX.Element>()
  const { isOpen, toggle } = useModal();
  
  function renderPlants(){
    return plants.map(p => <PlantCard key={p.name} plant={p}></PlantCard>)
  }

  return (
    <div className="App">
      <div className="App-card">
        {renderPlants()}
        <AddPlantCard openModal={toggle}/>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        {/* {modalContent} */}
      </Modal>
    </div>
  );
}

export default App;
