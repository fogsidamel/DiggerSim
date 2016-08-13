"use strict";
const Player = require('./Player');
exports.Attack = {
    name: 'Attack!',
    procChance: 1,
    procCount: 0
};
function calcCanProc(state, skill) {
    if (skill.procChance < state.minSkillProc || skill.procChance > state.maxSkillProc)
        return false;
    if (skill.procCount >= 5 || (skill.onlyTriggersOnce && skill.procCount >= 1))
        return false;
    if (skill.canProc)
        return skill.canProc(state);
    if (skill.isCopy && !state.lastSkill)
        return false;
    return true;
}
exports.calcCanProc = calcCanProc;
function calcDmg(state, skill) {
    if (state.onlyDoOneDamage)
        return 1.0;
    let base = Player.baseDamage(state);
    if (!skill.ignoreDefense)
        base *= Player.defenseMult(state.target);
    let factor = skill.dmgFactor === void 0 ? 1.0 : skill.dmgFactor;
    if (skill.isCrit)
        factor += Player.bonusCrit(state.attacker);
    return base * factor;
}
exports.calcDmg = calcDmg;
function calcRegen(state, skill, attackDmg) {
    if (!skill.regenBase)
        return 0;
    return (1 + Player.bonusRegen(state.attacker)) * skill.regenBase(state, attackDmg);
}
exports.calcRegen = calcRegen;
function applySpecial(state, skill) {
    state.onlyDoOneDamage = false;
    state.minSkillProc = 0;
    state.maxSkillProc = 1;
    if (skill.specialEffect) {
        skill.specialEffect(state);
    }
}
exports.applySpecial = applySpecial;
/**
 * Proc filters
 */
function canProcRoundMin(r) {
    return s => s.round >= r;
}
exports.canProcRoundMin = canProcRoundMin;
function canProcRoundMax(r) {
    return s => s.round <= r;
}
exports.canProcRoundMax = canProcRoundMax;
function canProcWhenPowerIsBelow(fraction) {
    return s => s.attacker.currentPower / s.attacker.power < fraction;
}
exports.canProcWhenPowerIsBelow = canProcWhenPowerIsBelow;
function canProcWhenPowerIsAbove(fraction) {
    return s => s.attacker.currentPower / s.attacker.power > fraction;
}
exports.canProcWhenPowerIsAbove = canProcWhenPowerIsAbove;
/**
 * Regen skills
 */
function regenOverall(f) {
    return s => s.attacker.power * f;
}
exports.regenOverall = regenOverall;
function regenCurrent(f) {
    return s => s.attacker.currentPower * f;
}
exports.regenCurrent = regenCurrent;
function regenEnemyOverall(f) {
    return s => s.target.power * f;
}
exports.regenEnemyOverall = regenEnemyOverall;
function regenEnemyCurrent(f) {
    return s => s.target.currentPower * f;
}
exports.regenEnemyCurrent = regenEnemyCurrent;
function regenDamage(f) {
    return (s, dmg) => dmg * f;
}
exports.regenDamage = regenDamage;
/**
 * Special effects
 */
function specialOpponentOnlyDealsOneDamage() {
    return s => { s.onlyDoOneDamage = true; };
}
exports.specialOpponentOnlyDealsOneDamage = specialOpponentOnlyDealsOneDamage;
function specialRestrictProcChance(min, max) {
    return s => {
        s.minSkillProc = min;
        s.maxSkillProc = max;
    };
}
exports.specialRestrictProcChance = specialRestrictProcChance;
