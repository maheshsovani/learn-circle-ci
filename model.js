class Player {
  constructor(name, colour, territories = []) {
    this.name = name;
    this.colour = colour;
    this.territories = territories;
  }
  addTerritory(territory) {
    this.territories.push(territory);
  }
  removeTerritory(territory) {
    const index = this.territories.indexOf(territory);
    this.territories.splice(index, 1);
  }
  isLose() {
    return this.territories.length == 0;
  }
  isWon() {
    return this.territories.length == 42;
  }
}
