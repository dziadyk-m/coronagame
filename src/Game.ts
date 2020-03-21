import 'phaser';

import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    renderer: Phaser.AUTO,
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
    scale: {
        width: window.innerWidth,
        height: window.innerHeight
    }
};

new Phaser.Game(config);
