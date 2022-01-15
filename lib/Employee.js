
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName(){
        return this.name
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    }


    getRole(){

        return "Employee";
    }

getHtml(){
    return `
    <p>email: $(this.email)</p>
    <p>name: $(this.name)</p>
    <p> id: $(this.id)</p>
    `
}

};


module.exports = Employee;