/**Class of individual plants and associated proporties */
export class Plant {
    
    // name: string
    
    // waterFrequency: number
    constructor(
        /**Name of plant */
        readonly name: string, 
        /**Watering freqency in days */
        readonly waterFrequency: number,
        /**Special Notes: */
        readonly notes: string
    ) {
        // this.name = name
        // this.waterFrequency = waterFreqency
    }
}