'use strict';

// -----------------------------------------
// VARS

// -----------------------------------------
// EXPORT

module.exports = {
    // -----------------------------------------
    // PUBLIC FUNCTIONS

    /**
     * Dashizes string
     * @method  dashize
     * @param   {string} str
     * @return  {string}
     */
    dashize: function (str) {
        str = this._redo(str);

        return str.toLowerCase().replace(/ /g, '-');
    },

    /**
     * Camelcases string
     * @method  camelcase
     * @param   {string} str
     * @param   {boolean} alsoFirst
     * @return  {string}
     */
    camelcase: function (str, alsoFirst) {
        str = this._redo(str);

        if (!str) {
            return;
        }

        // Lower everything and remove hiphenization, underscores and /
        str = str.toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ').replace(/\//g, ' ');

        // Uppercase all
        str = str.replace(/(^|\s)([a-z])/g , function (m, p1, p2) {
            return p1 + p2.toUpperCase();
        });

        // Remove spaces
        str = str.replace(/ /g, '');

        // First shouldn't be camel case
        if (!alsoFirst) {
            str = str[0].toLowerCase() + str.slice(1, str.length);
        }

        return str;
    },

    /**
     * Makes a const out of a route
     * @param  {string} str
     * @return {string}
     */
    constRoute: function (str) {
        // Remove the first slash
        if (str[0] === '/') {
            str = str.slice(1, str.length);
        }

        // Underscorize and uppercase
        str = str.replace(/\//g, '_').toUpperCase();

        return str;
    },

    // -----------------------------------------
    // PRIVATE FUNCTIONS

    /**
     * Redo string and makes sure is a string
     * @method  _redo
     * @param   {string} str
     * @return  {string}
     * @private
     */
    _redo: function (str) {
        return !!str ? ('' + str).trim() : null;
    }
};
