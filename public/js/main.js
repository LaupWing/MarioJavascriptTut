import {loadLevel} from './loaders.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';
import Compositor from './Compositor.js';
import {createSpriteLayer, createBackgroundLayer} from './layers.js';

const canvas = document.querySelector('#screen');
// Acces the context API to actually draw on the canvas
const context = canvas.getContext('2d');


Promise
    .all([
        loadMarioSprite(),
        loadBackgroundSprites(),
        loadLevel('1-1')
    ])
    .then(([marioSprite,backgroundSprites,level])=>{
        const comp = new Compositor();
        const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
        comp.layers.push(backgroundLayer);

        const pos = {
            x: 64,
            y: 64
        };
        const spriteLayer = createSpriteLayer(marioSprite, pos);
        comp.layers.push(spriteLayer);

        function update(){
            comp.draw(context);
            pos.x += 2;
            pos.y += 2;
            requestAnimationFrame(update);
        }
        update();
    });