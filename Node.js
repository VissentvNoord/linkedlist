export default class Node{
    constructor(value){
        this.value = value;
    }

    set next(node){
        this.nextNode = node;
    }
}