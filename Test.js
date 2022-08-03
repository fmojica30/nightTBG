console.log("hello world");

party = {
  slot1: null,
  slot2: null,
  slot3: null
};

let testObject = {
  key: "slot1"
};

party.slot1 = testObject;


let test = party.slot1;

console.log(test.key);
console.log(party.testObject.key);