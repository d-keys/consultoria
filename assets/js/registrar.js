function registrar()

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tel = document.getElementById("tel")

form.addEventlistener(submit, (e) =>{

	var isValid = true
		e.preventDefault();

	if (nome.value == "")
		{window.alert("Por favor, preecha o campo Nome.");
			document.nome.focus();
	}

	if (email.value == "")
		{window.alert("Por favor, preecha o campo Email.");
			document.nome.focus();
	}

	if (tel.value >= "")
		{window.alert("Por favor, preecha o campo Telefone.");
			document.nome.focus();
	}

	if (tel.value >= 12)
		{window.alert("Por favor, preecha o campo Telefone corretamente.");
			document.nome.focus();
	}
})
