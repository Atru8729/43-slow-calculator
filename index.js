const calculator = require('./calculator');

(async () => {

    const a = await calculator(2, 5);
    // 7

    const b = await calculator(22, 55);
    // 77

    const c = await calculator(222, 555);
    // 777

    console.log(a, b, c);
})();