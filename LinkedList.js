import Node from "./Node.js";

export default class LinkedList{
    prepend(value){
        let tmp = null;
        if(this.listHead != null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    append(value){
        if(this.listHead == null){
            this.prepend(value);
        }else{
            let tmp = this.listHead;
            while(tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    size(){
        let tmp = this.listHead;
        let count = 0;
        while(tmp.nextNode != null){
            tmp = tmp.nextNode;
            count++;
        }

        return count;
    }

    head(){
        return this.listHead;
    }

    tail(){
        let tmp = this.listHead;
        while(tmp.nextNode != null) tmp = tmp.nextNode;
        return tmp;
    }

    at(index){
        let tmp = this.listHead;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
            if(tmp == null) return "There is no item at this index.";
        }
        return tmp;
    }

    pop(){
        let cur = this.listHead;
        let prev = null;

        while(cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }

        prev.nextNode = null;
    }

    contains(value){
        let tmp = this.listHead;
        while(tmp != null) {
            if(tmp.value === value) return true;

            tmp = tmp.nextNode;
        }

        return false;
    }

    find(value){
        let tmp = this.listHead;
        let index = 0;
        while(tmp != null){
            if(tmp.value === value) return index;
            tmp = tmp.nextNode;
            index++;
        }
        return null;
    }

    toString(){
        let tmp = this.listHead;
        let stringList = "";

        while(tmp != null){
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }

        return (stringList += "null");
    }
}