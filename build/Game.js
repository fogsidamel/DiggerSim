"use strict";
const Players = require('./Player');
const Skills = require('./Skill');
function create(a, b) {
    return {
        attacker: a.speed >= b.speed ? a : b,
        target: a.speed >= b.speed ? b : a,
        round: 0,
        hitLastRound: false,
        onlyDoOneDamage: false,
        minSkillProc: 0,
        maxSkillProc: 1,
        lastSkill: void 0
    };
}
exports.create = create;
function resetState(state) {
    state.round = 0;
    state.hitLastRound = false;
    state.minSkillProc = 0;
    state.maxSkillProc = 1;
    state.onlyDoOneDamage = false;
    state.attacker.currentPower = state.attacker.power;
    state.target.currentPower = state.target.power;
    for (let s of state.attacker.skills)
        s.procCount = 0;
    for (let s of state.target.skills)
        s.procCount = 0;
}
function buildSkillArray(state) {
    let skills = [];
    let totalProc = 0;
    for (let s of state.attacker.skills) {
        if (!s.isTeam)
            continue;
        if (Skills.calcCanProc(state, s)) {
            skills.push(s);
            totalProc += s.procChance;
        }
        if (totalProc >= 1)
            break;
    }
    for (let s of state.attacker.skills) {
        if (s.isTeam)
            continue;
        if (Skills.calcCanProc(state, s)) {
            skills.push(s);
            totalProc += s.procChance;
        }
        if (totalProc >= 1)
            break;
    }
    //console.log(skills.map(s => s.name));
    return skills;
}
function pickSkill(skills) {
    let factor = 1.0;
    for (let i = 0; i < skills.length; i++) {
        let r = factor * Math.random();
        let s = skills[i];
        if (r <= s.procChance)
            return s;
        factor = Math.max(0, factor - s.procChance);
    }
    return Skills.Attack;
}
function step(state, silent) {
    let skills = buildSkillArray(state);
    let skill = pickSkill(skills);
    skill.procCount++;
    let actualSkill = skill;
    if (skill.isCopy) {
        actualSkill = state.lastSkill;
    }
    let hit = true;
    if (!actualSkill.undodgeable && !actualSkill.isCrit)
        hit = Math.random() > Players.dodgeChange(state.target);
    let dmg = 0;
    if (hit) {
        dmg = Skills.calcDmg(state, actualSkill);
        Skills.applySpecial(state, actualSkill);
    }
    else {
        state.onlyDoOneDamage = false;
        state.minSkillProc = 0;
        state.maxSkillProc = 1;
    }
    let regen = Skills.calcRegen(state, actualSkill, dmg);
    state.hitLastRound = hit;
    state.target.currentPower -= dmg;
    state.attacker.currentPower += regen;
    if (skill.isCopy)
        state.lastSkill = void 0;
    else
        state.lastSkill = skill;
    if (!silent) {
        console.log(`${state.round + 1} ${state.attacker.name} ${hit ? 'hit' : 'miss'}: ${skill.name}${dmg > 0 ? ' for ' + dmg.toFixed(0).toString() : ''}${regen > 0 ? ' regen ' + regen.toFixed(0).toString() : ''} (${state.attacker.name} ${state.attacker.currentPower.toFixed(0)}, ${state.target.name} ${state.target.currentPower.toFixed(0)})`);
    }
}
function simulate(state, silent) {
    resetState(state);
    while (true) {
        step(state, silent);
        if (state.target.currentPower <= 0) {
            if (!silent)
                console.log(`${state.attacker.name} wins!`);
            return state.attacker;
        }
        let a = state.attacker;
        state.attacker = state.target;
        state.target = a;
        state.round++;
        if (state.round > 99) {
            if (!silent)
                console.log('Simulation stopped...');
            return void 0;
        }
    }
}
exports.simulate = simulate;
