// Chiedi il suo nome
const myUsername = prompt ('Come ti chiami?');
console.log (myUsername);
// Chiedi il suo cognome
const mySurname = prompt ('Qual`è il tuo cognome?');
console.log (mySurname);
// Chiedi il suo colore preferito
const myColor = prompt ('Qual`è il tuo colore preferito?');
console.log (myColor);
// Imposta variabile numerica 22 per la password
const passwordNumber = (22);
// Imposta variabile password
const passwordNotSecureGenerated = (myUsername + mySurname + myColor + passwordNumber);
// Cambia colore al titolo h1
document.getElementById("generate_password").style.color = "red";
// Cambia colore alla password
document.getElementById("password").style.color = "aqua";
// Genera password su schermo: nomecongnomecolorepreferito22
document.getElementById('generate_password').innerHTML = 'Password Generated: '
document.getElementById('password').innerHTML = (passwordNotSecureGenerated);
console.log ('Password Generated:', passwordNotSecureGenerated);
