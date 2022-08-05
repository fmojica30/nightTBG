class Player {
  constructor(config) {
    this.playerID = config.playerID || 1;
    this.partyLeader = config.partyLeader || null;
    this.party = config.party || [
      {
        slot1: null,
        slot2: null,
        slot3: null,
      },
    ];
    this.spells = config.spells || {
      slot1: null,
      slot2: null,
      slot3: null,
    };
    this.capturedBosses = config.capturedBosses || {
      slot1: null,
      slot2: null,
    };
    this.capturedMonsters = config.capturedMonsters || {
      slot1: null,
      slot2: null,
      slot3: null,
    };

    this.isTurn = false;
    this.currentActionPoints = 0;
  }

  beginTurn() {
    this.isTurn = true;
  }

  endTurn() {
    this.isTurn = false;
  }

  useActionPoint(action) {
    if (action === "draw" || action === "spell" || action === "effect") {
      this.currentActionPoints += 1;
    } else if (action === "attack") {
      this.currentActionPoints += 2;
    }

    if (!this.isStillTurn) {
      this.isTurn = false;
    }
  }

  get isStillTurn() {
    return this.currentActionPionts < 3;
  }

  get getPartyLeader() {
    return this.partyLeader;
  }

  set setPartyLeader(pl) {
    this.partyLeader = pl;
  }

  /**
   * Method adds party member, spell, monster or boss and replaces party member or spell
   * @param {string} type can be add or replace to show what the method is supposed to do
   * @param {gameObject} go Will be any type of gameObject connected to players
   * @param {string} changeSlot The change slot inside the object that holds the type
   * @returns true if success and false if failed
   */
  addOrReplaceGameObjectToPlayer(type, go, changeSlot) {
    if ((type = "add")) {
      let attributeToChange;
      switch (go.constructor.name) {
        case "PartyMember":
          attributeToChange = this.party;
          break;
        case "Spell":
          attributeToChange = this.spells;
          break;
        case "Monster":
          attributeToChange = this.capturedMonsters;
          break;
        case "Boss":
          attributeToChange = this.capturedBosses;
          break;
        default:
          return false;
      }

      // changed tracks if there was a change made and does not allo another to be made if
      // if no change was made stays false to signify a full object
      let changed = false;
      for (const slot in attributeToChange) {
        if (!attributeToChange[slot] && !change) {
          attributeToChange[slot] = go;
          changed = true;
        }
      }
      return changed;
    } else if ((type = "replace")) {
      switch (go.constructor.name) {
        case "PartyMember":
          this.party[changeSlot] = go;
          break;
        case "Spell":
          this.spells[changeSlot] = go;
          break;
        default:
          return false;
      }
      return true;
    }
    return false;
  }
}
