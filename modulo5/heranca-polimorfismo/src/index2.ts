import { Client } from "./Interfaces/Client";

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
}

console.log(client.name,client.registrationNumber,client.consumedEnergy,client.calculateBill())