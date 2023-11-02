
function greet(name){

    let people;

    if(name === undefined || name === '' || name === null){

        people = "my friend";
        
    }else{
        people = name;
    }
    
    return "Hello, " + people + ".";
};

module.exports = greet;