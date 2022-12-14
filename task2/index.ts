import { readFileSync } from 'fs';

interface Person {
    first_name: string;
    last_name: string;
    birthday: string;
    address: string;
    phone_number: string;
}

(() => {
    const files: string[] = ['person1.json', 'person2.json', 'person3.json'];

    const people: Person[] = files.map((file: string) => {
        // ok:detect-non-literal-fs-filename
        const data = readFileSync(`task2/data/${file}`, 'utf8');
        return JSON.parse(data);
    });

    console.log({ people });
})();
