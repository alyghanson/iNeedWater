import {v4 as uuidv4} from 'uuid';
/**Class of individual plants and associated proporties */
export class Plant {
    
    // name: string
    readonly uuid: string
    // waterFrequency: number
    constructor(
        /**Name of plant */
        readonly name: string, 
        /**Watering freqency in days */
        readonly waterFrequency: number,
        /**Special Notes: */
        readonly notes: string,
        /**Type of plant */
        readonly type: string,
        /**Date of Last watering */
        public lastWatering=new Date(),
        /**Image uploaded by user */
        readonly inputPicture?: string
    ) {
        this.uuid = uuidv4();


        // this.name = name
        // this.waterFrequency = waterFreqency
}}