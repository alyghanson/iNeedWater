import "../../stylesheets/addcard.css"


/**Card holding single plant and its details */
interface AddPlandCardProps {
    openModal: () => void
}

function AddPlantCard({openModal} : AddPlandCardProps) {
    // const {isOpen, toggle} = useModal()
    return (
      <div className="add-card" onClick={openModal}>
        <div className="add-card-content">
            Add A New Plant
            <i className="icon plus" />
        </div>
      </div>
    );
}

export default AddPlantCard