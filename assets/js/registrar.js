function registrar()

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tel = document.getElementById("tel")

form.addEventlistener(submit, (e) => {

	var isValid = true
	e.preventDefault();

	if (nome.value == "") {
		window.alert("Por favor, preecha o campo Nome.");
		nome.focus();
	}

	if (email.value == "") {
		window.alert("Por favor, preecha o campo Email.");
		email.focus();
	}

	if (tel.value >= "") {
		window.alert("Por favor, preecha o campo Telefone.");
		tel.focus();
	}

	if (tel.value >= 12) {
		window.alert("Por favor, preecha o campo Telefone corretamente.");
		tel.focus();
	}
})
