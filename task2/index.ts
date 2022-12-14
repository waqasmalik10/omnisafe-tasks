import fs from 'fs';

interface Person {
    first_name: string,
    last_name: string,
    birthday: string,
    address: string,
    phone_number: string
}

(() => {

    const files:Array<string> = ["person1.json", "person2.json", "person3.json"]
    
    const people: Array<Person> = files.map((file) => { 
        const data = fs.readFileSync('task2/data/'+file, 'utf8');
        return JSON.parse(data)
    })

    console.log({ people });
})()