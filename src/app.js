function greet(name){

    if(!Array.isArray(name)){

        if ( checkNameNotDefined(name) ) {

            return "Hello, my friend.";

        };
            
        if ( checkUpperCase(name) ) {
    
            return "HELLO, " + name + "!";
    
        };
    
        if ( !checkUpperCase(name) ) {
    
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

function checkAllUpperNames(arrayUpper){

    let stringUpper= "";

    if ( arrayUpper.length > 0 ) {

        stringUpper = " AND HELLO";

        for ( let i=0; i<arrayUpper.length; i++ ) {

            if ( i == arrayUpper.length - 1 ) {

                stringUpper += " " + arrayUpper[i] + " !";

            } else {

                stringUpper += " " + arrayUpper[i] + ",";

            }

        }

    }

    return stringUpper;
}

function checkAllLowerNames(arrayLower){

    let stringLower;

    if ( arrayLower.length > 0 ) {

        stringLower = "Hello";

        for ( let i=0; i<arrayLower.length; i++ ) {

            if ( i == arrayLower.length - 1 ) {
    
                stringLower += " and " + arrayLower[i] + ".";
    
            } else {
    
                stringLower += ", " + arrayLower[i];
    
            }
    
        }

    }

    return stringLower;

}

function checkAllNames(array){

    const arrayLower = array.filter( x => !checkUpperCase(x) );

    const stringLower = checkAllLowerNames( arrayLower );

    const arrayUpper = array.filter( x => checkUpperCase(x) );

    const stringUpper = checkAllUpperNames( arrayUpper );

    return stringLower + stringUpper;

}

module.exports = greet;