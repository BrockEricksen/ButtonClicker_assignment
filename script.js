// function log_in_out(element){
//     x = element.innerText
//     if(x == "Log In"){
//         element.innerText = "Log Out";
//     }
//     else{
//         element.innerText = "Log In";
//     }
// }

// Why does adding the x var now make it switch back and forth? **EDIT I FORGOT TO ADD A SECOND "=" TO THE IF STATMENT
function log_in_out(element){
    if(element.innerText == "Log In"){
        element.innerText = "Log Out";
    }
    else{
        element.innerText = "Log In";
    }
}


function remove(element){
    element.remove();
}