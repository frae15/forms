let registro = document.querySelector(".cadastro")
let login = document.querySelector(".login")
let contas = []
let termo = false

function trocatela(proxtela){
	if(proxtela == "login"){
		registro.style.display = "none";
		login.style.display = "inline";
	}
	else{
			registro.style.display = "inline";
		login.style.display = "none";
	}
}

function aceita(){
	if(termo==false) termo = true
	else termo = false
}



class Conta{
	constructor({nome, email, senha}){
		this.nome = nome
		this.email = email
		this.senha = senha
	}
}

function registrar(){
	let apelido = document.querySelector(".nome").value
	let emailpessoa = document.querySelector(".email").value
	let senhapessoa = document.querySelector(".senha").value
    let temarroba = false
for(let i = 0; i < emailpessoa.length; i++){
	if(emailpessoa[i] == "@") temarroba = true
}
	if(apelido && emailpessoa && senhapessoa){
		if(!temarroba){
			alert("Cadê o @ no email, meu filho")
			return
		}
		if(!termo){
			alert("Aceite os termos de uso")
			return
		}
		contas.push(new Conta({
			nome: apelido,
			email: emailpessoa,
			senha: senhapessoa
		}))
		alert(apelido + ", você realizou seu cadastro com sucesso")
	}	
	else alert("Insira dados válidos")
}

function logar(){
	let entranome = document.querySelector(".entradanome").value
	let entrasenha = document.querySelector(".entradasenha").value
	
	

for(let i = 0; i < contas.length; i++){
	if((entranome == contas[i].nome || entranome == contas[i].email) && entrasenha == contas[i].senha){
		alert("Seja bem-vindo " + contas[i].nome)
		return
	}
	}
	alert("Dados inválidos")
}