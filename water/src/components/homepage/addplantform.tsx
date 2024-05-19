import { useState } from "react"
import "../../stylesheets/addplantform.css"

interface AddPlantFormProps {
    /** Function to add a new plant */
    addPlant: (name:string, weeks: number) => void;
}

function AddPlantForm({ addPlant }: AddPlantFormProps){

    const [inputName, setInputName] = useState("");
    const [inputWeeks, setInputWeeks] = useState<number>(0);

    return (
        <div className="add-form">

            <div className="header"> Hi </div>
            <div className="form-line">
                <div className="add-name"> Name: </div>
                <input type="text" placeholder="Add Name of Plant" value={inputName} onChange={e=>setInputName(e.target.value)}/>
            </div>

            <div className="form-line">
                <div className="add-name"> Weeks between watering: </div>
                <input type="number" placeholder="# weeks between watering" value={inputWeeks} onChange={e=>setInputWeeks(Number(e.target.value))}/>
            </div>
            <button type="button" className="add-btn" onClick={() => addPlant(inputName, inputWeeks)}>ADD PLANT</button>
        </div>

    )
}

export default AddPlantForm
//add close button to modal common 