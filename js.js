function Student(name , group) {
    this.name = name;
    this.group = group;
    this.issues = [];
};
var mass = [ new Student('ivan', '24'), new Student('dima', '33'), new Student('lola', '30')];

function Issues(name, deadline) {
    this.name =  name;
    this.deadline = deadline;
    this.isCompleate = false;
    this.mark = null;
};
function addIssues() {
    for(var i = 0; i < mass.length; i++) {
        mass[i].issues.push( new  Issues('Ivan', '12'));
    }
}
addIssues();

mass[1].issues[0].isCompleate = true;
mass[2].issues[0].isCompleate = false;

console.log(mass);

var compleate = [];

function getCompleate() {
    for(var i = 0; i < mass.length; i++) {
        if ( mass[i].issues[0].isCompleate == true){
            compleate.push(mass[i])
        }
    }
}
getCompleate();

console.log(compleate);