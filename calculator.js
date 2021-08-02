async function calculator(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Bad sum');
            }
        }, 500);
    })
}

module.exports = calculator;