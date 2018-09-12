// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        let hCount = Math.floor(currency / 50);
        currency = currency % 50;
        if (hCount > 0) {
            result.H = hCount;
        }

        let qCount = Math.floor(currency / 25);
        currency = currency % 25;
        if (qCount > 0) {
            result.Q = qCount;
        }

        let dCount = Math.floor(currency / 10);
        currency = currency % 10;
        if (dCount > 0) {
            result.D = dCount;
        }

        let nCount = Math.floor(currency / 5);
        currency = currency % 5;
        if (nCount > 0) {
            result.N = nCount;
        }

        if (currency > 0) {
            result.P = currency;
        }
    }
    return result;
};
