// which generation re you?
// try finding your ancestors and offspring with code.
// create a function that takes a number x and a character y ("m" for male,
// "f" for female), and returns the name of an ancestor(m/f) or 
// descendant (m/f).
// if the number is negative, return the related ancestor.
// if positive, return the related descendant.
// you are generation 0. in the case 0 (male or female), return "me!".


let result='';

    let related ={
        "-3": ["great grandfather",  "great grandmother"],
        "-2": ["grandfather","grandmother"],
        "-1":["father",  "mother"],
        "0": ["me!", "me!"],
        "1":["son",  "daughter"],
        "2"  :["grandson","granddaughter"],
        "3" :["great grandson","great granddaughter"]
            }
            
function findGeneration(number,gender){
    let keys = Object.keys(related); 
            
                for(let key of keys){

                    if(key == number.toString() && gender ==="f")
                        result= related[key][1];
                        
                    else if(key == number.toString() && gender ==="m")
                        result= related[key][0];
                    }
    return result
}
console.log(findGeneration(2,'f'));