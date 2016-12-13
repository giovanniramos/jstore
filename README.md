jStore
================

A small library to storing JSON objects in the client browser with HTML5 localStorage.

Usage
-----

```js
// Session name
var SESSION_NAME = "YourSessionName";

// Add data in session localStorage
jstore.set(SESSION_NAME, { year: "2016" });

// Display the value in the console
console.log(jstore.get(SESSION_NAME).year);

// Change session data
jstore.set(SESSION_NAME, { year: "2017" });

// Display the value in the console
console.log(jstore.get(SESSION_NAME).year);

// Personal data
var personalData = {
	"firstName": "John",
	"lastName": "Doe",
	"age": "35",
};

// Add more data in session
jstore.set(SESSION_NAME, personalData);

// Add Array data in session
jstore.set(SESSION_NAME, { magazine: [ "FORBES", "VOGUE" ] });

// Check if you have data in session
var hasData = jstore.has(SESSION_NAME);

// Recover data from session
var data = jstore.get(SESSION_NAME);

// Displays the values in the console
console.log(data.firstName);
console.log(data.magazine[0]);

// Count total sessions created
var count = jstore.count();

// Displays data for all created sessions
jstore.each(function(k, v) {
	console.log(k,':',v);
});

// Clears data from a specific session in localStorage
jstore.remove(SESSION_NAME);

// Clears all data from the localStorage
jstore.clear();
```