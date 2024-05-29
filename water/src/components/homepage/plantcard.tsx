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
      </div>
    );
  }

export default PlantCard