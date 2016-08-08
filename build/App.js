"use strict";
const Game = require('./Game');
const Skills = require('./Skill');
const p1 = {
    name: 'Fog',
    power: 5800000,
    speed: 40,
    defense: 234,
    dodge: 133,
    true: 66,
    skills: [
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        //{ name: 'Very Recognizable.', undodgeable: true, procChance: 0.03, dmgFactor: 1.0, specialEffect: Skills.specialOpponentOnlyDealsOneDamage(), regenBase: Skills.regenDamage(1.2) }, // assuming it did what the description said
        { name: 'Sunset Claws', isCrit: true, procChance: 0.5, dmgFactor: 3.0, onlyTriggersOnce: true, canProc: Skills.canProcRoundMin(12) },
        { name: 'Titan Strength', procChance: 0.02, onlyTriggersOnce: true, regenBase: Skills.regenOverall(0.42) },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },
        { name: 'Live-giving Rains', procChance: 0.05, regenBase: Skills.regenOverall(0.25) },
        { name: 'Glittering Protection', procChance: 0.1, regenBase: Skills.regenOverall(0.17) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: 'Elegy', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.2, onlyTriggersOnce: true },
        { name: 'Judgement', procChance: 0.06, dmgFactor: 2.0, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Lightflash', isCrit: true, procChance: 0.05, dmgFactor: 2.0 },
        { name: 'Heaven\'s Chosen King', procChance: 0.05, regenBase: Skills.regenEnemyOverall(0.12) },
        { name: 'Gravity Powers', procChance: 0.3, regenBase: Skills.regenEnemyOverall(0.09) },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 }
    ]
};
const p2 = {
    name: 'Grim',
    power: 6340000,
    speed: 207,
    defense: 94,
    dodge: 53,
    true: 92,
    skills: [
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Song Eternal', undodgeable: true, ignoreDefense: true, procChance: 0.5, dmgFactor: 1.0, canProc: Skills.canProcRoundMin(6) },
        { name: 'San-he Samurai', undodgeable: true, ignoreDefense: true, procChance: 0.06, dmgFactor: 1.05 },
        { name: 'Golden KELA', isCrit: true, procChance: 0.04, dmgFactor: 2.1 },
        { name: 'Darkest Lightyear', isCrit: true, procChance: 0.05, dmgFactor: 3.5, canProc: Skills.canProcRoundMax(5), isTeam: true },
        { name: 'Sword of the Dawn', isCrit: true, procChance: 0.05, dmgFactor: 1.9 },
        { name: 'Sword of the Dawn', isCrit: true, procChance: 0.05, dmgFactor: 1.9 },
        { name: 'Kaleidoscope', procChance: 0.04, isCopy: true },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },
        { name: 'Gail Run', isCrit: true, procChance: 0.02, dmgFactor: 4.44, onlyTriggersOnce: true },
        { name: 'Violet Blade', isCrit: true, procChance: 0.03, dmgFactor: 2.4 },
        { name: 'Nothing to Waste', isCrit: true, procChance: 0.1, dmgFactor: 1.8 },
        { name: 'Orignami Cranes', isCrit: true, procChance: 0.08, dmgFactor: 1.9 },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 },
        { name: 'No Copy, No Paste', isCrit: true, procChance: 0.25, dmgFactor: 1.2 },
    ]
};
let game = Game.create(p1, p2);
Game.simulate(game);
function winrate() {
    let winners = new Map();
    winners.set(p1.name, 0);
    winners.set(p2.name, 0);
    let runs = 1000, total = 0;
    for (let i = 0; i < runs; i++) {
        let w = Game.simulate(game, runs > 1);
        if (w) {
            total++;
            winners.set(w.name, winners.get(w.name) + 1);
        }
    }
    console.log(`${p1.name}: ${(100 * winners.get(p1.name) / total).toFixed(0)}%, ${p2.name}: ${(100 * winners.get(p2.name) / total).toFixed(0)}%`);
}
winrate();
