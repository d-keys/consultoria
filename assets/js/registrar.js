const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
<<<<<<< HEAD
form.addEventlistener("submit", (e) =>{

	var isValid = true
		e.preventDefault();

		if(isNaN(nome) || nome.value == null || nome.value == ""){
			window.alert ("Por favor, preencha o campo Nome.")
			isValid == false;
		}

		if(isNaN(email) || email.value == null || email.value == ""){
			window.alert ("Por favor, preencha o campo Email.")
			isValid == false;
		}

		if(isNaN (tel) || tel.value == null || tel.value == ""){
			window.alert ("Por favor, preencha o campo Telefone.")
			isValid == false;
		}

		if (tel >=12){
			window.alert ("Por favor, preencha o campo Telefone corretamente.")
			isValid == false;
		}

		if (isValid == true){
			popUp();
		}
})
=======
form.addEventlistener('submit', (e) =>{

	var isValid = true
		e.preventDefault();

		if(isNaN(nome) || nome.value == null || nome.value == ''){
			alert ("Por favor, preencha o campo Nome.")
			isValid == false;
		}

		if(isNaN(email) || email.value == null || email.value == ''){
			alert ("Por favor, preencha o campo Email.")
			isValid == false;
		}

		if(isNaN(tel) || tel.value == null || tel.value == ''){
			alert ("Por favor, preencha o campo Telefone.")
			isValid == false;
		}

		if (tel >=12){
			alert ("Por favor, preencha o campo Telefone corretamente.")
			isValid == false;
		}

		if (isValid == true){
			popUp();
		}
})
>>>>>>> refs/remotes/origin/main
