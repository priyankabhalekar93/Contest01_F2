let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

let arr1 = [
    { id: 4, name: 'jessica', age: 21, profession: 'developer' },
    { id: 5, name: 'Garry', age: 18, profession: 'admin' },
    { id: 6, name: 'Mac', age: 20, profession: 'admin' },
];


// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
    //Write your code here , just console.log


}

function addData() {
    //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" })
    console.log(arr)

}

function removeAdmin() {
    //Write your code here, just console.log

    let newarray = arr.filter((obj) => {
        return obj.profession !== "admin";
    })
    console.log(newarray)

}

function concatenateArray() {
    //Write your code here, just console.log
    let concatarray = arr.concat(arr1);
    console.log(concatarray)

}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
}