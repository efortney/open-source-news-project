# Spotlight

## About 
A simple Node.js app for searching the news. I got tired of using Apple news, all I ever see is Trump headlines. Boo.
Contributions are welcome.

live link: https://spotlight-web.herokuapp.com/

## Tech and API's Used
* Node.js
* EJS (gross I know)
* NewsAPI.org  

## Structure 
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