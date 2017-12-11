var name_input,pass_input;

function check_value(){
    name_input=document.getElementById("lg_name").value;
    pass_input=document.getElementById("lg_password").value;
}

window.onload = check_value;

function oBlur_lg_account(){
    check_value();
    if (!name_input){
        document.getElementById("lg_account_notice").style.display = "inline";
    }else{
        document.getElementById("lg_account_notice").style.display = "none";
    }
	
    if (!pass_input){
        document.getElementById("lg_pass_notice").style.display = "inline";
    } else{
        document.getElementById("lg_pass_notice").style.display = "none";
    }
}

function oBlur_lg_pass(){
    check_value();
    if (!pass_input){
        document.getElementById("lg_pass_notice").style.display = "inline";
    } else{
        document.getElementById("lg_pass_notice").style.display = "none";
    }

    if (!name_input){
        document.getElementById("lg_account_notice").style.display = "inline";
    }else{
        document.getElementById("lg_account_notice").style.display = "none";
    }
}


function oFocus_lg_account(){
    document.getElementById("lg_account_notice").style.display = "none";
    document.getElementById("lg_pass_notice").style.display = "none";
}


function oFocus_lg_pass(){
    document.getElementById("lg_pass_notice").style.display = "none";
    document.getElementById("lg_account_notice").style.display = "none";
}


function lg_submitTest(){
    check_value();
    if (!name_input && !pass_input){ 
        document.getElementById("lg_account_notice").style.display = "inline";
        document.getElementById("lg_pass_notice").style.display = "inline";
        return false; 
    } else if (!name_input){ 
        document.getElementById("lg_account_notice").style.display = "inline";
        return false;
    } else if (!pass_input){
        document.getElementById("lg_pass_notice").style.display = "inline";
        return false;
    }
    return true;
}