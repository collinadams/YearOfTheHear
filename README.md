Year of the Hear
===========

Overview
==========
Year of the Hear is a web app that was built in 24 hours by a single engineer. It interacts with two separate APIs to read facts about historical years out loud. The [Mashape Numbers API](https://market.mashape.com/divad12/numbers-1) accepts years in history and returns facts about that year to the client. The [Responsive Voice API](http://responsivevoice.org/api/) converts a string of text to speech.

Installation
=========

To run this app locally, enter these commands in the terminal:
```
$ git clone https://github.com/collinadams/YearOfTheHear.git
$ cd yearofthehear
$ npm install
$ bower install
$ nodemon index.js
```

Technology Stack
=========

- AngularJS (ng-router)
- Node.js
- Express

File Structure
```
YearOfTheHear
  |-client
    |---app             # Views, controllers, and factories
  |-server                   
  
```

# Features

- Retrieve a random fact about any year in history
- Hear the fact with spoken audio

#Style Guide
All code adheres to the airbnb style guide.

Engineer
==========
- [Collin Adams](https://github.com/collinadams)
