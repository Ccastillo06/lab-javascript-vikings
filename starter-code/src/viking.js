// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.attack = function () {
  return this.strength;
};

Viking.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage +" points of damage" );
  } else {
    return (this.name + " has died in act of combat" );
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype.attack = function () {
  return this.strength;
};

Saxon.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return ("A Saxon has received " + damage +" points of damage" );
  } else {
    return ("A Saxon has died in combat");
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
  this.saxonArmy[0].health -= this.vikingArmy[0].strength;
  this.saxonArmy.length = 0;

};
