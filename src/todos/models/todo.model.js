import {v4 as uuid} from 'uuid';

export class Todo {
    /**
     * 
     * @param {string} desciption 
     */

    constructor(desciption){
        this.id= uuid();
        this.desciption= desciption;
        this.done=false;
        this.createdAt=new Date();

    }
}