# README.md Day 1

* How to run a script outside the browser?  
To run a script outside browser, you need a .js file. To run it the command used is as follows:  
`node filename.js`

* What are packages?  
Packages are essentially a piece of code, written by someone else (or by you as well) and made available publically so that it can be used by others as well. Something similar to OPEN-SOURCE and stuff probably.

* How to access those packages?  
For this go to npmjs (<https://www.npmjs.com/>)

* How do I use those packages though?  
These packages prior to being used, need to be installed for which you need the following command:  
`npm i <package_name>`  
Here, `npm i cat-me`

* What after installing those packages?  
We need to make a file to use those packages using the require or import command.  
An example is as follows:

```javascript
const catMe = require("cat-me");
console.log(catMe());

