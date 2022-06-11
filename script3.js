// lowercase and uppercase map
// write a function that creates an object with each (key,value)
// pair being the(lower case, upper case) versions of a letter respectively.





function mapping(array) {
        let obj = array.reduce(function (acc, cur) {
            acc[cur] = cur.toUpperCase();
            return acc;
        },{});
        return obj;
    }
    console.log(mapping(["p", "s"])); 
    console.log(mapping(["a", "b", "c"]));
    console.log(mapping(["a", "v", "y", "z"])); 