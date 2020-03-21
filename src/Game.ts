import 'phaser';

import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import { Preloader } from './scenes/Preloader';
import { DialogModalPlugin } from './plugins';
import { Main } from './scenes/Main';

const config = {
    type: Phaser.CANVAS,
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
    },
    plugins: {
        scene: [
            {
                key: 'dialogModalPlugin',
                plugin: DialogModalPlugin,
                start: true
            },
            {
                key: 'rexUI',
                plugin: RexUIPlugin,
                mapping: 'rexUI'
            }
        ]
    }
};

new Phaser.Game(config);
