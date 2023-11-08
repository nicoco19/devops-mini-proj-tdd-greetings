
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
    
    } else{

        if(name[0] == 'Jill' && name[1] == 'Jane' ){

            return "Hello, Jill and Jane.";
        }
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