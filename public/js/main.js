import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';

const canvas = document.querySelector('#screen');
// Acces the context API to actually draw on the canvas
const context = canvas.getContext('2d');

function drawBackground(background, context,sprites){
    background.ranges.forEach(([x1, x2, y1, y2])=>{
        for(let x =x1; x< x2; ++x){
            for (let y=y1; y<y2; ++y){
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

loadImage('./img/mario_tileset.png')
    .then((image)=>{
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('ground', 0 , 0);
        sprites.define('sky', 3 , 23);
        
        loadLevel('1-1')
            .then(level=>{
                console.log(level)
                level.backgrounds.forEach(background=>{
                    console.log(background);
                    drawBackground(background, context, sprites);
                })
                // drawBackground(level.background[1], context, sprites);
            });
        // for(let x =0; x< 25; ++x){
        //     for (let y=12; y<14; ++y){
        //         sprites.drawTile('ground', context, x, y);
        //     }
        // }
    });