import { Plant } from "../../models/plant";
import "../../stylesheets/plantcard.css"

interface PlantCardProps {
    /**Plant being displayed on card */
    plant: Plant;
    openModal: () => void;
}
/**Card holding single plant and its details */
function PlantCard({plant, openModal}: PlantCardProps) {
    return (
      <div className="plant-card" onClick={openModal}>
        <div className="card-content">{plant.name}</div>
        <div className="card-content">I was last watered on: {plant.lastWatering.toLocaleDateString()}</div>
        <div className="card-content">I will need to be watered again on: {new Date(plant.lastWatering.getTime() + plant.waterFrequency * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</div> 
        <img className ="plant-image" src={plant.inputPicture || "/images/default-plant.png"}></img>
      </div>
    );
  }

export default PlantCard