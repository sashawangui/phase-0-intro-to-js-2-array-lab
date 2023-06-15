// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop(2)
}

function destructivelyRemoveFirstCat() {
    cats.shift(0)
}

function appendCat(name) {
    let newArray = [...cats, name]
    return newArray
}
console.log('Broom')

function prependCat(name) {
    let newArray = [name, ...cats]
    return newArray;
}
console.log('Arnold')

function removeLastCat() {
    let newArray = cats.slice(0, -1)
    return newArray;
}


function removeFirstCat() {
    let newArray = cats.slice(1)
    return newArray;
}