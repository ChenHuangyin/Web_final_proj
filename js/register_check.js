var rg_name_input,rg_pass_input,rg_email_input;

function check_value(){
    rg_name_input=document.getElementById("rg_name").value;
    rg_pass_input=document.getElementById("rg_password").value;
	rg_email_input=document.getElementById("rg_email").value;
}

function check_email(){
	var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    if(!reg.test(rg_email_input)){
        return false;
    } 
    else{
        return true;
    }
}

window.onload = check_value;

function oBlur_rg_account(){
    check_value();
    if (!rg_name_input){
        document.getElementById("rg_account_notice").style.display = "inline";
    } else{
        document.getElementById("rg_account_notice").style.display = "none";
    }
    if (!rg_pass_input){
        document.getElementById("rg_pass_notice").style.display = "inline";
    } else{
        document.getElementById("rg_pass_notice").style.display = "none";
    }
	if (!rg_email_input){
        document.getElementById("rg_email_notice").style.display = "inline";
    } else{
        document.getElementById("rg_email_notice").style.display = "none";
    }
}

function oBlur_rg_pass(){
    check_value();
    if (!rg_pass_input){
        document.getElementById("rg_pass_notice").style.display = "inline";
    } else{
        document.getElementById("rg_pass_notice").style.display = "none";
    }

    if (!rg_name_input){
        document.getElementById("rg_account_notice").style.display = "inline";
    }else{
        document.getElementById("rg_account_notice").style.display = "none";
    }
	if (!rg_email_input){
        document.getElementById("rg_email_notice").style.display = "inline";
    } else{
        document.getElementById("rg_email_notice").style.display = "none";
    }
}

function oBlur_rg_email(){
    check_value();
    if (!rg_pass_input){
        document.getElementById("rg_pass_notice").style.display = "inline";
    } else{
        document.getElementById("rg_pass_notice").style.display = "none";
    }

    if (!rg_name_input){
        document.getElementById("rg_account_notice").style.display = "inline";
    } else{
        document.getElementById("rg_account_notice").style.display = "none";
    }
	
	if (!rg_email_input){
        document.getElementById("rg_email_notice").innerText = "请输入邮箱!";
        document.getElementById("rg_email_notice").style.display = "inline";
    } else{
        if(check_email()){
            document.getElementById("rg_email_notice").style.display = "none";
            console.log("true");
        }
        else{
            document.getElementById("rg_email_notice").innerText  = "请输入合法的邮箱!";
            document.getElementById("rg_email_notice").style.display = "inline";
            console.log("false");
        }
    }
}

function oFocus_rg_account(){
    document.getElementById("rg_account_notice").style.display = "none";
    document.getElementById("rg_pass_notice").style.display = "none";
	document.getElementById("rg_email_notice").style.display = "none";
}


function oFocus_rg_pass(){
    document.getElementById("rg_pass_notice").style.display = "none";
    document.getElementById("rg_account_notice").style.display = "none";
	document.getElementById("rg_email_notice").style.display = "none";
}

function oFocus_rg_email(){
    document.getElementById("rg_pass_notice").style.display = "none";
    document.getElementById("rg_account_notice").style.display = "none";
	document.getElementById("rg_email_notice").style.display = "none";
}

function rg_submitTest(){
    check_value();
	var flag = true;
	if (!rg_name_input){
		document.getElementById("rg_account_notice").style.display = "inline";
		flag = false;
	}
	if (!rg_pass_input){
        document.getElementById("rg_pass_notice").style.display = "inline";
        flag = false;
	}
	if (!rg_email_input){
		document.getElementById("rg_email_notice").style.display = "inline";
		flag = false;
	}
    return flag;
}