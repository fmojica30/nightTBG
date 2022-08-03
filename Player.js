class Player {
  constructor(config) {
    this.playerID = config.playerID || 1;
    this.partyLeader = config.partyLeader || null;
    this.party = config.party || {
      slot1: null,
      slot2: null,
      slot3: null
    };
    this.spells = config.spells || {
      slot1: null,
      slot2: null,
      slot3: null
    };
    this.capturedBosses = config.capturedBosses || {
      slot1: null,
      slot2: null
    };
    this.capturedMonsters = config.capturedMonsters || {
      slot1: null,
      slot2: null,
      slot3: null
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

  
}