console.log("hello world");
party = {
  slot1: 23,
  slot2: null,
  slot3: null
};
let change = false;
for (const slot in party) {
  if(!party[slot] && !change) {
    party[slot] = 1; 
    change = true;
  }
}
class Player {

};
console.log(party);
console.log(change);

let x = new Player();

console.log(typeof x.constructor.name);
console.log(party["slot1"])