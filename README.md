# israeldmatos.com

__Portfolio Page__


## Overview

  Mobile-first Personal website showcasing my projects built using JavaScript (React/Redux, Express, Node.js) and Ruby on Rails. The page comes alive with animated components triggered when they slide into the viewport, and features a swipeable carousel with a pop up modal to give projects life. Also has a fully-functioning self-validating contact form, scrolling pop-down header bar with page links and a footer with social links.

## Libraries

### Redux

* Crucial for state management with modal pop-up and carousel components

### Express

* Server framework used to add contact form functionality with SendGrid mail API integration

### React-Swipeable

* Allows me to build mobile-first and respond to mobile-only events

### React-Modal

* Adds a delightful user experience with interactivity that helps give color and detail to projects at the click of a mouse

## Key decisions

* **Designed with User Experience first**

  80% of your users will be accessing your web application through a mobile-device, whether you want them to or not.    Mobile-first is no longer a nice-to-have in our modern development world, its a MUST-HAVE.
  
  We have also used a flat minimalist design and used plenty of negative space in our application to help create a smooth user experience. This guideline ensured every component had enough space to stand out and guides the user from land to finish.
  
  Animations were also something I wanted to incorporate into this page without letting them interfere with the user experience.  They were set on only animating once so the components became fixed after the user scrolled past them once.  Animating upon every viewport entry became too much and distracted from the purpose of the page, to showcase my work.
  
* **Flexible Components**

  Built with maintainability in mind, I built every component to make it easily expandable and adaptable for the future.  I knew, for example, that I would have more projects at some point in the future.  Being able to easily add them to my portfolio project and update all their references became evidently important. Being 
  
  Being able to swap them out or change them when I wanted a different look also became paramount.  The landing component currently shows an animation, but we can easily swap it out for another since it's built using a canvas element.

## Improvements

* **Blog**

  Coming soon you'll also be able to follow me along on my blog and check out some tutorials on how to implement different functionality into your application and learnings I found important along my coding journey.

* **Live links to deployed Slack chat bot** 

  You'll be able to join a Slack workspace and chat with the bot real-time. Besides finding you a parking spot, he can also tell jokes and is a great conversationalist!

## Getting Started

### Prerequisites

```
node 8.9.4
npm 6.2.0
```

### Installing
From the command terminal, clone the repository to your local directory...
```
$ git clone https://www.gihub.com/izzydoesit/israeldmatos.com.git
$ cd israeldmatos.com
```

Then run npm commands to install all dependencies and run the development server.  

```
$ npm install
$ npm run dev
```

### Dependencies

* [Babel/ES6](http://babeljs.io) - JavaScript ES6 compiler
* [Redux](https://www.npmjs.com/package/body-parser) - State management architecture
* [Express](https://www.expressjs.com) - web application framework
* [React-swipeable]() - library to handle swiping events
* [React-modal]() - modal component to build pop-up interactivity
* [React-snowflakes)() - snowflake animation with custom controls


# Author
* **Israel Matos** ([Portfolio](https://www.israeldmatos.com) | [LinkedIn](https://linkedin.com/in/israedmatos) | [Github](https://github.com/izzydoesit))

# License

This project is licensed under the Apache 2.0 License - see [LICENSE.md](LICENSE.md) file for details
