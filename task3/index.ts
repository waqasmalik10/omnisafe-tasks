import NUMBERSJson from "./NUMBERS.json"

export const findNumber = (arr: any, num: number, place: number): number => {
    const index = Math.floor(arr.length / 2)

    if(!arr.length || (!index && arr[index] !== num))
        return -1;
    else if(arr[index] === num)
        return place + index + 1;
    else if(arr[index] > num)
        return findNumber(arr.slice(0, index), num, place )
    else
        return findNumber(arr.slice(index), num, place + index)
}

(() => {
    const myArgs = process.argv.slice(2);
    const num = parseInt(myArgs[0])

    if (process.argv[0].includes("entrypoint.js") && (!myArgs.length || isNaN(num)) ) {
        console.error('Expected number to find position!');
        process.exit(0);
    }

    const place = findNumber(NUMBERSJson, num, 0)
    
    console.log("place", place )
})()