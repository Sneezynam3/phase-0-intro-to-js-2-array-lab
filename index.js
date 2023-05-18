const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    var cats2 = [...cats, name]
    return cats2;
}

function prependCat(name) {
    var cat3 = [name, ...cats];
    return cat3;
}

function removeLastCat() {
    var cat4 = cats.slice(0, cats.length-1);
    return cat4;
}

function removeFirstCat() {
    var cat5 = cats.slice(1);
    return cat5;
}