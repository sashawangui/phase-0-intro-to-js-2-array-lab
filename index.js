// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.length = 2
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    let newArray = [...cats, name]
    return newArray

}

function prependCat(name) {
    let newArray = [name, ...cats]
    return newArray;
}

function removeLastCat() {
    let newArray = cats.slice(0, -1)
    return newArray;
}

function removeFirstCat() {
    let newArray = cats.slice(1)
    return newArray;
}