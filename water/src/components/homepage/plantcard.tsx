import { Plant } from "../../models/plant";
import "../../stylesheets/plantcard.css"

interface PlantCardProps {
    /**Plant being displayed on card */
    plant: Plant
}
/**Card holding single plant and its details */
function PlantCard({plant}: PlantCardProps) {
    return (
      <div className="plant-card">
        <div className="card-content">{plant.name}</div>
      </div>
    );
  }

export default PlantCard