import LinkedList from "./LinkedList.js";

const newList = new LinkedList();

newList.prepend(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.pop();

newList.contains(3)

console.log(newList.toString());