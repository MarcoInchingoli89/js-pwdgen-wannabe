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
// Genera password su schermo: nomecongnomecolorepreferito22
document.getElementById('generate_password').innerHTML = (myUsername + mySurname + myColor + passwordNumber);
console.log ('Password Generated:', myUsername + mySurname + myColor + passwordNumber);
