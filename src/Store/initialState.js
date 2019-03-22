import parkMeBot1 from '../Modal/images/parkMeBot1.png'
import parkMeBot2 from '../Modal/images/parkMeBot2.gif'
import parkMeBot3 from '../Modal/images/parkMeBot3.gif'
import colorGame1 from '../Modal/images/colorGame1.png';
import colorGame2 from '../Modal/images/colorGame2.png';
import colorGame3 from '../Modal/images/colorGame3.png';
import smarterBear1 from '../Modal/images/smarterBear1.png';
import smarterBear2 from '../Modal/images/smarterBear2.png';
import smarterBear3 from '../Modal/images/smarterBear3.png';
import curva1 from '../Modal/images/curva1.png';
import curva2 from '../Modal/images/curva2.png';
import curva3 from '../Modal/images/curva3.png';
import hackerHaus1 from '../Modal/images/hackerHaus1.png';
import hackerHaus2 from '../Modal/images/hackerHaus2.png';
import hackerHaus3 from '../Modal/images/hackerHaus3.png';
import frais1 from '../Modal/images/frais1.png';
import frais2 from '../Modal/images/frais2.png';
import frais3 from '../Modal/images/frais3.png';
import portfolio1 from '../Modal/images/portfolio1.png';
import portfolio2 from '../Modal/images/portfolio2.png';
import portfolio3 from '../Modal/images/portfolio3.png';

const projects = [
  {
    id: 0,
    title: 'ParkMe Bot',
    blurb: 'The bot that finds you a spot!',
    detail: "This Slack bot application accepts and matches user parking orders in real-time. Built in JavaScript using Express/Node server and persists orders using a hosted MongoLab database. Also features slash commands and interactive components as part of its API.",
    url: 'http://github.com/izzydoesit/parkMeBot',
    github: 'https://github.com/izzydoesit/parkMeBot',
    pics: [ parkMeBot1, parkMeBot2, parkMeBot3 ]
  },
  {
    id: 1,
    title: 'The Color Game',
    blurb: 'Test your hex-guessing skills here',
    detail: "The Color Game offers fun for hours, offering both easy and hard levels.  Written in JavaScript, HTML5 and CSS, it uses the jQuery library for animation and dynamic DOM manipulation to provide entertaining and engaging user interaction.",
    url: 'http://izzydoesit.github.io/colorGame',
    github: 'https://github.com/izzydoesit/colorgame',
    pics: [ colorGame1, colorGame2, colorGame3 ]
  },
  {
    id: 2,
    title: 'Israel D. Matos.com',
    blurb: 'Portfolio site',
    detail: "Mobile-first React UI w/ Redux architecture, Express.js server that leverages server-side rendering, an interactive pop-up modal, custom-built image carousels, and fully functioning contact form to display a body of software engineering work.",
    url: 'https://www.israeldmatos.com/',
    github: 'https://github.com/izzydoesit/israeldmatos.com',
    pics: [ portfolio1, portfolio2, portfolio3 ]
  },
  {
    id: 3,
    title: 'Smarter Bear',
    blurb: 'Find out what the insiders are trading...',
    detail: "The Smarter Bear app scrapes & displays SEC insider trading data along with confidence scores from a proprietary algorithm. Designed using decoupled architecture with a React/Redux client & Ruby on Rails API. Incorporates WebHose API for real-time news feed & HighCharts for interactive visual data display.",
    url: 'https://smarterbear.herokuapp.com/',
    github: 'https://github.com/izzydoesit/smarterbearclient',
    pics: [ smarterBear1, smarterBear2, smarterBear3 ]
  },
  {
    id: 4,
    title: 'Hackerhaus',
    blurb: 'The NEXT best thing in SF housing...',
    detail: "List or search for your property in Hackerhaus' dynamically mapped inventory w/ interactive GUI. Uses MapBox API, Geocoding, secure user authentication and Elastic Search built on a full stack Rails application.",
    url: 'https://hackerhaus.herokuapp.com/',
    github: 'https://github.com/izzydoesit/hackerhaus',
    pics: [ hackerHaus1, hackerHaus2, hackerHaus3 ]
  },
  {
    id: 5,
    title: 'Curva Fitness',
    blurb: 'Get CURVA fit!',
    detail: "Ruby on Rails eCommerce app designed for today's fitness professional. CurvaFit offers an online store complete with checkout payment processing, and a scheduling page to reserve available time slots and require good faith deposit at booking, using Square API and Spree shopping cart.",
    url: 'https://curva.herokuapp.com/',
    github: 'https://github.com/izzydoesit/curva_proto2',
    pics: [ curva1, curva2, curva3 ]
  },
  {
    id: 6,
    title: 'Frais Recipes',
    blurb: 'Discover a new favorite dish!',
    detail: "Interactive recipe-sharing site with user profiles, BCrypt authentication and user upvoting capabilities. This app was built using the Sinatra framework, Ruby & JavaScript.",
    url: 'https://recipesbyfrais.herokuapp.com/',
    github: 'https://github.com/izzydoesit/frais',
    pics: [ frais1, frais2, frais3 ]
  },
];

export default {
  projects,
  activeIndex: 0,
  currentProject: {
    ...projects[0]
  },
  modalIsOpen: false,
  activeModalIndex: 0,
  cardHover: false,
  buttonHover: false,
}