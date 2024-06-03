# Express.js Overview

Express is a free and open-source web application framework for Node.js. It is a minimal and flexible node application framework that provides robust features for web and mobile application development. One of the main reasons developers prefer using Express over vanilla JavaScript is because Express contains built-in classes and functions that streamline the development process. With Express, complex functionalities can be written in just one or two lines of code. Without Express, achieving the same functionality using core JavaScript would require writing multiple lines of code and building complex logic.

## Setting Up Express

To start using Express, you first need to set up a Node.js project and install Express. This involves generating a `package.json` file and installing the Express package. Let's walk through this process step by step.

### Generating `package.json`

To generate a `package.json` file, open your terminal and run the following command:
```
npm init

```
This command will prompt you with several questions to configure your project. For instance, it will ask for the package name (ensure the name is separated by hyphens if it contains multiple words). Follow the prompts and provide the necessary information to complete the setup.
-------------------------------------------------------------------------------------------------------------

### Installing Express
After generating the package.json file, you need to install Express. To do this, run the following command in your terminal:

```
npm install express

```
This command will download and install the Express package and add it to your project's dependencies.

### Creating app.js

Next, create a file named app.js in your project directory. This file will contain all the configuration related to Express.js. To get started, we need to import Express. Note that Express is a third-party package, so we will import it using the require function.
```
const express = require('express');

```
### Initializing Express
After importing Express, the next step is to initialize it. We do this by assigning the result of calling the express function to a variable, typically named app.

```
let app = express();

```
The app variable now holds an object that provides a variety of methods we can use to build our Node.js application.

Creating a Server
One of the primary tasks in setting up a web server is to create a server that listens for incoming requests. Express provides a method called listen for this purpose. This method takes two arguments: the port number and a callback function that executes once the server starts and is ready to receive requests.
```

const port = 8000;

app.listen(port, () => {
    console.log('Server has started....');
});

```
In this example, we specify port 8000. When the server starts, it will log "Server has started...." to the console.

Handling Routes
Routes in Express are defined using methods that correspond to HTTP methods (GET, POST, etc.). For example, to handle a GET request to the root URL (/), we use the get method. This method takes two arguments: the URL path and a callback function that defines what happens when a request is made to that path. The callback function itself takes two parameters: req (the request object) and res (the response object).
```

app.get('/', (req, res) => {
    res.send('Hi, I am server...');
});

```
In this example, when a GET request is made to the root URL, the server responds with the text "Hi, I am server...".

Setting Status Codes
If you need to set the HTTP status code for your response, you can use the status method before sending the response.
```
app.get('/', (req, res) => {
    res.status(200).send('Same');
});

```
In this example, the server responds with the status code 200 and the text "Same".

Sending JSON Responses
Sometimes, you may need to send a JSON response instead of plain text or HTML. In such cases, use the json method. This ensures the response content type is set to application/json.
```

app.get('/json', (req, res) => {
    res.json({ message: 'Hi, I am server...' });
});

```
In this example, when a GET request is made to /json, the server responds with a JSON object containing the message "Hi, I am server...".

