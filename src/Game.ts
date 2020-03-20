import 'phaser';

import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';


const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    physics: {
        default: 'impact',
        impact: { gravity: 0 }
    },
    render: {
        antialias: false,
        pixelArt: true,
        roundPixels: true
    },
    scene: [Preloader, Main],
    // TODO: Do we really want fullscrean?
    scale: {
        width: window.innerWidth,
        height:  window.innerHeight
    }
};

new Phaser.Game(config);
