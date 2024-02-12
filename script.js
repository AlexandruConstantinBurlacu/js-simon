// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const hoursElement = document.querySelector("#hours");
const daysElement = document.querySelector("#days");




const targetNow = new Date();
const targetNowTime = targetNow.getTime();


const finalDate = new Date("02-12-2024 9:30:00");
const finalDateTime = finalDate.getTime();
console.log(finalDate);

const secondsLeft = (finalDateTime / 1000) % 60;

const minutesLeft = Math.floor(finalDateTime / (1000 * 60) % 60);

const hoursLeft = Math.floor(finalDateTime / (1000 * 60 * 60) % 24) + 1;

const daysLeft = Math.floor(finalDateTime / (1000 * 60 * 60 * 24) % 365);


secondsElement.innerText = secondsLeft;
minutesElement.innerText = minutesLeft;
hoursElement.innerText = hoursLeft;
daysElement.innerText = daysLeft;

