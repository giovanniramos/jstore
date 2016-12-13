/*!
 * jstore.js [v1.0.0]
 * https://github.com/giovanniramos/jstore
 *
 * Copyright (c) 2016 Giovanni Ramos
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
; (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jstore'], factory);                  // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jstore'));  // Node
    } else {
        root.jstore = factory(root.jstore);           // Browser globals
    }
} (this, function (jstore) {
    "use strict";

    // Check browser support
    var _checkBrowserSupport = function (obj, src) {
        return (typeof (Storage) !== "undefined") ? true : false;
    };

    // Merge objects
    var _mergeObjects = function (obj, src) {
        for (var key in src)
            if (src.hasOwnProperty(key))
                obj[key] = src[key];
        return obj;
    };

    // Public methods
    return {
        // Add session localStorage
        set: function (key, val) {
            _checkBrowserSupport();
            if (val === undefined)
                return alert('[jstore-js]\nERROR: This session variable "' + key + '" contains an undefined value.');
            var object = this.get(key);
            if (object == null) {
                return localStorage.setItem(key, JSON.stringify(val));
            } else {
                var newObject = _mergeObjects(object, val);
                return localStorage.setItem(key, JSON.stringify(newObject));
            }
        },
        // Get session localStorage
        get: function (key) {
            _checkBrowserSupport();
            var val = localStorage.getItem(key);
            return (val !== "undefined") ? JSON.parse(val) : null;
        },
        // Checks the a session exists in localStorage
        has: function(key) {
            return this.get(key) !== null ? true : false; 
        },
        // Count the total of sessions created in localStorage
        count: function () {
            _checkBrowserSupport();
            return localStorage.length;
        },
        // Iterate over all sessions created in localStorage
        each: function (callback) {
            _checkBrowserSupport();
            for (var i=0; i < this.count(); i++) {
                var key = localStorage.key(i)
                callback(key, this.get(key))
            }
        },
        // Remove the session
        remove: function (key) {
            _checkBrowserSupport();
            localStorage.removeItem(key);
        },
        // Clear all sessions in localStorage
        clear: function () {
            _checkBrowserSupport();
            localStorage.clear();
        }
    };
}));