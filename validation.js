/******w*************
    
    Project 3
    Name: CJ Vergel
    Date: 04-02-2022
    Description: A JavaScript document for Project 3 that demonstrates
    various form validation techniques.

********************/
function validate(e){
    hideErrors();

    if(formHasErrors()){
        
        e.preventDefault();
        return false;
    }
    return true;
}

function resetForm(e){
    // Ensure all error fields are hidden
    hideErrors();
    
    // Set focus to the first text field on the page
    document.getElementById("name").focus();
    
    // When using onReset="resetForm()" in markup, returning true will allow
    // the form to reset
    return true;
}

function formHasErrors(){
    let errorFlag = false;
    let requiredFields = ["name", "phone", "email"];
    let expressions = [(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im), (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]

    for(let i=0; i<requiredFields.length; i++){
        let textField = document.getElementById(requiredFields[i]);

        if(textField.value == null || textField.value == ""){
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if(!errorFlag){
                textField.focus();
            }

            errorFlag = true;
        }

        else if(i>0 && i<3){
            if (!expressions[i-1].test(textField.value)){
                document.getElementById(requiredFields[i] + "format_error").style.display = "block";

                if(!errorFlag){
                    textField.focus();
                }

                errorFlag = true;
            }
        }
    }

    return errorFlag;
}

function hideErrors(){
    // Get an array of error elements
    let error = document.getElementsByClassName("error");

    // Loop through each element in the error array
    for ( let i = 0; i < error.length; i++ ){
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}

function load(){
    hideErrors();

    document.getElementById("contactform").addEventListener("reset", resetForm);
    document.getElementById("contactform").addEventListener("submit", validate);
}

document.addEventListener("DOMContentLoaded", load);