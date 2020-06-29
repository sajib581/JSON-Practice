var fs = require('fs')
var faker = require('faker')

// object => JSON => file

var peoples = []

for(var i=0 ; i<10 ;i++){
    var people = {} ;
    people.name = faker.name.findName()
    people.email = faker.internet.email()
    people.address = {
        city : faker.address.city(),
        country : faker.address.country(),
        lat : faker.address.latitude() ,
        lang : faker.address.longitude()
    }

    peoples.push(people)
}

//console.log(JSON.stringify(peoples));

fs.writeFile('demo.json',JSON.stringify(peoples),(err,data)=>{
    console.log("File created Successfully");
    
})

