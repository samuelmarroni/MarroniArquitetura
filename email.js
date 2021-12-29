function enviarEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "marroniarquitetura@hotmail.com",
        Password : "scm-1960",
        To : 'sergiomarroni@hotmail.com',
        From : "marroniarquitetura@hotmail.com",
        Subject : "Assunto",
        Body : "Mensagem"
    }).then(
      message => alert(message)
    );
}