function register_click(){
	document.getElementsByClassName('login-form')[0].style.display="none";
	document.getElementsByClassName('register-form')[0].style.display="inline";
}

function login_click(){
	document.getElementsByClassName('login-form')[0].style.display="inline";
	document.getElementsByClassName('register-form')[0].style.display="none";
}