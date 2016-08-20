import * as Game from './Game'
import { Player } from './Player'
import * as Skills from './Skill'

const p1: Player = {
    name: 'Fog',
    power: 6240000,
    speed: 50,
    defense: 195 - 35 + 25,
    dodge: 126,
    true: 87 + 22,
    skills: <Skills.Skill[]>[
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        //{ name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        //{ name: 'Sunset Claws', isCrit: true, procChance: 0.5, dmgFactor: 3.0, onlyTriggersOnce: true, canProc: Skills.canProcRoundMin(12) },
        { name: 'Titan Strength', procChance: 0.02, onlyTriggersOnce: true, regenBase: Skills.regenOverall(0.42) },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },
        { name: 'Live-giving Rains', procChance: 0.05, regenBase: Skills.regenOverall(0.25) },
        { name: 'Glittering Protection', procChance: 0.1, regenBase: Skills.regenOverall(0.17) },
        { name: 'Plundering Storm', procChance: 0.08, regenBase: Skills.regenOverall(0.3) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        //{ name: 'Heaven\'s Chosen King', procChance: 0.05, regenBase: Skills.regenEnemyOverall(0.12) },
        //{ name: 'New enemy heal', procChance: 0.18, regenBase: Skills.regenEnemyCurrent(0.22) },
        //{ name: 'Underachieving dragon', procChance: 0.06, regenBase: Skills.regenCurrent(0.4), canProc: Skills.canProcWhenPowerIsAbove(0.4) },
        { name: 'Righteous Telekinesis', procChance: 0.25, regenBase: Skills.regenCurrent(0.16) },
        //{ name: 'Gravity Powers', procChance: 0.30, regenBase: Skills.regenEnemyOverall(0.09) },
        //{ name: 'Elegy', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.2, onlyTriggersOnce: true },
        //{ name: 'Lightflash', isCrit: true, procChance: 0.05, dmgFactor: 2.0 },
        { name: 'San-he Samurai', undodgeable: true, ignoreDefense: true, procChance: 0.06, dmgFactor: 1.05 },
        { name: 'Infinite Incarnations', undodgeable: true, ignoreDefense: true, procChance: 0.01, dmgFactor: 1.5 },
        { name: 'Confucius Say', undodgeable: true, ignoreDefense: true, procChance: 0.1, dmgFactor: 1.0, isTeam: true },
        { name: 'Chou Hi Crit', isCrit: true, procChance: 0.06, dmgFactor: 2.3 },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        { name: 'Disciples Everywhere', undodgeable: true, ignoreDefense: true, procChance: 0.07, dmgFactor: 1.05 },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 },
    ]
} 

