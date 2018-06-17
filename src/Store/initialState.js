import uniqueId from 'lodash/uniqueId';
import smarterBear1 from '../Modal/smarterbear.png';
import smarterBear2 from '../Modal/SmarterBear2.png';
import smarterBear3 from '../Modal/SmarterBear3.png';
import colorGame1 from '../Modal/colorGame.png';
import curvaFit1 from '../Modal/curvaFit.png';
import hackerHaus1 from '../Modal/hackerhaus.png';
import frais1 from '../Modal/frais.png';

const projects = [
  { id: 0, 
    title: 'The Color Game', 
    blurb: 'Test your hex-guessing skills here',
    description: "The Color Game offers fun for hours as the user can pick from easy and hard levels.  Written in JavaScript, HTML5 and CSS.  Uses jQuery library for animation and DOM manipulation.",
    url: 'http://izzydoesit.github.io/colorGame', 
    github: 'https://github.com/izzydoesit/colorgame',
    pics: [colorGame1 ] },
  { id: 1, 
    title: 'Smarter Bear', 
    blurb: 'Find out what the insiders are trading...',
    description: "The Smarter Bear uses data scraped SEC servers to calculate and display insider trading activity in different companies and provides a confidence rating.  Uses a decoupled architecture w/ React/Redux UI calling a backend Ruby on Rails API. Incorporates WebHose API for company news feed & HighCharts for visual data display.", 
    url: 'https://smarterbear.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/smarterbearclient',
    pics: [smarterBear1, smarterBear2, smarterBear3 ] },
  { id: 2, 
    title: 'Curva Fitness', 
    blurb: 'Get CURVA fit!',
    description: "Ruby on Rails eCommerce app for the new fitness professional: CurvaFit offers diet tips & tricks, an online store to source key ingredients implemented in Spree, and a training page that manages scheduling & deposit payment using Square API.", 
    url: 'https://curva.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/curva_proto2',
    pics: [curvaFit1 ] },
  { id: 3, 
    title: 'Hackerhaus', 
    blurb: 'The NEXT best thing in SF housing...',
    description: "List or search for your property in Hackerhaus' dynamically mapped inventory w/ interactive GUI. Uses MapBox API, Geocoding and Elastic Search in Ruby on Rails application.", 
    url: 'https://hackerhaus.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/hackerhaus',
    pics: [hackerHaus1 ] },
  { id: 4, 
    title: 'Frais Recipes', 
    blurb: 'Discover a new favorite dish!',
    description: "Interactive recipe-sharing site with user profiles and crowd upvoting capabilities, built in Sinatra framework using Ruby & JavaScript.", 
    url: 'https://recipesbyfrais.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/frais',
    pics: [frais1 ] }
];

export default {
  projects,
  currentProject: {
    ...projects[0]
  },
  modalIsOpen: false,
  activeModalSlide: 0,
  cardHover: false,
  buttonHover: false,
}