import { useState } from "react"
import "../../stylesheets/addplantform.css"

interface AddPlantFormProps {
    /** Function to add a new plant */
    addPlant: (name:string, weeks: number, notes: string) => void;
}

function AddPlantForm({ addPlant }: AddPlantFormProps){

    const [inputName, setInputName] = useState("");
    const [inputWeeks, setInputWeeks] = useState<number>(0);
    const [inputNotes, setInputNotes] = useState("");

    return (
        <div className="add-form">

            <div className="header"> Who will be watered? </div>
            <div className="form-line">
                <div className="add-name"> Name: &nbsp;&nbsp;</div>
                <input type="text" placeholder="Add Name of Plant" value={inputName} onChange={e=>setInputName(e.target.value)}/>
            </div>

            <div className="form-line">
                <div className="add-name"> Weeks between watering: &nbsp;&nbsp;</div>
                <input type="number" placeholder="# weeks between watering" value={inputWeeks} onChange={e=>setInputWeeks(Number(e.target.value))}/>
            </div>

            <div className="form-line">
                <div className="add-name"> Notes: &nbsp;&nbsp;</div>
                <input type="text" placeholder="ie: Water when dry." value={inputNotes} onChange={e=>setInputNotes(e.target.value)}/>
            </div>

            <button type="button" className="add-btn" onClick={() => addPlant(inputName, inputWeeks, inputNotes)}>ADD PLANT</button>
        </div>

    )
}

export default AddPlantForm
//add close button to modal common 