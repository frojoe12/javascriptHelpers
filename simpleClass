class Person {
    constructor(object) {
        object.name ? this.name = object.name : this.name = "no name";
        object.id ? this.id = object.id : this.id = "no ID";
    }
    sayName() {
        return "Hi " + this.name;
    }
    changeName(newName) {
        this.name = newName;
    }
    stateId() {
        return `ID: ${this.id}`;
    }
}


let myDetails = {
    id: "129428530894867",
    name: "Joseph"
};

let helper = new Person(myDetails);
const ROOT = document.querySelector("#root");
ROOT.textContent = helper.sayName();

helper.name = "Peter";
ROOT.textContent += ` ${helper.sayName()}`;

helper.changeName("Peter");
ROOT.textContent += ` ${helper.sayName()}`;

ROOT.textContent += ` ${helper.stateId()}`;
