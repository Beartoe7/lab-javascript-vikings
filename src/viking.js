// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
constructor(){
this.vikingArmy = [];
this.saxonArmy = [];
}
addViking(viking){
 this.vikingArmy.push(viking);    
}
addSaxon(saxon){
    this.saxonArmy.push(saxon);
}
attack(attackerArmy, defenderArmy){
    let randomDefenderIndex = Math.floor((Math.random()*defenderArmy.length));
    let randomAttackerIndex = Math.floor((Math.random()*attackerArmy.length));
    let randomDefender =defenderArmy[randomDefenderIndex];
    let randomAttacker = attackerArmy[randomAttackerIndex]  ;

    let result = randomDefender.receiveDamage(randomAttacker.strength);
    if (randomDefender.health <= 0) this.defenderArmy.splice(randomDefenderIndex, 1);
    return result;
}

vikingAttack(){
    this.attack(this.vikingArmy, this.saxonArmy)
}

saxonAttack(){
    this.attack(this.saxonArmy, this.vikingArmy)

}
showStatus(){
if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
else if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
else return "Saxons have fought for their lives and survived another day..."
}
}
