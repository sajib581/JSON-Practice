var fs = require('fs')
var faker = require('faker')


var data = fs.readFileSync('demo.json').toString();
people = JSON.parse(data)
//console.log(data);
console.log(people);

people.forEach(p => {
    console.log(p.name, p.email);
    
})