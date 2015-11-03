//import './asyncModules'
//import exclaimify from './exclaimify'
//const button = document.getElementById('button')
//var Dispatcher = require('flux').Dispatcher;
//import Dispatcher from 'flux'

require('./appUI.jsx')

import AppDispatcher from "./data/dispatcher/AppDispatcher";
import RollStore from "./data/stores/RollStore";

var temp = new RollStore(AppDispatcher);

updateGame()