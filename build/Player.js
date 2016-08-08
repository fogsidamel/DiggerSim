"use strict";
function bonusCrit(p) {
    return Math.max(0, p.speed * 0.005);
}
exports.bonusCrit = bonusCrit;
function bonusRegen(p) {
    return Math.max(0, p.dodge * 0.005);
}
exports.bonusRegen = bonusRegen;
function dodgeChange(p) {
    return Math.max(0, p.dodge / (100 + p.dodge));
}
exports.dodgeChange = dodgeChange;
function baseDamage(state) {
    let p = state.attacker;
    return (0.2 * p.power + 0.1 * p.currentPower) * trueMult(state);
}
exports.baseDamage = baseDamage;
function defenseMult(p) {
    return 1 - p.defense / (100 + p.defense);
}
exports.defenseMult = defenseMult;
function trueMult(state) {
    if (state.attacker.true <= state.target.true)
        return 1.0;
    return 1 + (state.attacker.true - state.target.true) / 100;
}
