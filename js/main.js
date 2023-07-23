// RICHIESTE UTENTE
const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");

// DICHIARO I MIEI BOTTONI
const buttonSend = document.getElementById("buttom-send");
const buttonRemove = document.getElementById("button-remove");

// DICHIARO I MIEI OUTPUT
const ticketName = document.getElementById("ticket-name");
const ticketSurname = document.getElementById("ticket-surname");
const ticketPrice = document.getElementById("ticket-price");
const ticketDiscount = document.getElementById("ticket-discount");

// COLLEGO L INPUT NAME AL TICKET
buttonSend.addEventListener("click", function () {
  // INPUT NAME
  const inputName = userName.value;
  ticketName.innerHTML = inputName;
  console.log(inputName);

  // INPUT SURNAME
  const inputSurname = userSurname.value;
  ticketSurname.innerHTML = inputSurname;
  console.log(inputSurname);

  const inputKm = userKm.value;

  const inputAge = userAge.value;

  // TARIFFARIO FISSO
  const priceKm = 0.21;

  // DISCOUNT
  let discountTicket = 0;

  // PREZZO EFFETTIVO DEL BIGLIETTO
  const priceTicket = inputKm * priceKm;

  // DICHIARO LA VARIABILE DISCOUNT
  if (inputAge < 18) {
    discountTicket = priceTicket * 0.2;
  } else if (inputAge > 65) {
    discountTicket = priceTicket * 0.4;
  }

  // DICHIARO IL PREZZO FINALE DEL BIGLIETTO
  const finalPrice = priceTicket - discountTicket;
  console.log(finalPrice);

  // STAMPO A SCHERMO IL COSTO DEL BIGLIETTO
  const outputPrice = (document.getElementById("final-ticket-price").innerHTML =
    "Il costo del biglietto è: €" + finalPrice.toFixed(2));
  // STAMPO A SCHERMO LO SCONTO DEL BIGLIETTO
  const outputDiscount = (document.getElementById("ticket-discount").innerHTML =
    "E' stato applicato uno sconto di: €" + discountTicket.toFixed(2));
});
