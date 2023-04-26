export class Todo {
    /**
     * 
     * @param {string} desciption 
     */

    constructor(desciption){
        this.id= 1;
        this.desciption= desciption;
        this.done=false;
        this.createdAt=new Date();

    }
}