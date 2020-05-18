import Compositor from './Compositor.js';

export default class Level {
    constructor(){
        this.composition = new CompositionEvent();
        this.entities = new Set();    
    }
}