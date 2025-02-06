const vehicles = [
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

const tbodyPointer = document.querySelector("tbody");
const buttons = document.querySelectorAll("button");

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

showTheseVehicles(vehicles);

buttons.forEach((button, index) => {
  button.onclick = function () {
    let filtered = vehicles.filter((v) => {
      if (index === 0) return v.isElectric;
      if (index === 1) return v.passengers > 2;
      if (index === 2) return v.isElectric && v.ownedBy === "Jonas";
      if (index === 3) return v.fuel === "Rugbrød" && v.passengers > 1;
      return true;
    });
    showTheseVehicles(filtered);
  };
});
