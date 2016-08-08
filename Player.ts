

import { Skill } from './Skill'
import { State } from './Game'

export interface Player {
    name: string,

    power: number,
    speed: number,
    defense: number,
    dodge: number,
    true: number,

    skills: Skill[],

    currentPower?: number,
}

export function bonusCrit(p: Player) {
    return Math.max(0, p.speed * 0.005);
}

export function bonusRegen(p: Player) {
    return Math.max(0, p.dodge * 0.005);
}

// guessing here, mighjt not be the correct formula
export function dodgeChange(p: Player) { 
    return Math.max(0, p.dodge / (100 + p.dodge));
}

export function baseDamage(state: State) {
    let p = state.attacker;
    return (0.2 * p.power + 0.1 * p.currentPower) * trueMult(state);
}

export function defenseMult(p: Player) {
    return 1 - p.defense / (100 + p.defense);
}

function trueMult(state: State) {
    if (state.attacker.true <= state.target.true) return 1.0;
    return 1 + (state.attacker.true - state.target.true) / 100;
}