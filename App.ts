import * as Game from './Game'
import { Player } from './Player'
import * as Skills from './Skill'

const p1: Player = {
    name: 'Fog',
    power: 6000000,
    speed: 50,
    defense: 195,
    dodge: 126,
    true: 87,
    skills: <Skills.Skill[]>[
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        //{ name: 'Sunset Claws', isCrit: true, procChance: 0.5, dmgFactor: 3.0, onlyTriggersOnce: true, canProc: Skills.canProcRoundMin(12) },
        { name: 'Titan Strength', procChance: 0.02, onlyTriggersOnce: true, regenBase: Skills.regenOverall(0.42) },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },
        { name: 'Live-giving Rains', procChance: 0.05, regenBase: Skills.regenOverall(0.25) },
        //{ name: 'Glittering Protection', procChance: 0.1, regenBase: Skills.regenOverall(0.17) },
        //{ name: 'Plundering Storm', procChance: 0.08, regenBase: Skills.regenOverall(0.3) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Heaven\'s Chosen King', procChance: 0.05, regenBase: Skills.regenEnemyOverall(0.12) },
        //{ name: 'New enemy heal', procChance: 0.18, regenBase: Skills.regenEnemyCurrent(0.22) },
        //{ name: 'Underachieving dragon', procChance: 0.06, regenBase: Skills.regenCurrent(0.4), canProc: Skills.canProcWhenPowerIsAbove(0.4) },
        { name: 'Righteous Telekinesis', procChance: 0.25, regenBase: Skills.regenCurrent(0.16) },
        { name: 'San-he Samurai', undodgeable: true, ignoreDefense: true, procChance: 0.06, dmgFactor: 1.05 },
        { name: 'Infinite Incarnations', undodgeable: true, ignoreDefense: true, procChance: 0.01, dmgFactor: 1.5 },
        { name: 'Confucius Say', undodgeable: true, ignoreDefense: true, procChance: 0.1, dmgFactor: 1.0, isTeam: true },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: 'Disciples Everywhere', undodgeable: true, ignoreDefense: true, procChance: 0.07, dmgFactor: 1.05 },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 },
    ]
} 

const p2: Player = {
    name: 'Grim',
    power: 6650000,
    speed: 200,
    defense: 74,
    dodge: 51,
    true: 110,
    skills: <Skills.Skill[]>[
        { name: 'Gail Run', isCrit: true, procChance: 0.02, dmgFactor: 4.44, onlyTriggersOnce: true },
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Rising Kick', isCrit: true, procChance: 0.06, dmgFactor: 2.5 },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: '100,000 Volts', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.1, specialEffect: Skills.specialRestrictProcChance(0.05, 1.0) },
        { name: 'San-he Samurai', undodgeable: true, ignoreDefense: true, procChance: 0.06, dmgFactor: 1.05 },        
        { name: 'Golden KELA', isCrit: true, procChance: 0.04, dmgFactor: 2.1 },
        { name: 'Darkest Lightyear', isCrit: true, procChance: 0.05, dmgFactor: 3.5, canProc: Skills.canProcRoundMax(5), isTeam: true },
        { name: 'Sword of the Dawn', isCrit: true, procChance: 0.05, dmgFactor: 1.9 },
        { name: 'Sword of the Dawn', isCrit: true, procChance: 0.05, dmgFactor: 1.9 },
        { name: 'Kaleidoscope', procChance: 0.04, isCopy: true },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },        
        { name: 'Nothing to Waste', isCrit: true, procChance: 0.1, dmgFactor: 1.8 },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 },
        { name: 'No Copy, No Paste', isCrit: true, procChance: 0.25, dmgFactor: 1.2 },
    ]
} 

let a = p1, b = p2;
let game = Game.create(a, b);

Game.simulate(game);

function winrate() {
    let winners = new Map<string, number>();
    winners.set(a.name, 0);
    winners.set(b.name, 0);
    let runs = 5000, total = 0;
    for (let i = 0; i < runs; i++) {
        let w = Game.simulate(game, runs > 1);
        if (w) { 
            total++;
            winners.set(w.name, winners.get(w.name) + 1);
        }
    }

    console.log(`${a.name}: ${(100 * winners.get(a.name) / total).toFixed(0)}%, ${b.name}: ${(100 * winners.get(b.name) / total).toFixed(0)}%`);
}

winrate();