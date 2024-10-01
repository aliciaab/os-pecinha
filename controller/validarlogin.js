function validarLogin(){
    let emailFild = document.getElementById('email');
    let passworFild = document.getElementById('passaword');

    if(emailFild.textContent === 'tariq.9918@aluno.pr.senac.br'&& passworFild.textContent === '12345678'){
        window.location.href='./index.html';
    }else{
        alert('Email ou senha incorreta');
    }
}
