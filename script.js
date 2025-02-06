const vehicles = [
  // Liste af forskellige køretøjer med information om type, brændstof, passagerer osv.
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Finder tabel-kroppen og knapper i HTML
const tbodyPointer = document.querySelector("tbody");
const buttons = document.querySelectorAll("button");

// Funktion til at vise en liste af køretøjer i tabellen
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    let row = `<tr>
      <td>${each.type || "N/A"}</td>
      <td>${each.fuel || "N/A"}</td>
      <td>${each.passengers || "0"}</td>
      <td>${each.stops ? each.stops.join(", ") : "N/A"}</td>
      <td>${each.ownedBy || "N/A"}</td>
      <td>${each.isElectric ? "Ja" : "Nej"}</td>
      <td>${each.isTandem ? "Ja" : "Nej"}</td>
    </tr>`;
    tbodyPointer.innerHTML += row;
  });
}

// Viser alle køretøjer ved start
showTheseVehicles(vehicles);

// Tilføjer klikfunktioner til knapperne, så de filtrerer køretøjerne
buttons.forEach((button, index) => {
  button.onclick = function () {
    let filtered = vehicles.filter((v) => {
      if (index === 0) return v.isElectric; // Viser kun el-drevne køretøjer
      if (index === 1) return v.passengers > 2; // Viser kun køretøjer med mere end 2 sæder
      if (index === 2) return v.isElectric && v.ownedBy === "Jonas"; // El-drevne køretøjer ejet af Jonas
      if (index === 3) return v.fuel === "Rugbrød" && v.passengers > 1; // Rugbrødsdrevne køretøjer med mere end én plads
      return true; // Standard: viser alle køretøjer
    });
    showTheseVehicles(filtered);
  };
});
