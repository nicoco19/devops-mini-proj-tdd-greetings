
function greet(name){

    if(!Array.isArray(name)){

        if ( checkNameNotDefined(name) ) {

            return "Hello, my friend.";

        };
            
        if ( checkUpperCase(name) ) {
    
            return "HELLO, " + name + "!";
    
        };
    
        if ( checkNotUpperCase(name) ) {
    
            return "Hello, " + name + ".";
    
        };
    
    } else {

        return checkAllNames(name);

    }
    
};


function checkNameNotDefined(name){

    return name === undefined || name === '' || name === null;

}

function checkUpperCase(name){

    return name.toUpperCase() === name;

}

function checkNotUpperCase(name){

    return name.toUpperCase() !== name;
    
}

function checkAllNames(array){

    let string = "Hello";

    for ( let i=0; i<array.length; i++ ) {

        if ( i == array.length - 1 ) {

            string += " and " + array[i] + ".";

        } else {

            string += ", " + array[i];

        }

    }

    return string;

}

module.exports = greet;