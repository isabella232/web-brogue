define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    //Includes all historical variants, so the API response can be prettified
    var VariantLookup = {
        variants: {
            "BROGUEV175": {
                code: "BROGUEV175",
                display: "Brogue 1.7.5",
                consoleColumns: 100,
                consoleRows: 34,
                default: true
            },
            "BROGUEV174": {
                code: "BROGUEV174",
                display: "Brogue 1.7.4 [early 2019]",
                consoleColumns: 100,
                consoleRows: 34,
                disabled: true
            },
            "BROGUEV174DISCORD": {
                code: "BROGUEV174DISCORD",
                display: "Brogue 1.7.4",
                consoleColumns: 100,
                consoleRows: 34
            },
            "GBROGUEV1180211": {
                code: "GBROGUEV1180211",
                display: "gBrogue v1.18.02.11",
                consoleColumns: 100,
                consoleRows: 36
            },
            "UNBROGUEV113": {
                code: "UNBROGUEV113",
                display: "unBrogue v1.1.6",
                consoleColumns: 100,
                consoleRows: 34
            }
        }
    };
    return VariantLookup;
});