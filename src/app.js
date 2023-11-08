
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

        let string = "Hello";

        for ( let i=0; i<name.length; i++ ) {

            if ( i == name.length - 1 ) {

                string += " and " + name[i] + ".";

            } else {

                string += ", " + name[i];

            }

        }

        return string;

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

module.exports = greet;