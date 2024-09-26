import { SyntheticEvent, useState } from "react"
import "../../stylesheets/addplantform.css"
import { Plant } from "../../models/plant";

interface AddPlantFormProps {
    /** Function to add a new plant */
    addPlant: (plant: Plant) => void;
}

function AddPlantForm({ addPlant }: AddPlantFormProps){

    const [inputName, setInputName] = useState("");
    const [inputWeeks, setInputWeeks] = useState<number>(0);
    const [inputNotes, setInputNotes] = useState("");
    const [inputType, setInputType] = useState("");
    const [inputDate, setInputDate] = useState<Date>();
    const [inputPicture, setInputPicture] = useState("");

    function handlePicture(event: any) {
        if (event.target.files && event.target.files[0]) {
            setInputPicture(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="add-form">

            <div className="header"> Who will be watered? </div>
            <div className="form-line">
                <div className="add-name"> Name: &nbsp;&nbsp;</div>
                <input type="text" placeholder="Add Name of Plant" value={inputName} onChange={e=>setInputName(e.target.value)}/>
            </div>
            <div className="form-line">
                <div className="add-name"> Type: &nbsp;&nbsp;</div>
                <input type="text" placeholder="ie: Monstera" value={inputType} onChange={e=>setInputType(e.target.value)}/>
            </div>
            <div className="form-line">
                <div className="add-name"> Weeks between watering: &nbsp;&nbsp;</div>
                <input type="number" placeholder="# weeks between watering" value={inputWeeks} onChange={e=>setInputWeeks(Number(e.target.value))}/>
            </div>
            <div className="form-line">
                <div className="add-name"> When was the last watering? &nbsp;&nbsp;</div>
                <input type="datetime-local" onChange={e=>setInputDate(new Date(e.target.value))}/>
            </div>
            <div>
            Upload a Photo!
            <input type="file" accept=".jpeg, .png, .jpg" name="picture" onChange={handlePicture}/>
            </div>

            <div className="form-line">
                <div className="add-name"> Notes: &nbsp;&nbsp;</div>
                <input type="text" placeholder="ie: Water when dry." value={inputNotes} onChange={e=>setInputNotes(e.target.value)}/>
            </div>

            <button type="button" className="add-btn" onClick={() => addPlant(new Plant(inputName, inputWeeks, inputNotes, inputType, inputDate, inputPicture))}>ADD PLANT</button>
        </div>

    )
}

export default AddPlantForm

function getDate(): Date | (() => Date) {
    throw new Error("Function not implemented.");
}