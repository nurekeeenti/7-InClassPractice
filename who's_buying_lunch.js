function whoIsBuyingLunch(names) {

    let rmd = Math.floor(Math.random() * names.length);

    return `${names[rmd]} is going to buy lunch today.`;
}

let names = ["Yernur", "Aman", "Aldiyar", "Pavel", "Erasyk"];
let buyer = whoIsBuyingLunch(names); 

console.log(buyer)