import { useState } from "react"
import "../../stylesheets/addplantform.css"
import { Plant } from "../../models/plant";

interface PlantDetailsProps {
    /** Function to add a new plant */
    plant: Plant;
}

function PlantDetails({ plant }: PlantDetailsProps){

    return (
        <div>Name: {plant.name}
        </div>

    )
}

export default PlantDetails
//add close button to modal common 