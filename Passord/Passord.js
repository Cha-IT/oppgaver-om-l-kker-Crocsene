const riktigPassord = "Sigma";
let brukerPassord = "";

while (brukerPassord !== riktigPassord) {
    brukerPassord = prompt("Vennligst skriv inn passordet:");
    
    if (brukerPassord === riktigPassord) {
        alert("Riktig passord! Velkommen.");

    } else if (brukerPassord === null) {
        alert("Du har avbrutt.");
        break;
    } else {
        alert("Feil passord, prøv igjen.");
    }
}
