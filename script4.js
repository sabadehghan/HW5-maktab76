// return the most expensive piece of jewellery
// you go to a jewelery shop and try to find the most expensive piece 
// of jewellery. you write down the name of each piece of jewelery and 
// its price .create a function that gets the name of the piece of jewellery
// with the highest price and returns "the most expensive one is the{
// name of jewelery piece}".

function highestPrice(obj) {

        let priceJwl = Object.values(obj);
    
        const priceNum = priceJwl.map(x => Number(x));
    
        let max = Math.max(...priceNum);
        let result = String(max);
    
        let key = Object.keys(obj).find(keys => obj[keys] == result);
        return (`The most expensive one is the ${key}`);
    
}
let jewel = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
};
 console.log(highestPrice(jewel));


//  function mostExpensive(obj) {
//     let keys = Object.keys(obj)
//     let values = Object.values(obj)
//     let i = values.indexOf(Math.max(...values))
//     return `The most expensive one is the ${keys[i]}`
//     }