import { useState } from "react"
import "../../stylesheets/addplantform.css"
import { Plant } from "../../models/plant";

interface PlantDetailsProps {
    /** Function to add a new plant */
    plant: Plant;
    deletePlant: (plant:Plant) => void;
}

function PlantDetails({ plant, deletePlant }: PlantDetailsProps){

    return (
        <><div>Name: {plant.name}
        </div>
            <div> Type: {plant.type}
            </div><div>Weeks between watering: {plant.waterFrequency}
            </div><div>Special Notes: {plant.notes}
            </div>
        <div ><button type="button" onClick={() => deletePlant(plant)}>Delete PLANT</button></div></>

    )
}

export default PlantDetails
//add close button to modal common 