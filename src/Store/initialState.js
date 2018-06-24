import uniqueId from 'lodash/uniqueId';
import smarterBear1 from '../Modal/images/smarterBear1.png';
import smarterBear2 from '../Modal/images/smarterBear2.png';
import smarterBear3 from '../Modal/images/smarterBear3.png';
import colorGame1 from '../Modal/images/colorGame1.png';
import colorGame2 from '../Modal/images/colorGame2.png';
import colorGame3 from '../Modal/images/colorGame3.png';
import curva1 from '../Modal/images/curva1.png';
import curva2 from '../Modal/images/curva2.png';
import curva3 from '../Modal/images/curva3.png';
import hackerHaus1 from '../Modal/images/hackerHaus1.png';
import hackerHaus2 from '../Modal/images/hackerHaus2.png';
import hackerHaus3 from '../Modal/images/hackerHaus3.png';
import frais1 from '../Modal/images/frais1.png';
import frais2 from '../Modal/images/frais2.png';
import frais3 from '../Modal/images/frais3.png';

const projects = [
  { id: 0, 
    title: 'The Color Game', 
    blurb: 'Test your hex-guessing skills here',
    detail: "The Color Game offers fun for hours as the user can pick from easy and hard levels.  Written in JavaScript, HTML5 and CSS.  Uses jQuery library for animation and DOM manipulation.",
    url: 'http://izzydoesit.github.io/colorGame', 
    github: 'https://github.com/izzydoesit/colorgame',
    pics: [ colorGame1, colorGame2, colorGame3 ] },
  { id: 1, 
    title: 'Smarter Bear', 
    blurb: 'Find out what the insiders are trading...',
    detail: "The Smarter Bear scrapes & displays SEC insider trading data.  Uses a decoupled architecture w/ React/Redux UI & Ruby on Rails API. Incorporates WebHose API for company news feed & HighCharts for visual data display.", 
    url: 'https://smarterbear.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/smarterbearclient',
    pics: [ smarterBear1, smarterBear2, smarterBear3 ] },
  { id: 2, 
    title: 'Curva Fitness', 
    blurb: 'Get CURVA fit!',
    detail: "Ruby on Rails eCommerce app for the new fitness professional: CurvaFit offers diet tips & tricks, an online store to source key ingredients implemented in Spree, and a training page that manages scheduling & deposit payment using Square API.", 
    url: 'https://curva.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/curva_proto2',
    pics: [ curva1, curva2, curva3 ] },
  { id: 3, 
    title: 'Hackerhaus', 
    blurb: 'The NEXT best thing in SF housing...',
    detail: "List or search for your property in Hackerhaus' dynamically mapped inventory w/ interactive GUI. Uses MapBox API, Geocoding and Elastic Search in Ruby on Rails application.", 
    url: 'https://hackerhaus.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/hackerhaus',
    pics: [ hackerHaus1, hackerHaus2, hackerHaus3 ] },
  { id: 4, 
    title: 'Frais Recipes', 
    blurb: 'Discover a new favorite dish!',
    detail: "Interactive recipe-sharing site with user profiles and crowd upvoting capabilities, built in Sinatra framework using Ruby & JavaScript.", 
    url: 'https://recipesbyfrais.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/frais',
    pics: [ frais1, frais2, frais3 ] }
];

export default {
  projects,
  currentProject: {
    ...projects[0]
  },
  modalIsOpen: false,
  activeModalIndex: 0,
  cardHover: false,
  buttonHover: false,
}