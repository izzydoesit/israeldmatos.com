import uniqueId from 'lodash/uniqueId';
import smarterBear from '../Projects/smarterbear.png';
import colorGame from '../Projects/colorGame.png';
import curvaFit from '../Projects/curvaFit.png';
import hackerHaus from '../Projects/hackerhaus.png';
import frais from '../Projects/frais.png';

const projects = [
  { id: 0, 
    title: 'The Color Game', 
    blurb: 'Test your hex-guessing skills here',
    description: "Someting interesteing",
    url: 'http://izzydoesit.github.io/colorGame', 
    github: 'https://github.com/izzydoesit/colorgame',
    pics: [colorGame] },
  { id: 1, 
    title: 'Smarter Bear', 
    blurb: 'Find out what the insiders are trading...',
    description: "Someting interesteing", 
    url: 'https://smarterbear.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/smarterbearclient',
    pics: [smarterBear] },
  { id: 2, 
    title: 'Curva Fitness', 
    blurb: 'Get CURVA fit!',
    description: "Someting interesteing", 
    url: 'https://curva.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/curva_proto2',
    pics: [curvaFit] },
  { id: 3, 
    title: 'Hackerhaus', 
    blurb: 'The NEXT best thing in SF housing...',
    description: "Someting interesteing", 
    url: 'https://hackerhaus.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/hackerhaus',
    pics: [hackerHaus] },
  { id: 4, 
    title: 'Frais Recipes', 
    blurb: 'Discover a new dish or share your fav',
    description: "Someting interesteing", 
    url: 'https://recipesbyfrais.herokuapp.com/', 
    github: 'https://github.com/izzydoesit/frais',
    pics: [frais] }
];

export default {
  projects,
  currentProject: {
    ...projects[0]
  },
  modalOpen: false,
  activeModalSlide: 0,
  cardHover: false,
  buttonHover: false,
}