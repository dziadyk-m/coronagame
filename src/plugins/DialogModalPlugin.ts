import BasePlugin = Phaser.Plugins.BasePlugin;

export class DialogModalPlugin extends BasePlugin {
    constructor(PluginManager: Phaser.Game) {
        super(PluginManager);
        this.createDialog('plugin loaded');
    }

    createDialog(msg: string) {
        console.log(msg);
    }

    boot() {
        const eventEmitter = this.systems.events;
        eventEmitter.on('shutdown', this.shutdown, this);
        eventEmitter.on('destroy', this.destroy, this);
        console.log('Dialog modal events set.');
    }

    shutdown() {
        console.log('Shutdown hook.');
    }

    destroy() {
        this.shutdown();
        this.scene = undefined;
    }
}
