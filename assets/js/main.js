// Chiedi il suo nome
const username = prompt ('Come ti chiami?');
console.log (username);
// Chiedi il suo cognome
const surname = prompt ('Qual`è il tuo cognome?');
console.log (surname);
// Chiedi il suo colore preferito
const color = prompt ('Qual`è il tuo colore preferito?');
console.log (color);
// Imposta variabile numerica 22 per la password
const number = (22)
// Genera password su schermo: nomecongnomecolorepreferito22
document.getElementById('generate_password').innerHTML = (username + surname + color + number)
