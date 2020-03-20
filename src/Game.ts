import "phaser";

import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
    
const config: GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'impact',
        impact: { gravity: 0 }
    },
    scene: [
        Preloader,
        Main
    ]
};

new Phaser.Game(config);