
function greet(name){

    if ( checkNameNotDefined(name) ) {

        return "Hello, my friend.";

    };
        
    if ( checkUpperCase(name) ) {

        return "HELLO, " + name + "!";

    };

    if ( checkNotUpperCase(name) ) {

        return "Hello, " + name + ".";

    };
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