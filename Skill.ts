

import { State } from './Game'
import * as Player from './Player'

export type CanProcFunc = (s: State) => boolean;
export type RegenFunc = (s: State, attackDmg?: number) => number;
export type SpecialFunc = (s: State) => void;

export interface Skill {
    name: string,

    procChance: number,
    canProc?: CanProcFunc,
         
    undodgeable?: boolean,
    ignoreDefense?: boolean,
    isCrit?: boolean,
    dmgFactor?: number,

    regenBase?: RegenFunc, 
    specialEffect?: SpecialFunc,

    onlyTriggersOnce?:boolean,
    isTeam?: boolean,

    isCopy?: boolean,

    procCount?: number,
} 

export const Attack: Skill = {
    name: 'Attack!',
    procChance: 1,
    procCount: 0
}

export function calcCanProc(state: State, skill: Skill) {
    if (skill.procChance < state.minSkillProc || skill.procChance > state.maxSkillProc) return false;
    if (skill.procCount >= 5 || (skill.onlyTriggersOnce && skill.procCount >= 1)) return false;
    if (skill.canProc) return skill.canProc(state);
    if (skill.isCopy && !state.lastSkill) return false; 
    return true;
}

export function calcDmg(state: State, skill: Skill): number {
    if (state.onlyDoOneDamage) return 1.0;
    let base = Player.baseDamage(state);
    if (!skill.ignoreDefense) base *= Player.defenseMult(state.target); 
    let factor = skill.dmgFactor === void 0 ? 1.0 : skill.dmgFactor;
    if (skill.isCrit) factor += Player.bonusCrit(state.attacker);
    return base * factor; 
}

export function calcRegen(state: State, skill: Skill, attackDmg: number): number {
    if (!skill.regenBase) return 0;
    return (1 + Player.bonusRegen(state.attacker)) * skill.regenBase(state, attackDmg);
}

export function applySpecial(state: State, skill: Skill) {
    state.onlyDoOneDamage = false;
    state.minSkillProc = 0;
    state.maxSkillProc = 1;
    if (skill.specialEffect) {
        skill.specialEffect(state);
    }
}

/**
 * Proc filters
 */

export function canProcRoundMin(r: number): CanProcFunc {
    return s => s.round >= r;
}

export function canProcRoundMax(r: number): CanProcFunc {
    return s => s.round <= r;
}

export function canProcWhenPowerIsBelow(fraction: number): CanProcFunc {
    return s => s.attacker.currentPower / s.attacker.power < fraction;
}

export function canProcWhenPowerIsAbove(fraction: number): CanProcFunc {
    return s => s.attacker.currentPower / s.attacker.power > fraction;
}

/**
 * Regen skills
 */

export function regenOverall(f: number): RegenFunc {
    return s => s.attacker.power * f;
}

export function regenCurrent(f: number): RegenFunc {
    return s => s.attacker.currentPower * f;
}

export function regenEnemyOverall(f: number): RegenFunc {
    return s => s.target.power * f;
}

export function regenEnemyCurrent(f: number): RegenFunc {
    return s => s.target.currentPower * f;
}

export function regenDamage(f: number): RegenFunc {
    return (s, dmg) => dmg * f;
}

/**
 * Special effects
 */

export function specialOpponentOnlyDealsOneDamage(): SpecialFunc {
    return s => { s.onlyDoOneDamage = true };
}

export function specialRestrictProcChance(min: number, max: number): SpecialFunc {
    return s => {
        s.minSkillProc = min;
        s.maxSkillProc = max;
    }
}