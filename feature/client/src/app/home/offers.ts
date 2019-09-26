
export class Offer {

    _id : string;
    title: string;
    description :string;
    type: string
    constructor(
    _id: string,
    title: string,
    description: string,
    type: string,
     ) {
         this._id = _id;
         this.title = title;
         this.description = description;
         this.type = type
     }


    geTitle():string {
        return this.title
    } 
}