# The Open Source News Project 

## About 
The Open Source News Project is a news aggregator that is built with the intention of leaving you out of the picture. It doesnt collect a single drop of data about you in order to keep the news you read as unbiased as possible. Results you see are a direct result of the keyword or topic that you search for. 

live link: https://free-open-news.herokuapp.com/

## Tech and API's Used
* Node.js with Express 
* React
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

### Starting Both With Concurrently
You are now able to start both the API server and the client server with one command. At the root of the project, run ``` npm run populate ```. This will install all dependencies for the api, client, and root directories. Once complete, run ``` npm run dev ``` to start both servers simultaneously. 

**We are proxying client and api from port 3000 to 5001**
    
### Config.js
The config file is built in order to work with Heroku without exposing our private keys.
In order for you to develop or contribute, you will need to head over to NewsAPI.org, create an account, and then use the api key that they give you. From the root directory, run ``` touch dev.js ```. Export a module as so:
``` 
    module.exports = {
        apinews : <yourApiKey>
    } 
```

## Project Structure 
```
├── LICENSE
├── README.md
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src
│   │   ├── actions
│   │   │   └── index.js
│   │   ├── apis
│   │   │   └── news.js
│   │   ├── components
│   │   │   ├── About.js
│   │   │   ├── App.js
│   │   │   ├── CategoryHeading.js
│   │   │   ├── Footer.js
│   │   │   ├── Navigation.js
│   │   │   ├── SearchForm.js
│   │   │   ├── Stories.js
│   │   │   ├── StoryCard.js
│   │   │   ├── SubCategory.js
│   │   │   ├── groups
│   │   │   │   ├── Entertainment.js
│   │   │   │   ├── Food.js
│   │   │   │   ├── Home.js
│   │   │   │   ├── Money.js
│   │   │   │   ├── Politics.js
│   │   │   │   ├── Sports.js
│   │   │   │   ├── Technology.js
│   │   │   │   └── TopStories.js
│   │   │   └── styles
│   │   │       ├── cards.css
│   │   │       └── subCategory.css
│   │   ├── index.js
│   │   ├── reducers
│   │   │   ├── index.js
│   │   │   ├── newsReducer.js
│   │   │   └── themeReducer.js
│   │   └── serviceWorker.js
│   └── yarn.lock
├── config.js
├── controller
│   └── newsapi
│       ├── Categories.js
│       ├── Sources.js
│       ├── Stories.js
│       └── index.js
├── dev.js
├── helpers
│   └── index.js
├── index.js
├── package-lock.json
├── package.json
├── prod.js
└── tree.txt
```
