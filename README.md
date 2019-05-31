# Spotlight

## About 
A simple Node.js app for searching the news. I got tired of using Apple news and flipboard, all I ever see is Trump headlines. Boo. So here we are, writing code for something that probably already exists. 
Contributions are welcome.

live link: https://spotlight-web.herokuapp.com/

## Tech and API's Used
* Node.js
* EJS for server sided rendering. We are transitioning to React.js
* NewsAPI.org

## Feature List 
* Search for stories by keyword
* Search for stories by category
* Search for news sources 
* View a list of all sources we support 

## Wanted Features
Please check the issues section for features that we would like to add if you are interested in contributing or just need to quench your curiousity. 
Feel free to log an issue and tag it as a feature request if you have an idea for a new feature.
- - - 
# Contributing
### Prerequisites
* Node.js
* Thats it, we're keeping it as simple as we can

### Starting the API server 
1. From a terminal run ```git clone https://github.com/efortney/spotlight.git ```
    * This will clone spotlight into the current directory
2. ``` cd spotlight ```
    * This will place you into the spotlight directory that you just cloned
3. run ``` cd api ```
    * run ``` npm i ```
    * This will install all the dependencies required for the project server. To see the full list, check the package.json file
4. ``` npm start ```
    * This starts the development server, it will run through nodemon at localhost:3001.
    
### Starting the Client Server
1. From the root directory, ``` cd client ```
2. run ``` npm i ```
3. run ``` npm start ``` 

**We are proxying client and api from port 3000 to 3001**
    
### Config.js
The config file is built in order to work with Heroku without exposing our precious. (Lord of the Rings, anyone?)
But really, we don't want any malicious 'contributors' to abuse our api key.
In order for you to develop and contribute, you will need to head over to NewsAPI.org, create an account, and then use the api key that they give you. From the root directory, run ``` touch dev.js ```. Export a module as so:
``` 
    module.exports = {
        apinews : <yourApiKey>
    } 
```

## API Structure 
```
├── README.md
├── config.js
├── controller
│   └── newsapi
│       ├── Categories.js
│       ├── Sources.js
│       ├── Stories.js
│       └── index.js
├── helpers
│   └── index.js
├── index.js
├── package-lock.json
├── package.json
├── tree.txt
└── views
    ├── Categories.ejs
    ├── Home.ejs
    ├── Sources.ejs
    ├── Stories.ejs
    └── partials
        ├── Footer.ejs
        ├── Head.ejs
        ├── Navbar.ejs
        ├── Search.ejs
        ├── SearchCategories.ejs
        └── SearchSources.ejs

5 directories, 21 files
```
