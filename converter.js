function converter(currency) {
    if (currency > 0 || currency === "") {
        currency = currency * 0.033;
        return ('$'+currency.toFixed(2));
    } else {
        return 'Error';
    }
}

module.exports = converter;

//  node_modules/.bin/jest [args]