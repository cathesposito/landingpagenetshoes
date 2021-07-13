const nomeCompleto = document.querySelector("#nomeCompleto");
const email = document.querySelector('#email');

function armazenaDados(){
  const usuario = {
    "nome": nomeCompleto.value,
    "email": email.value
  };
  localStorage.setItem('usuario', JSON.stringify(usuario));
}
