import 'phaser';

import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
import {DialogModalPlugin} from "./plugins/DialogModalPlugin";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
let WEBGL_RENDERER = true;
let CANVAS_RENDERER = true;

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
    },
    // TODO: Do we really want fullscrean?
    scale: {
        width: window.innerWidth,
        height:  window.innerHeight
    }
};

new Phaser.Game(config);
