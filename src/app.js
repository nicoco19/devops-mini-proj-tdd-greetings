
function greet(name){

    let people;

    if(name === undefined || name === '' || name === null){

        people = "my friend";
        
    }else{
        people = name;
        if(name.toUpperCase() === name){
            return "HELLO, " + people + "!";
        }
    }

    return "Hello, " + people + ".";
};

module.exports = greet;