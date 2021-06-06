export class Developer {
    constructor(_name, _age, _salary, _status) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.type = "Developer";
        this.status = _status;
        if (this.status) {
            this.leader = new DeveloperLeader(this.name, this.type);
        }
    }
}