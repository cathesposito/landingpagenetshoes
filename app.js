const nomeCompleto = document.querySelector("#nomeCompleto");
const email = document.querySelector('#email');

function armazenaDados(){
  const bancoDados = [];
  const usuario = {
    "nome": nomeCompleto.value,
    "email": email.value
  };
  localStorage.setItem('usuario', JSON.stringify(usuario));
  bancoDados.push(usuario);
  return(
    window.location.href = "index.html"
  )
}
