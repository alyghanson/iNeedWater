import useModal from "../../hooks/useModal";
import "../../stylesheets/addcard.css"
import Modal from "../common/modal";

/**Card holding single plant and its details */
interface AddPlandCardProps {
    openModal: () => void
}

function AddPlantCard({openModal} : AddPlandCardProps) {
    const {isOpen, toggle} = useModal()
    return (
      <div className="add-plant-card" onClick={toggle}>
        <div className="add-card-content">+</div>
      </div>
    );
}

export default AddPlantCard