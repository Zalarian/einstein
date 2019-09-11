function check(){    
    let result = false;
    const form = document.getElementById("check");

    const nationality = form["nationality"].value;
    const house = form["house"].value;
    const drink = form["drink"].value;
    const cigarette = form["cigarette"].value;

    if(nationality == "german" && house == "green" && drink == "coffee" && cigarette == "prince") {
        result = true;
    }

    if(result) { 
        alert("You are correct!"); 
    }
    else { 
        alert("Try again."); 
    }
}