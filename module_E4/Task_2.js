const trial = {
    first:1,
    second:'Hello word'
};
const b = 'Hello word'
const c = 'second'
function hasName(a, trial) {
    return a in trial;
}
console.log(hasName(b, trial))
console.log(hasName(c, trial))