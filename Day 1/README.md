* How to run a script outside the browser?
To run a script outside browser, you need a .js file. To run it the command used is as follows:
node filename.js

* What are packages?
Packages are essentially a piece of code, written by someone else (or by you as well) and made available publically so that it can be used by others as well. Something similar to OPEN-SOURCE and stuff probably.

* How to access those packages?
For this go to npmjs (https://www.npmjs.com/)

* How do I use those packages though?
These packages prior to being used, need to be installed for which you need the following command:
npm i <package_name>
Here, npm i cat-me

* What after installing those packages?
We need to make a file to use those packages using the require or import command.
An example is as follows:
const catMe=require("cat-me")
console.log(catMe()); 

* What about package.json?
Our code has cat-me package as the main dependency so it will be present in the package.json folder

* What about package-lock.json?
The package cat-me also depends on further packages, package-lock.json has dependencies for our 
code as well as those for the cat-me package and it continues further down as cat-me needs some 
package x, package x might need some package y and so on...

* What about node-modules?
It includes the code for the dependencies so that you can you them. (For both package.json and package-lock.json)

* What is a server?
It is essentially a machine with OS, RAM, Processor and storage and is only programmed to give a proper response to a users request.

* Creating a server using express, but how?
Firstly run the command:
npm init -y
REFER TO DAY-1 CONTD