const p2: Player = {
    name: 'Grim',
    power: 6820000,
    speed: 206,
    defense: 84,
    dodge: 41,
    true: 117,
    skills: <Skills.Skill[]>[
        { name: 'Gail Run', isCrit: true, procChance: 0.02, dmgFactor: 4.44, onlyTriggersOnce: true },
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Rising Kick', isCrit: true, procChance: 0.06, dmgFactor: 2.5 },
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


const p1top: Player = {
    name: 'Fog',
    power: 1550000 + 1 * 50000,
    speed: 74,
    defense: 197,
    dodge: 158,
    true: 174,
    skills: <Skills.Skill[]>[
        { name: 'Knife Hunt', undodgeable: true, ignoreDefense: true, procChance: 0.03, dmgFactor: 1.15, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        //{ name: 'Sunset Claws', isCrit: true, procChance: 0.5, dmgFactor: 3.0, onlyTriggersOnce: true, canProc: Skills.canProcRoundMin(12) },
        { name: 'Titan Strength', procChance: 0.02, onlyTriggersOnce: true, regenBase: Skills.regenOverall(0.42) },
        //{ name: 'Sword in the Stone', isCrit: true, procChance: 0.05, dmgFactor: 2.2 },
        { name: 'Deathless Witch', procChance: 0.03, regenBase: Skills.regenOverall(0.35) },
        { name: 'Devils and Witches', procChance: 0.05, regenBase: Skills.regenOverall(0.4), isTeam: true },
        //{ name: 'Live-giving Rains', procChance: 0.05, regenBase: Skills.regenOverall(0.25) },
        { name: 'Axxi', procChance: 0.04, regenBase: Skills.regenOverall(0.26) },
        { name: 'Axxi', procChance: 0.04, regenBase: Skills.regenOverall(0.26) },
        { name: 'Nene', procChance: 0.05, regenBase: Skills.regenOverall(0.21) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Time Retracing', procChance: 0.08, regenBase: Skills.regenEnemyOverall(0.15) },
        { name: 'Rotating Machine Gun', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.15, onlyTriggersOnce: true, specialEffect: Skills.specialRestrictProcChance(0.06, 1.0) },
        //{ name: 'Heaven\'s Chosen King', procChance: 0.05, regenBase: Skills.regenEnemyOverall(0.12) },
        //{ name: 'Glittering Protection', procChance: 0.1, regenBase: Skills.regenOverall(0.17) },
        { name: 'Elegy', undodgeable: true, ignoreDefense: true, procChance: 0.05, dmgFactor: 1.2, onlyTriggersOnce: true },
        { name: 'Lightflash', isCrit: true, procChance: 0.05, dmgFactor: 2.0 },
        { name: 'San-he Samurai', undodgeable: true, ignoreDefense: true, procChance: 0.06, dmgFactor: 1.05 },
        { name: 'Confucius Say', undodgeable: true, ignoreDefense: true, procChance: 0.1, dmgFactor: 1.0, isTeam: true },
        { name: 'Infinite Incarnations', undodgeable: true, ignoreDefense: true, procChance: 0.01, dmgFactor: 1.5 },
        { name: 'Righteous Telekinesis', procChance: 0.25, regenBase: Skills.regenCurrent(0.16) },
        { name: 'Disciples Everywhere', undodgeable: true, ignoreDefense: true, procChance: 0.07, dmgFactor: 1.05 },
        { name: 'Bloody Cleaver', isCrit: true, procChance: 0.15, dmgFactor: 1.5 },
        { name: 'Gaia', procChance: 0.30, regenBase: Skills.regenEnemyOverall(0.09) },
    ]
} 

const topBoss: Player = {
    name: 'ToP',
    power: 2000000,
    speed: 125,
    defense: 125,
    dodge: 135,
    true: 200,
    skills: <Skills.Skill[]>[
        { name: 'HAilstorm', procChance: 0.5, dmgFactor: 1.25, specialEffect: Skills.specialRestrictProcChance(0.05, 1.0) },
        { name: 'Boulder', isCrit: true, procChance: 0.5, dmgFactor: 1.5 },
        //{ name: 'Deadly Spikes', isCrit: true, procChance: 0.5, dmgFactor: 1.75 },
        //{ name: 'Guardian Strength', undodgeable: true, procChance: 0.99, regenBase: Skills.regenOverall(0.17) },
    ]
} 

const topBossR4: Player = {
    name: 'ToP-R4',
    power: 1850000,
    speed: 109,
    defense: 99,
    dodge: 99,
    true: 165,
    skills: <Skills.Skill[]>[
        { name: 'Shield Wall 1', undodgeable: true, procChance: 0.08, dmgFactor: 0.3, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Shield Wall 1', undodgeable: true, procChance: 0.08, dmgFactor: 0.3, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Shield Wall 1', undodgeable: true, procChance: 0.08, dmgFactor: 0.3, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Shield Wall 1', undodgeable: true, procChance: 0.08, dmgFactor: 0.3, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Sprint Array', undodgeable: true, ignoreDefense: true, procChance: 0.25, dmgFactor: 1.25 },
        { name: 'Guardian Strength 2', ignoreDefense: true, procChance: 0.4, regenBase: Skills.regenOverall(0.28) },
        { name: 'Shield Wall 2', procChance: 0.08, dmgFactor: 0.45, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Shield Wall 2', procChance: 0.08, dmgFactor: 0.45, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
        { name: 'Shield Wall 2', procChance: 0.08, dmgFactor: 0.45, specialEffect: Skills.specialOpponentOnlyDealsOneDamage() },
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