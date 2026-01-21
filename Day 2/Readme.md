* Things to remember:
When changes are made to the server.js file, if you already have an instance of that file running as a node js server, you will have to re run the server for the changes to take effect  

* What does this mean?
app.get('/',(req,res)=>{
  res.send("Hello World")
})
When user makes a request at / route, he gets sent "Hello World"

* Why assigning 3000 though?
Our OS tend to use port number for processes to communicate with them, so when you run node server.js, your OS runs your code on the port number 3000 as a process.
You can't be assigning already assigned port numbers to your server

* How to deal with the constant changing of our code and restarting of the server
For that use npx nodemon server.js (The name of your file), it watches over your code in case any changes are made or so in the whole of the folder. You will have to install it using npx nodemon server.js though.

* How to deploy your server